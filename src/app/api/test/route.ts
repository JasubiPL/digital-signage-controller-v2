import { NextResponse } from "next/server";
import db from "@/lib/turso";

export async function GET() {
  try {
    const result = await db.execute("SELECT 1 + 1 AS result;");
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
