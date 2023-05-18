import { Kysely, Generated } from "kysely";
import { LibsqlDialect } from "@libsql/kysely-libsql";

interface PointsTable {
  point_id: Generated<number>
  latitude: number
  longitude: number
  has_next: boolean
  next: number
  total_route_points: number
}

interface BikesTable {
  bike_id: Generated<number>
  baterry: number
  running_time_seconds: number
  destination: string
  point_id: number
}

interface Database {
  bikes: BikesTable
  points: PointsTable
}

export const db = new Kysely<Database>({
    dialect: new LibsqlDialect({
      url: process.env.DB_URL,
      authToken: process.env.AUTH_TOKEN
    }),
});


