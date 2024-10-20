"use client"
import { useRouter } from "next/router";

export const metadata = {
  title: "Acerca de nosotros",
};

export default function AboutPage() {
    const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus
        pariatur reiciendis, magni, id nobis accusamus rem sapiente architecto
        quos incidunt voluptatem minima illo nostrum! Modi rem maxime
        dignissimos harum.
      </p>
      <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
        alert('executing code');
        router.push('/');
      }}>
        Click
      </button>
    </section>
  );
}
