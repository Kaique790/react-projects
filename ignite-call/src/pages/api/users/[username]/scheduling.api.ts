import { getGoogleOAuthToken } from "@/lib/google";
import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const username = String(req.query.username);

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return res.status(404).json({
      messsage: "User not found",
    });
  }

  const schedulingBody = z.object({
    name: z.string(),
    observation: z.string(),
    email: z.email(),
    date: z.string(),
  });

  const { name, email, date, observation } = schedulingBody.parse(req.body);
  const schedulingDate = dayjs(date).startOf("hour");

  const isDatePast = schedulingDate.isBefore(new Date());

  if (isDatePast) {
    return res.status(400).json({
      messsage: "Date is in the past",
    });
  }

  const conflictScheduling = await prisma.schedulings.findFirst({
    where: {
      user_id: user.id,
      date: date,
    },
  });

  if (conflictScheduling) {
    return res.status(400).json({
      messsage: "There is another at the same time",
    });
  }

  const scheduling = await prisma.schedulings.create({
    data: {
      name,
      email,
      observation,
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  });

  const calendar = google.calendar({
    version: "v3",
    auth: await getGoogleOAuthToken(user.id),
  });

  await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: `Ignite call: ${user.name}`,
      description: observation,
      start: {
        dateTime: schedulingDate.format(),
      },
      end: {
        dateTime: schedulingDate.add(1, "hour").format(),
      },
      attendees: [{ email, displayName: name }],
      conferenceData: {
        createRequest: {
          requestId: scheduling.id,
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      },
    },
  });

  return res.status(201).json({
    message: "Created scheduling",
  });
}
