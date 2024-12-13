import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import clsx from "clsx";
import { buttonVariants } from "./ui/button";
import { Task } from "@prisma/client";
import { Badge } from "./ui/badge";
import TaskButtonDelete from "./task-button-delete";
import Link from "next/link";

function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-blue-500": task.priority === "urgent",
            "bg-red-500": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span>{new Date(task.createdAt).toDateString()}</span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <TaskButtonDelete taskId={task.id} />
        <Link
          href={` /tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
