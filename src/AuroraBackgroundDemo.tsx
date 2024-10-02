"use client";

import { motion } from "framer-motion";
import React from "react";
import infoImg from "./assets/artquest.webp"
import introGif from "./assets/Animation - 1727805011685.gif"
import { AuroraBackground } from "./Components/lib/aurora-background";
import Lottie from "lottie-react";
import { Intro } from "./Components/intro/Intro";
import VRGLASSES from "../src/GIF/vr-glasses.json"
import { Footer } from "./Components/Footer/Footer";



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
        <Intro />
        <div className="flex items-center justify-center landing-info space-x-16 flex">
          <div className="info-text">
            <div className="text-3xl w-30 md:text-7xl font-bold dark:text-white">
              Junction where <br />game creators meet <br /> gamers and <br /> get benefits mutually
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              there's a place for everyone here
            </div>
            <div className="space-x-8 quest-container">
              <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Join Quest
              </button>
              <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Create Quest
              </button>
            </div>
          </div>
          <div className="infoImg flex items-center justify-center">
            <Lottie animationData={VRGLASSES} loop={true} />
          </div>
        </div>
        {/* <Footer /> */}
      </motion.div>
    </AuroraBackground>
  );
}
