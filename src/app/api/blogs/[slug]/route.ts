import { NextRequest, NextResponse } from "next/server";
import { blogs } from "../blogData";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return Response.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
