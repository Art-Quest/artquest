import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import infoImg from "./assets/artquest.webp";
import introGif from "./assets/Animation - 1727805011685.gif";
import { AuroraBackground } from "./Components/lib/aurora-background";
import Lottie from "lottie-react";
import { Intro } from "./Components/intro/Intro";
import VRGLASSES from "../src/GIF/vr-glasses.json";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Boxes } from "./Components/lib/background-boxes";
import { cn } from "./Components/lib/utils";

function AuroraBackgroundDemo() {
  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-sm">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <Header />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center mx-auto px-6 md:px-16 lg:mt-10">
          <div className="md:w-[60%]">
            <div className="text-4xl md:text-6xl 3xl:text-8xl font-bold dark:text-white leading-tight">
              Junction where <br /> game creators meet <br /> gamers and <br />{" "}
              benefit mutually
            </div>
            <div className="font-extralight text-lg md:text-3xl dark:text-neutral-200 py-4">
              There&apos;s a place for everyone here
            </div>
            <div className="flex space-x-4 md:space-x-8 mt-4">
              <button className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 z-20">
                Join Quest
              </button>
              <button className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 z-20">
                <Link to="/quest-create">Create Quest</Link>
              </button>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex items-center justify-center mt-6 md:mt-0">
            <Lottie animationData={VRGLASSES} loop={true} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuroraBackgroundDemo;

/* 
  <AuroraBackground>
      <Header />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="relative w-screen flex flex-col gap-4  px-4 mx-6"
        >
        
           <div className="">
            <div className="">
              <div className="text-xl md:text-7xl w-30  font-bold dark:text-white">
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
                  <Link to="/quest-create">Create Quest</Link>
                </button>
              </div>
            </div>
            <div className="w-[80%] flex items-center md:justify-center">
              <Lottie animationData={VRGLASSES} loop={true} />
            </div>
          </div> *
          // </motion.div>
          // <Footer />
          // </AuroraBackground>
*/
