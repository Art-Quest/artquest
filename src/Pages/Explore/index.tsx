import { cn } from "../../Components/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../Components/lib/bento-grid";
import { FaPlaystation } from "react-icons/fa";
import { Boxes } from "../../Components/lib/background-boxes";
import "./Index.css"

function BentoGridDemo() {
  return (
    <div>
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-sm">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <div className="h-[100%] w-[70%] z-20 flex justify-start items-start bg-gray-400">
            GAME
          </div>
    <BentoGrid className="max-w-4xl mx-auto z-20 overflow-y-scroll scrollbar-hide">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
    </BentoGrid>
    </div>
        </div>
  );
}


export default BentoGridDemo

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
];