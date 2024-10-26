"use client"

import { Task } from "@prisma/client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation"

function NewPage() {

  const router = useRouter();

  const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); 
    const title = formData.get("title"); 
    const description = formData.get("description")// 

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data : Task = await res.json();
    console.log("Task created", data);

    router.push("/",);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2">
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounder">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
