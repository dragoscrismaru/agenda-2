import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const jobs = mysqlTable("jobs", {
  id: int().primaryKey().autoincrement(),
  jobTitle: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  // user_id: number().unsigned().notNullable().references(usersTable.id),
});

export const usersTable = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  jobId: int("job_id").references(() => jobs.id),
});
