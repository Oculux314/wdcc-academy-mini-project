import { NextRequest, NextResponse } from "next/server";
import { blogs } from "./blogData";

export async function GET(req: NextRequest) {
  return NextResponse.json(blogs);
}
