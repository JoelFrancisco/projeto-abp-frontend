import { NextResponse } from "next/server";
import { db } from "../../../infrastructure/database";
import { getNewBaterry } from "./getNewBattery";
import { getNewRunningTimeSeconds } from "./getNewRunningTimeSeconds";

type UpdateSet = {
  baterry?: number
  running_time_seconds?: number
  point_id?: number
  destination?: string
}

export async function GET() {
  const bike = await db
    .selectFrom('bikes')
    .innerJoin('points', 'points.point_id', 'bikes.point_id')
    .where('bike_id', '=', 1)
    .select(['bike_id', 'baterry', 'bikes.point_id', 'has_next', 'next', 'running_time_seconds', 'destination'])
    .executeTakeFirst();

  if (!bike) {
    return NextResponse.json({ message: "Any bikes running" });
  }

  const newBaterry = getNewBaterry(bike.baterry);

  const newRunningTimeSeconds = getNewRunningTimeSeconds(bike.running_time_seconds);

  let updateSet: UpdateSet = {
    baterry: newBaterry,
    running_time_seconds: newRunningTimeSeconds
  };

  if (bike.destination == 'SATC') {
    if (bike.has_next) {
      updateSet.point_id = bike.next
    } else {
      updateSet.point_id = bike.point_id - 1;
      updateSet.destination = "CT";
    }
  } else {
    if (bike.point_id == 0) {
      updateSet.point_id = bike.next;
      updateSet.destination = "SATC";
    } else {
      updateSet.point_id = bike.point_id - 1;
    }
  }

  await db
    .updateTable('bikes')
    .set(updateSet)
    .where('bike_id', '=', bike.bike_id)
    .executeTakeFirst();

  return NextResponse.json({
    status: "ok"
  });
}

