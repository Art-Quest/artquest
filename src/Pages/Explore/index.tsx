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
  // const quests = useAppSelector((state) => state.quest);

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

  const closeModal = () => setIsModalOpen(false);
  const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }

  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-sm px-[2%]">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <Header />

        <div className="h-[70%] z-20 flex justify-center items-center mt-2 rounded-lg pb-4">
          <Home/>
        </div>


        {/* the popup modal on the explore page */}
        <div>
        {
            popup?
            <div className="main bg-gray-700 text-white">
              <div className="popup bg-gray-700 text-white">
                <div className="popup-header">
                  <h1 className="quest-details">QUEST DETAILS</h1>
                  <h1 onClick={closePopup} className="cancel">X</h1>
                </div>
                <div className="popup-content">

                  <div className="section-container">

                    <div className="section left-section">
                      <img className=" leftImg" src={leftImg} alt="" />
                      <h1 className="quest-title">Defend the Kingdom – Strategy Game Challenge</h1>
                      <div className="hosts">
                        <small>🟡 Host: SUKUNA Inc</small>
                      </div>
                    </div>

                    <div className="section right-section">
                      <h2>🟢 More Info</h2>
                      <div>
                        <div className="flex prize-pool">
                          <h1 className="intro-sight">Prize Pool: </h1>
                          <p>&nbsp; 5,600 USDC</p>
                        </div>
                        <div className="description">
                          <div className="description-title">
                            <p>Do you have what it takes to be the ultimate strategist? In this bounty challenge, you will play &quot;Defend the Kingdom, &quot;a real-time strategy game where players must build, fortify, and defend their kingdom against waves of enemies. Your task is to not only survive but also lead your kingdom to victory by conquering neighboring territories.Players will be ranked based on their defense strength, resource management, and battle tactics. The player with the highest score at the end of the challenge will claim the 5600 USDC bounty prize.</p>
                          </div>
                        </div>
                        <div className="rules"> 
                          <h1 className="intro-sight">Rules: </h1>
                          <p>You must play using the official game server provided.
                          </p>
                          <p>The challenge lasts for 48 hours from the start of your game.
                          </p>
                          <p>No cheating or game exploits allowed.
                          </p>
                        </div>
                      </div>
                      <div className="join-quest-button">
                        <button className="join-quest">Interested</button>
                      </div>
                    </div>

                  </div>
                </div>
                
              </div>
            </div>:""
        }
        </div>
        {/* the popup modal on the explore page */}



      <div className="flex md:flex-row overflow-y-scroll scrollbar-hide" onClick={handleClickOpen}>
    
        <BentoGrid className="md:max-w-[70%] mx-auto z-20 mt-3">
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
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card1}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card2}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card3}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full communication"
        src={card1}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card2}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card3}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (  <div className="relative w-full h-48">
      <img
        className="object-contain w-full h-full"
        src={card1}
        alt="card"
      />
    </div>),
    icon: <FaPlaystation className="h-4 w-4 text-neutral-500" />,
  },
];
