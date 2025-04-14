// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-s md:text-xl lg:text-3xl font-bold mb-2">
            Summer Intern
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-neutral-700 dark:text-neutral-300 text-s md:text-lg lg:text-2xl font-semibold mb-2">
              Granite River Lab Technologies Pvt. Ltd.
            </h2>
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
                Developed and optimized an automated web testing framework using
                Python and Selenium, improving test efficiency and accuracy.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
                Engineered robust test scripts with PyYAML for configuration
                management, reducing manual intervention by 40%.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
                Implemented logging and debugging mechanisms, streamlining issue
                detection and resolution.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Bachelors",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-s md:text-xl lg:text-3xl font-bold mb-2">
            B.Tech Computer Science and Engineering
          </h1>
          <div className="flex justify-between gap-4">
            <h2 className="text-neutral-700 dark:text-neutral-300 text-s md:text-lg lg:text-2xl font-semibold mb-2">
              SRM Institute of Science and Technology, Kattankulathur
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
              CGPA:8.88
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Class XII",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-s md:text-xl lg:text-3xl font-bold mb-2">
            Class XII
          </h1>
          <div className="flex justify-between gap-4">
            <h2 className="text-neutral-700 dark:text-neutral-300 text-s md:text-lg lg:text-2xl font-semibold mb-2">
              GRD Public School, Coimbatore
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
              74%
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Class X",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-s md:text-xl lg:text-3xl font-bold mb-2">
            Class X
          </h1>
          <div className="flex justify-between gap-4">
            <h2 className="text-neutral-700 dark:text-neutral-300 text-s md:text-lg lg:text-2xl font-semibold mb-2">
              Ideal Mount Litera Zee School, Coimbatore
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-s lg:text-xl font-semibold mb-2">
              85.8%
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="z-2">
        <h1 className="flex items-center justify-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-2">
          <Cover>Resume</Cover>
        </h1>
        <Timeline data={data} />
      </div>
      <ShootingStars className="z-[1]" />
      <StarsBackground className="z-[1]" />
    </div>
  );
}
