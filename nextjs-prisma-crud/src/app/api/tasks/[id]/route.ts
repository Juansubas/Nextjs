import { prisma } from "@/libs/prisma";
import { Task } from "../../../../types/taskTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const task: Task | null = await prisma.task.findUnique({
    where: { id: Number(id) },
  });

  if (!task) {
    return NextResponse.json(
      { message: "Tarea no encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json(task);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const { id } = await params;

  console.log(id, "el id ");

  const taksUpdated: Task = await prisma.task.update({
    where: { id: Number(id) },
    data: data,
  });

  console.log(taksUpdated);

  return NextResponse.json(taksUpdated);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;

    console.log(id, "el id ");

    const taskRemoved: Task = await prisma.task.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error);
  }
}
