const posts = [
  {
    title: "First post",
    slug: "first-post",
    content: "Hi there... This is content",
  },
  {
    title: "Second post",
    slug: "second-post",
    content: "Ok what the heck",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
