import { prisma } from "@/libs/prisma";
import { Task } from "./types/taskTypes";
async function loadTasks() : Promise<Task[]> {

  // const res = await fetch('https://localhost:3000/api/tasks');
  // const data : Task []= await res.json();

  // return data;

  const tasks : Task[] = await prisma.task.findMany();

  return tasks;

}

function HomePage() {

  loadTasks(); // Call the function to load tasks on component mount Tasks(); // Call the function to load tasks on component mount

  return (
    <div>
      Tareas
    </div>
  )
}

export default HomePage
