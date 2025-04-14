import Image from "next/image";
// import { cn } from "../lib/utils";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px] bg-black ">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px] z-2">
        <Link href="/">
          <Image
            src="/Portfolio.png"
            width={120}
            height={80}
            className="max-h-[80px] h-full object-contain object-center"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-blue-600 font-[600]">Its Me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Naveen Udaikumar, <br />
            <Cover> Web Developer</Cover>
          </h2>
          <a
            href="#Contact"
            className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600] hover:scale-105 flex justify-center items-center"
          >
            Hire Me
            <FaArrowRight className="ml-1" />
          </a>
        </div>
      </div>

      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src="/portfolio_image.png"
          width={800}
          height={1200}
          className="w-full max-h-[90vh] object-contain object-bottom"
          alt="image"
        />
      </div>

      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
        <a
          href="#Contact"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border-1 border-[#333333] text-white font-sans rounded-[30px] mx-auto pb-[2px] hover:p-[10px] hover:bg-neutral-900 transition-all ease-in-out font-[600] hover:scale-105"
        >
          Hire Me <FaArrowRight className="ml-1" />
        </a>
        <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-300 text-start mt-[20px]">
          Hi, I&apos;m Naveen, a Web Developer skilled in the MERN stack,
          automation, and backend systems. Currently upskilling in Data Science,
          I&apos;m exploring AI and machine learning to solve real-world
          challenges. Always eager to learn and innovate—let&apos;s connect! 🚀
          <br />
        </p>
      </div>

      <ShootingStars className="z-[1]" />
      <StarsBackground className="z-[1]" />
    </div>
  );
}
