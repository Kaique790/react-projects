import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, name } = await req.json();

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userExists) {
    return NextResponse.json(
      {
        message: "Username already exists",
      },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      username,
      name,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set("@ignitecall:userId", user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return NextResponse.json(user, { status: 201 });
}
