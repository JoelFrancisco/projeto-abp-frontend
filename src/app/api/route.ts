import { NextResponse } from "next/server";
import { db } from "../../infrastructure/database";

export async function GET() {
  const bike = await db
    .selectFrom('bikes')
    .innerJoin('points', 'points.point_id', 'bikes.point_id')
    .select(['latitude', 'longitude', 'baterry', 'running_time_seconds'])
    .where('bike_id', '=', 1)
    .executeTakeFirst();

  if (!bike) {
    return NextResponse.json({ message: "Any bikes running" });
  }

  return NextResponse.json({
    bikes: [bike]
  });
}
