"use client";
import { useRouter } from "next/navigation";
import { TaskCard as TaskCardType } from "@/types/taskCardTypes";
function TaskCard({ task }: TaskCardType) {
  const router = useRouter();

  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate-800
  hover:cursor-pointer"
      onClick={() => router.push("/tasks/edit/" + task.id)}
    >
      <h3 className="font-bold text-2xl">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
