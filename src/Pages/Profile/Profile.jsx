import React, { useEffect, useRef } from "react";
import { Header } from "../../Components/Header/Header";
import gsap from "gsap";
import { GameIcon, GamePics, PlayGame } from "../../assets/svgs";
import { Footer } from "../../Components/Footer/Footer";

const Profile = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 1.5 });

    timeline.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    timeline.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <div className="w-full bg-slate-900 p-10">
        <Header />

        <div className="flex flex-col items-center justify-center py-20">
          <h1
            ref={titleRef}
            className="w-[50%] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-12 mx-auto font-gaming text-sm sm:text-md md:text-2xl text-center"
          >
            ArtQuest is revolutionizing the gaming industry by seamlessly
            blending gaming, the creator economy, and NFTs.
          </h1>
          <p
            ref={paragraphRef}
            className="text-center text-[14px] w-[50%] font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
          >
            Our platform empowers players and creators, fostering engagement and
            rewards.
          </p>
        </div>

        <div className="">
          <p className="text-white font-medium text-lg mx-auto py-12 text-center w-[80%]">
            Game creators benefit from Artquest by gaining a new channel to
            engage with their audience. By posting quests and challenges, they
            can extend their game&apos;s reach beyond traditional boundaries,
            creating immersive experiences that blend the digital and physical
            worlds.
            <br />
            Join Artquest today and be part of the future of gaming – where your
            achievements have real value, and every quest is an adventure
            waiting to happen!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 py-10">
          <div className="">
            <img src={PlayGame} alt="play game video" />
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-white text-lg md:text-3xl font-bold">
              Key Features
            </h1>
            <div className="text-white flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
                <p className="text-lg md:text-2xl">
                  Cross-game quests and challenges
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
                <p className="text-lg md:text-2xl">
                  Real-world gameplay elements
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
                <p className="text-lg md:text-2xl">
                  Creator tools for game developers
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
                <p className="text-lg md:text-2xl">NFT and token rewards</p>
              </div>

              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
                <p className="text-lg md:text-2xl">NFT and token rewards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-between py-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-12 h-[2px] bg-yellow-400"></div>
              <p className="text-sm text-yellow-400">Explore new games</p>
              <div className="w-12 h-[2px] bg-yellow-400"></div>
            </div>
            <p className="text-white font-semibold text-[16px] sm:text-lg md:text-xl lg:text-3xl">
              Ready to unlock your potentials in a world of fun?
            </p>
            <button className="text-white text-left bg-[#3B82F6] px-3 py-2 rounded-md w-[150px]">
              Complete a quest
            </button>
          </div>

          <div>
            <img src={GamePics} alt="Game pics" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
