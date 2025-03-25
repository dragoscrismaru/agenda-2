import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
// import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  // console.log(req.headers)
  //   try {
  try {
    const db = drizzle({ schema });

    const employees = await db.query.findMany({
      width: {},
    });
    //   .select()
    //   .from(usersTable)
    //   .where([eq(usersTable.name, "Dragos")]);

    return NextResponse.json({
      employees: employees,
    });
  } catch (error) {
    console.error("[EMPLOYEES_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  // const emps = await db.query.
}
