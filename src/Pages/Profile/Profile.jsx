import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../Components/Header/Header";
import gsap from "gsap";
import {
  CallOfDuty,
  GameIcon,
  GamePics,
  MicrosoftLogo,
  PlayGame,
  PlayLogo,
  ProfileHeroImage,
  Server,
  StarIcon,
  SteamLogo,
  XboxLogo,
} from "../../assets/svgs";
import { Footer } from "../../Components/Footer/Footer";
import { HiCheckCircle } from "react-icons/hi";
import { HiClipboardDocumentList, HiLink } from "react-icons/hi2";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { AppContext } from "../../Context";
import Modal from "./Modal";
import { useGetUserProfile } from "../../functions";
import CompleteQuestModal from "./CompleteQuestModal";
import toast from "react-hot-toast";
import abi from "../../contract/badge.json";
const contractAddress = "TNHckM2oxc2GFbbiirPzckmeArFM1qfjJg";
import SuccessModal from "./Badge";

const Profile = () => {
  const [profileType, setProfileType] = useState(true);
  const profile = useAppSelector((state) => state.profile);
  const address = useAppSelector((state) => state.tronData.walletAddress);
  const dispatch = useAppDispatch();
  const joinedQuests = useAppSelector((state) => state.myQuests);
  const [isBarged, setIsBarged] = useState(false);
  const [BadgeIsOpen, setBadgeIsOpen] = useState(false);

  const { getProfile } = useGetUserProfile();
  const { getSmartContract } = React.useContext(AppContext);

  const scrollContainerRef = useRef(null);

  const BadgeIsOnClose = () => {
    setBadgeIsOpen(false);
  };

  useEffect(() => {
    const scrollWidth = scrollContainerRef.current.scrollWidth;
    const containerWidth = scrollContainerRef.current.offsetWidth;

    gsap.to(scrollContainerRef.current, {
      x: -scrollWidth,
      duration: 20,
      ease: "none",
      repeat: -1, // Infinite scroll
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return parseFloat(x) % containerWidth; // Reset the position
        }),
      },
    });
    const call = async () => {
      await getProfile();
    };
    call();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [completeQuestModalisOpen, setCompleteQuestModalisOpen] =
    useState(false);
  const [claimed, setClaimed] = React.useState(false);
  const [claimLoading, setClaimLoading] = React.useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const completeQuestModalonClose = () => {
    setCompleteQuestModalisOpen(false);
  };

  const updateProfile = () => {
    setIsOpen(true);
  };

  const completeQuestModalonSubmit = async () => {
    try {
      const contract = await getSmartContract();
      const complete = await contract.joinQuest(BigInt(1)).send({
        from: window.tronWeb.defaultAddress.base58,
        shouldPollResponse: false,
      });

      if (complete) {
        toast.success(
          "Proof Submitted, reward will be distributed to winners after deadline"
        );
        navigate("/explore");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetIfBarged = async () => {
    try {
      const contract = await window?.tronWeb?.contract(
        abi.entrys,
        contractAddress
      );
      const data = await contract
        .hasBadge(window?.tronWeb.defaultAddress.base58)
        .call();
      setIsBarged(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClaim = async () => {
    try {
      if (profile?.xp < 300) {
        toast.error(
          "You need to have above 300XP to get Badge, consider playing the game to get more XPs"
        );
        rturn;
      } else {
        setClaimLoading(true);
        const contract = await window?.tronWeb?.contract(
          abi.entrys,
          contractAddress
        );
        const data = await contract.claimBadge(profile?.xp, "66386638").send({
          from: window?.tronWeb.defaultAddress.base58, // Sender's address
          shouldPollResponse: false, // Optional: wait for confirmatio
        });

        if (data) {
          setClaimed(true);
          setBadgeIsOpen(true);
          toast.success("Badge Claimed and Minted as NFT");
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setClaimLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetIfBarged();
  }, [claimed, profile]);

  return (
    <>
      <div className=" w-full bg-slate-900 ">
        <div className="mx-auto container">
          <Header />
          <section className="grid grid-cols-2 px-10 pt-12">
            <div className="flex items-center gap-3">
              <img
                src={PlayGame}
                alt="Profile Pic"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <div className="text-white flex flex-col gap-[2px]">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium sm:font-semibold">
                    Hello, {profile?.username}
                  </h1>
                  <HiCheckCircle />
                </div>
                <span className="text-sm text-gray-400">{address}</span>
              </div>
            </div>

            <div className=" px-4 py-2 space-x-4 ">
              <button
                className="px-3 py-3 text-white bg-gray-600 animate-bounce hover:bg-gray-500 rounded-lg"
                onClick={updateProfile}
              >
                Update/Create Profile
              </button>

              {isBarged ? (
                <button
                  className="px-3 py-3 text-white bg-gray-600  hover:bg-gray-500 rounded-lg"
                  onClick={updateProfile}
                >
                  you are an Honorable
                </button>
              ) : (
                <button
                  disabled={claimLoading}
                  className="px-3 py-3 text-white bg-green-600 animate-bounce hover:bg-gray-500 rounded-lg"
                  onClick={handleClaim}
                >
                  {claimLoading ? "Claiming..." : "Claim Honorable Badge"}
                </button>
              )}
            </div>

            <div className="rounded-full text-white  flex flex-col px-4 py-2  gap-1">
              <p>Referrals : 0</p>
              <p className="flex min-w-[200px] max-w-[250px] items-center flex-nowrap gap-2 px-3 py-1 cursor-pointer bg-[#3B82F6] text-white text-[12px] sm:text-sm font-medium rounded-full">
                <HiClipboardDocumentList /> COPY REFERAL LINK
              </p>
            </div>
          </section>

          <div className="flex items-center flex-wrap gap-3 px-10 py-6">
            <p className="text-gray-400  text-sm sm:text-base">
              Connect your social profiles to join the quests!
            </p>
            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @{profile?.username}
              </a>
              <FaXTwitter />
            </div>

            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @discord
              </a>
              <FaDiscord />
            </div>

            <div className="bg-slate-950 px-3 py-1 rounded-lg text-white flex items-center gap-3">
              <HiLink />
              <a className="text-base font-semibold" href="#">
                @telegram
              </a>
              <FaTelegram />
            </div>
          </div>

          <section className="bg-slate-950 p-10 rounded-lg shadow-md mb-6">
            <h2 className="text-lg md:text-2xl text-white font-semibold mb-4">
              Rewards & Earnings
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="p-6 flex items-center gap-5 rounded-2xl min-w-[20%] sm:min-w-[30%] bg-slate-900 text-white">
                <p className="text-[12px] sm:text-sm md:text-[18px] font-semibold">
                  Total Tokens <br /> Earned:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-[18px] sm:text-lg md:text-xl lg:text-2xl">
                    150 $ARTQ
                  </b>
                </div>
              </div>

              <div className="p-6 flex items-center gap-5 rounded-2xl min-w-[30%] bg-slate-900 text-white">
                <p className="text-[12px] sm:text-sm md:text-[18px] font-semibold">
                  Total NFTs <br /> Earned:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-[18px] sm:text-lg md:text-xl lg:text-2xl">
                    000 ARTQ
                  </b>
                </div>
              </div>

              <div className="p-6 flex items-center gap-5 rounded-2xl min-w-[30%] bg-slate-900 text-white">
                <p className="text-[12px] sm:text-sm md:text-[18px] font-semibold">
                  Today&apos;s <br /> Earning:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-[18px] sm:text-lg md:text-xl lg:text-2xl">
                    0.00 $ARTQ
                  </b>
                </div>
              </div>

              <div className="p-6 flex items-center gap-5 rounded-2xl min-w-[30%] bg-slate-900 text-white">
                <p className="text-[12px] sm:text-sm md:text-[18px] font-semibold">
                  Today&apos;s <br /> Earning:
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={PlayGame}
                    alt="Profile Pic"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <b className="text-[18px] sm:text-lg md:text-xl lg:text-2xl">
                    {profile.xp} $ARTQ
                  </b>
                </div>
              </div>
            </div>
          </section>

          {/* Completed Quests */}
          <section className="bg-slate-950 p-10 rounded-lg shadow-md mb-6 text-white">
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              Joined Quests
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {joinedQuests?.map((quest, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-4 bg-gray-700 rounded-lg shadow-md "
                >
                  <img src={CallOfDuty} alt="Quest Icon" />
                  <h3 className="text-black text-base md:text-lg font-semibold mt-2">
                    {quest.title}
                  </h3>
                  <p className="text-green-700 text-sm">
                    ${quest.price.toLocaleString()}{" "}
                  </p>

                  <div className="flex text-gray-700 justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                      <img className="h-4 w-4" src={StarIcon} alt="star icon" />
                      <span className="text-[12px]">4.5</span>
                    </div>
                    <button
                      onClick={() => setCompleteQuestModalisOpen(true)}
                      className="bg-[#3B82F6] px-3 text-white font-medium"
                    >
                      Verify Completion
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}

          <section className="bg-slate-950 p-10 rounded-lg shadow-md mb-6">
            <h2 className="text-lg md:text-2xl text-white font-semibold mb-4">
              Achievements
            </h2>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3  gap-5 sm:gap-7 md:gap-10 lg:gap-12">
                <div className="flex items-center gap-3">
                  <img src={Server} alt="NFT" className="h-10 w-10" />

                  <div className="h-[40px] w-[1px] bg-gray-300"></div>

                  <div className="flex flex-col items-start justify-start text-white">
                    <p className="font-semibold text-base sm:text-lg md:text-xl">
                      1+
                    </p>
                    <span className="text-gray-400 text-[12px]">
                      Games played
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img src={Server} alt="NFT" className="h-10 w-10" />

                  <div className="h-[40px] w-[1px] bg-gray-300"></div>

                  <div className="flex flex-col items-start justify-start text-white">
                    <p className="font-semibold text-base sm:text-lg md:text-xl">
                      0+
                    </p>
                    <span className="text-gray-400 text-[12px]">
                      Quests Completed
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img src={Server} alt="NFT" className="h-10 w-10" />

                  <div className="h-[40px] w-[1px] bg-gray-300"></div>

                  <div className="flex flex-col items-start justify-start text-white">
                    <p className="font-semibold text-base sm:text-lg md:text-xl">
                      1+{isBarged && " Honorable Badge"}
                    </p>
                    <span className="text-gray-400 text-[12px]">
                      Badge Earned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scrolling Logos */}

          <section className="bg-slate-950 p-5 sm:p-10 rounded-lg shadow-md mb-6 text-white overflow-hidden">
            <div
              className="flex items-center whitespace-nowrap"
              ref={scrollContainerRef}
            >
              <img
                src={XboxLogo}
                alt="Xbox logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={MicrosoftLogo}
                alt="Microsoft logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={PlayLogo}
                alt="Play Logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={SteamLogo}
                alt="Steam Logo"
                className="mx-5 h-20 sm:h-24"
              />
              {/* Duplicate the images for infinite scrolling effect */}
              <img
                src={XboxLogo}
                alt="Xbox logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={MicrosoftLogo}
                alt="Microsoft logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={PlayLogo}
                alt="Play Logo"
                className="mx-5 h-20 sm:h-24"
              />
              <img
                src={SteamLogo}
                alt="Steam Logo"
                className="mx-5 h-20 sm:h-24"
              />
            </div>
          </section>

          <Footer />
        </div>
        {<Modal isOpen={isOpen} onClose={onClose} />}
        <SuccessModal isOpen={BadgeIsOpen} onClose={BadgeIsOnClose} />
        {
          <CompleteQuestModal
            isOpen={completeQuestModalisOpen}
            onClose={completeQuestModalonClose}
            onSubmit={completeQuestModalonSubmit}
          />
        }
      </div>
      {/* 
      <div>loren10

      </div> */}
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
