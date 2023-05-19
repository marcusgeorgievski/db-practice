import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const targerUserId = await req.json();

  // console.log("[POST]: ", currentUserEmail, " -> ", targerUserId);

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targerUserId,
    },
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  // console.log("\n\n\nTEST");
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const targerUserId = req.nextUrl.searchParams.get("targetUserId")!;

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targerUserId,
      },
    },
  });

  return NextResponse.json(record);
}
