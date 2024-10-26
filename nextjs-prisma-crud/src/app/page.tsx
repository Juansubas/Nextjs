import { prisma } from "@/libs/prisma";
import { Task } from "../types/taskTypes";
import TaskCard from "@/components/TaskCard";
async function loadTasks(): Promise<Task[]> {
  // const res = await fetch('https://localhost:3000/api/tasks');
  // const data : Task []= await res.json();

  // return data;

  return (await prisma.task.findMany()) as Task[];
}

async function HomePage() {
  const tasks: Task[] = await loadTasks(); // Call the function to load tasks on component mount Tasks(); // Call the function to load tasks on component mount

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
