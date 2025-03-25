import { usersTable } from "@/db/schema";

// import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
// import * as schema from "@/db/schema";
import "dotenv/config";

import db from "@/db";

// Utility to create error responses
function createErrorResponse(message: string, status: number) {
  return NextResponse.json({ error: true, message }, { status });
}

export async function GET() {
  // console.log(req.headers)
  //   try {
  try {
    // const user: typeof usersTable.$inferInsert = {
    //   name: "John2",
    //   jobId: 1,
    //   email: "john23@example.com",
    // };

    await db.insert(usersTable).values({
      name: "1231231223",
      // jobId: 100,
      email: "john21231223@example.com",
    });

    const emps = await db
      .select({ id: usersTable.id, test: usersTable.name })
      .from(usersTable);

    console.log("employees", emps);
    return NextResponse.json({
      employees: [{ wtf: "test" }, ...emps],
    });
  } catch (error: any) {
    console.error("[EMPLOYEES_GET]", error);
    let status = 500;
    let message = "Internal Server Error";

    // Check for duplicate entry error
    if (error.code === "ER_DUP_ENTRY") {
      status = 400;
      message = "Duplicate entry error: The email address is already in use.";
    }
    // Check for foreign key violation error
    else if (
      error.sqlMessage &&
      error.sqlMessage.includes("foreign key constraint fails")
    ) {
      status = 400;
      message = "Foreign key violation: The specified job does not exist.";
    }

    // Return a structured error response
    return createErrorResponse(message, status);
  }

  // const emps = await db.query.
}
