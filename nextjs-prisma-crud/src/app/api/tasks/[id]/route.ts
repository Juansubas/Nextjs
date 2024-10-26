import { prisma } from "@/libs/prisma";
import { Task } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const task: Task | null = await prisma.task.findUnique({
    where: { id: Number(params.id) },
  });

  if (!task) {
    return NextResponse.json(
      { message: "Tarea no encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json(task);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const data = await request.json();

  console.log(params.id, "el id ");

  const taksUpdated: Task = await prisma.task.update({
    where: { id: Number(params.id) },
    data : data,
  });

  console.log(taksUpdated)

  return NextResponse.json(taksUpdated);
}

export async function DELETE(request: NextRequest, params: { id: string }) {
  try {
    const taskRemoved: Task = await prisma.task.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error);
  }
}
