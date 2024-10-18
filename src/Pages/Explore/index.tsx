import { cn } from "../../Components/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../../Components/lib/bento-grid";
import { FaPlaystation } from "react-icons/fa";
import { Boxes } from "../../Components/lib/background-boxes";
import { Header } from "../../Components/Header/Header";
import Leaderboard from "../../Components/LeaderBoard";
import "./Index.css";
import leftImg from "../../assets/artQuestGameCover.webp"
import Home from "../../modules/home/containers/Home";
import { useGetAllQuests } from "../../functions";
import { useAppSelector } from "../../redux/hook";
import QuestModal from "./Modal";
import { AppContext } from "../../Context";
import card1 from "../../assets/game-cover1.webp"
import card2 from "../../assets/game-cover2.webp"
import card3 from "../../assets/game-cover3.webp"
import { Footer } from "../../Components/Footer/Footer";

function BentoGridDemo() {
  const { getAllQuest } = useGetAllQuests();
  const quests = useAppSelector((state) => state.quest);

  React.useEffect(() => {
    const call = async () => {
      await getAllQuest();
    };
    call();
  }, []);
  const { isModalOpen, setIsModalOpen } = React.useContext(AppContext);

  const questDetails = {
    title: "Epic Dragon Hunt",
    description:
      "Join this quest to slay the mighty dragon and earn rewards. Prove your skills and climb the leaderboard!",
    totalParticipants: 120,
    leaderboard: [
      { name: "Player1", score: 950 },
      { name: "Player2", score: 880 },
      { name: "Player3", score: 860 },
      { name: "Player4", score: 840 },
    ],
  };
  const getRandomImage = () => {
    return headers[Math.floor(Math.random() * headers.length)];
  };

  const closeModal = () => setIsModalOpen(false);
  const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }

    const quests_ = quests.map((q) => ({
        ...q,
        icon: getRandomImage()
    })
  )

  const handleClick = (id:number) => {
    console.log(id)
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-sm px-[2%]">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <Header />

        <div className="h-[70%] z-20 flex justify-center items-center mt-2 rounded-lg pb-4">
          <Home/>
        </div>




      <div className="flex md:flex-row overflow-y-scroll scrollbar-hide mt-8">
    
        <BentoGrid className="md:max-w-[70%] mx-auto z-20 mt-3">
          {quests_?.map((item, i) => (
            <BentoGridItem
              key={i}
              onClick={() => handleClick(item.id)}
              title={item.title}
              description={item.description}
              header={(  <div className="relative w-full h-48">
                <img
                  className="object-contain w-full h-full"
                  src={item.icon}
                  alt="card"
                />
              </div>)}
              price={item.price}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
          <div className="hidden md:block">
            <Leaderboard />
          </div>
      </div>
        {isModalOpen && (
          <QuestModal
            isOpen={isModalOpen}
            onClose={closeModal}
            questDetails={questDetails}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BentoGridDemo;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const headers = [card1, card2, card3]

// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card1}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card2}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card3}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full communication"
//         src={card1}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card2}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card3}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: (  <div className="relative w-full h-48">
//       <img
//         className="object-contain w-full h-full"
//         src={card1}
//         alt="card"
//       />
//     </div>),
//     icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
//   },
// ];
