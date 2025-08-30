import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Availability(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const username = String(req.query.username);
  const { year, month } = req.query;

  if (!year || !month) {
    return res.status(400).json({ message: "Year or month not provided" });
  }

  const user = await prisma.user.findUnique({
    where: {
      username: String(username),
    },
  });

  if (!user) {
    return res.status(404).json({
      messsage: "User not found",
    });
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  });

  const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter((weekDay) => {
    return !availableWeekDays.some(
      (available) => available.week_day === weekDay
    );
  });

  const blockedDatesRow = await prisma.$queryRaw`
    SELECT * FROM schedulings S

    WHERE S.user_id = ${user.id}
      AND DATE_FORMAT(S.date, "%Y-%m") = ${`${year}-${String(month).padStart(
        2,
        "0"
      )}`}
  `;

  return res.json({ blockedWeekDays });
}
