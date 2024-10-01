"use client";

import { motion } from "framer-motion";
import React from "react";
import infoImg from "./assets/artquest.webp"
import { AuroraBackground } from "./Components/lib/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="landing-info space-x-16 flex">
          <div className="info-text">
            <div className="text-3xl w-30 md:text-7xl font-bold dark:text-white">
              Junction where <br />game creators meet <br /> gamers and <br /> get benefits mutually
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              there's a place for everyone here
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Get Started
            </button>
          </div>
          <div className="infoImg items-center justify-center flex">
            <img className="rounded-3xl flex  infoImg w-96 h-1/2 grid gap-4 grid-cols-1 grid-rows-1" src={infoImg} alt="image" />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
