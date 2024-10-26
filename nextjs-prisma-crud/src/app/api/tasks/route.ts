import { prisma } from "@/libs/prisma";
import { Task } from "@prisma/client";
import { NextResponse } from "next/server";
import { TaskData } from "./types/taskDataTypes";

export async function GET() {
  const tasks: Task[] = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const {title, description} : TaskData  = await request.json();
  const newTask : Task = await prisma.task.create({
    data: {
        title: title,
        description: description,
      },
    }
  );
  return NextResponse.json(newTask);
}
