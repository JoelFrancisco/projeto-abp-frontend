import { NextResponse } from "next/server"

export async function GET(
  _: Request,
  { params }: { params: { bike_id: number } }
) {
  return NextResponse.json([{
    bike_id: params.bike_id,
    latitude: -10.5109,
    longitude: -50.5109,
    baterry: 100,
    uptime_seconds: 10000,
  }]);
}
