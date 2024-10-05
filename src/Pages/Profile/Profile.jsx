import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../Components/Header/Header";
import gsap from "gsap";
import {
  CallOfDuty,
  GameIcon,
  GamePics,
  PlayGame,
  ProfileHeroImage,
  StarIcon,
} from "../../assets/svgs";
import { Footer } from "../../Components/Footer/Footer";
import { HiCheckCircle } from "react-icons/hi";
import { HiClipboardDocumentList, HiLink } from "react-icons/hi2";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  const [profileType, setProfileType] = useState(true);
  // const titleRef = useRef(null);
  // const paragraphRef = useRef(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({ delay: 1.5 });

  //   timeline.fromTo(
  //     titleRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  //   );
  //   timeline.fromTo(
  //     paragraphRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //     "-=0.5"
  //   );
  // }, []);

  return (
    <>
      <div className="w-full bg-slate-900 ">
        <Header />
        <div>
          <section className="flex items-center justify-between px-10 pt-12">
            <div className="flex items-center gap-3">
              <img
                src={PlayGame}
                alt="Profile Pic"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-white flex flex-col gap-[2px]">
                <div className="flex items-center gap-2">
                  <h1 className=" text-2xl font-semibold">Hello, Username</h1>
                  <HiCheckCircle />
                </div>
                <span className="text-sm text-gray-400">0x3Bffr...a992</span>
              </div>
            </div>

            <div className="border border-white px-4 py-2">
              <p className="text-white font-semibold text-base">
                {profileType ? "YOU ARE A HOST" : "YOU ARE A GAMER"}
              </p>
            </div>

            <div className="rounded-full text-white bg-gray-600 px-4 py-2 flex items-center justify-center gap-4 ">
              <p>Referrals : 0</p>
              <p className="flex items-center gap-2 px-3 py-1 cursor-pointer bg-[#3B82F6] text-white] text-sm font-medium rounded-full">
                <HiClipboardDocumentList /> COPY REFERAL LINK
              </p>
            </div>
          </section>

          <div className="flex items-center gap-3 px-10 py-6">
            <p className="text-gray-400  text-sm sm:text-base">
              Connect your social profiles to join the quests!
            </p>
            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @user_name
              </a>
              <FaXTwitter />
            </div>

            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @user_name
              </a>
              <FaDiscord />
            </div>

            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @user_name
              </a>
              <FaTelegram />
            </div>
          </div>
        </div>

        <div className="">
          <section className="bg-slate-950 p-10 rounded-lg shadow-md mb-6">
            <h2 className="text-lg md:text-2xl text-white font-semibold mb-4">
              Rewards & Earnings
            </h2>

            <div className="flex items-center justify-between">
              <div className="p-6 flex items-center gap-5 rounded-2xl bg-slate-900 text-white">
                <p className="text-base font-semibold">
                  Total Tokens <br /> Earned:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-3xl">23.1K $ARTQ</b>
                </div>
              </div>

              <div className="p-6 flex items-center gap-5 rounded-2xl bg-slate-900 text-white">
                <p className="text-base font-semibold">
                  Total NFTs <br /> Earned:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-3xl">300 ARTQ</b>
                </div>
              </div>

              <div className="p-6 flex items-center gap-5 rounded-2xl bg-slate-900 text-white">
                <p className="text-base font-semibold">
                  Today&apos;s <br /> Earning:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-3xl">0.00 $ARTQ</b>
                </div>
              </div>
            </div>
          </section>

          {/* Completed Quests */}
          <section className="bg-slate-950 p-10 rounded-lg shadow-md text-white">
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              Completed Quests
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {completedQuests.map((quest, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-md"
                >
                  <img src={CallOfDuty} alt="Quest Icon" />
                  <h3 className="text-black text-lg font-semibold mt-2">
                    {quest.questName}
                  </h3>
                  <p className="text-gray-700 text-sm">{quest.level} </p>

                  <div className="flex text-gray-700 justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                      <img className="h-4 w-4" src={StarIcon} alt="star icon" />
                      <span className="text-[12px]">4.5</span>
                    </div>
                    <span className="text-[12px]">250 $ARTQ</span>
                    <span className="bg-[#3B82F6] px-3 text-white font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="flex space-x-4">
              {/* Badge/NFT earned */}
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="nft-image-url"
                  alt="NFT"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Repeat for other achievements */}
            </div>
          </section>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

const completedQuests = [
  { questName: "Call of Duty: Vangaurd", level: "Level 1 - 5" },
  { questName: "Call of Duty: Vangaurd", level: "Level 1 - 5" },
  { questName: "Call of Duty: Vangaurd", level: "Level 1 - 5" },
  { questName: "Call of Duty: Vangaurd", level: "Level 1 - 5" },
];

export default Profile;

// <div
//   className="h-screen bg-cover bg-center flex flex-col items-center py-20 justify-center"
//   style={{
//     backgroundImage: `url(${ProfileHeroImage})`,
//   }}
// >
//   <h1
//     ref={titleRef}
//     className="w-[60%] text-lg text-transparent bg-clip-text bg-gradient-to-b from-white font-semibold to-gray-500 mb-12 mx-auto sm:text-xl  md:text-4xl text-center"
//   >
//     ArtQuest is revolutionizing the gaming industry by seamlessly
//     blending gaming, the creator economy, and NFTs.
//   </h1>
//   <p
//     ref={paragraphRef}
//     className="text-center text-base w-[50%] font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
//   >
//     Our platform empowers players and creators, fostering engagement and
//     rewards.
//   </p>
// </div>

// <div className="p-10">
//   <p className="text-white font-medium text-lg mx-auto py-12 text-center w-[80%]">
//     Game creators benefit from Artquest by gaining a new channel to
//     engage with their audience. By posting quests and challenges, they
//     can extend their game&apos;s reach beyond traditional boundaries,
//     creating immersive experiences that blend the digital and physical
//     worlds.
//     <br />
//     Join Artquest today and be part of the future of gaming – where your
//     achievements have real value, and every quest is an adventure
//     waiting to happen!
//   </p>
// </div>

// <div className="flex flex-col md:flex-row items-center gap-10 p-10 ">
//   <div className="">
//     <img src={PlayGame} alt="play game video" />
//   </div>
//   <div className="flex flex-col gap-10">
//     <h1 className="text-white text-lg md:text-3xl font-bold">
//       Key Features
//     </h1>
//     <div className="text-white flex flex-col gap-10">
//       <div className="flex items-center gap-3">
//         <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
//         <p className="text-lg md:text-2xl">
//           Cross-game quests and challenges
//         </p>
//       </div>

//       <div className="flex items-center gap-3">
//         <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
//         <p className="text-lg md:text-2xl">
//           Real-world gameplay elements
//         </p>
//       </div>

//       <div className="flex items-center gap-3">
//         <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
//         <p className="text-lg md:text-2xl">
//           Creator tools for game developers
//         </p>
//       </div>

//       <div className="flex items-center gap-3">
//         <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
//         <p className="text-lg md:text-2xl">NFT and token rewards</p>
//       </div>

//       <div className="flex items-center gap-3">
//         <img className="h-8 w-8" src={GameIcon} alt="Game icon" />
//         <p className="text-lg md:text-2xl">Blockchain integration</p>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-between p-10">
//   <div className="flex flex-col gap-5">
//     <div className="flex items-center gap-2">
//       <div className="w-12 h-[2px] bg-yellow-400"></div>
//       <p className="text-sm text-yellow-400">Explore new games</p>
//       <div className="w-12 h-[2px] bg-yellow-400"></div>
//     </div>
//     <p className="text-white font-semibold text-[16px] sm:text-lg md:text-xl lg:text-3xl">
//       Ready to unlock your potentials in a world of fun?
//     </p>
//     <button className="text-white text-left bg-[#3B82F6] px-3 py-2 rounded-md w-[150px]">
//       Complete a quest
//     </button>
//   </div>

//   <div>
//     <img src={GamePics} alt="Game pics" />
//   </div>
// </div>
