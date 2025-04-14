"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "./ui/cover";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="flex items-center justify-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <Cover> Projects</Cover>
      </h2>

      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Web App",
    title: "Todo Website",
    src: "https://images.unsplash.com/photo-1611223489967-7e994cdcb01c?q=80&w=3000&auto=format&fit=crop",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            A sleek and responsive Todo Web App
          </span>{" "}
          built with React and Tailwind. Organize tasks efficiently, mark as
          complete, filter, and store them using localStorage.
        </p>
      </div>
    ),
  },
  {
    category: "Admin System",
    title: "Inventory Management",
    src: "https://images.unsplash.com/photo-1617975045534-47d89e3b6e35?q=80&w=3000&auto=format&fit=crop",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Full-stack inventory tracker
          </span>{" "}
          using MERN stack. Real-time updates, item status, role-based access,
          and low-stock alerts with responsive dashboard.
        </p>
      </div>
    ),
  },
  {
    category: "Community Platform",
    title: "Campus Connect",
    src: "https://images.unsplash.com/photo-1531324370597-8596c1f458d4?q=80&w=3000&auto=format&fit=crop",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Helping students stay connected
          </span>{" "}
          through a platform to find teammates for hackathons, share events, and
          collaborate on ideas. Built with Next.js.
        </p>
      </div>
    ),
  },
  {
    category: "EdTech",
    title: "Edu Track",
    src: "https://images.unsplash.com/photo-1603570417488-380c7d6d8268?q=80&w=3000&auto=format&fit=crop",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            A student progress monitoring tool
          </span>{" "}
          for personalized learning. Tracks performance, suggests resources, and
          highlights weak areas using machine learning.
        </p>
      </div>
    ),
  },
  {
    category: "Freelance",
    title: "Client Projects",
    src: "/projects/client-project.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Real-world freelance experience
          </span>{" "}
          in building automation tools, responsive websites, and dashboards for
          small businesses and startups.
        </p>
      </div>
    ),
  },
];
