import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, name } = await req.json();

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  });

  return NextResponse.json(user, { status: 201 });
}
