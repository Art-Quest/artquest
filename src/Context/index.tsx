import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";

import abi from "../contract/abi.json";
export const contractAddress_ = "TRtGS1RGtH6JPP6cqVBDyEVw7uwseGNjei";
import { QuestT } from "../redux/types";

type bioT = {
  name: string;
  description: string;
};

export const AppContext = React.createContext<{
  getSmartContract: any;
  user: any;
  score: number;
  setScore: any;
}>({
  getSmartContract: undefined,
  user: undefined,
  score: 0,
  setScore: undefined,
});

const network = "https://api.nileex.io";

export const AppProvider = ({ children }: any) => {
  const [score, setScore] = React.useState(0);

  const [user, setUser] = React.useState({
    pda: "",
    name: "",
    amountDonated: 0,
    amountRequired: 0,
    description: "",
    donationComplete: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const walletAddress = useAppSelector((state) => state.tronData.walletAddress);
  const quests = useAppSelector((state) => state.quest);

  const getSmartContract = async () => {
    window.tronWeb.setFullNode(network);
    if (walletAddress) {
      if (window.tronWeb.ready) {
        return await window?.tronWeb?.contract(abi.entrys, contractAddress_);
      }
    }
  };

  React.useEffect(() => {
    const call = async () => {
      if (walletAddress) {
        // await getAllCampaigns();

        const userExist = quests?.some(
          (campaign: QuestT) => campaign.address === walletAddress
        );
        if (userExist) {
          console.log("user exists");
          // const previousPage = location.state?.from || "campaign";
          // navigate(previousPage);
          navigate("explore");
          return;
        } else if (!userExist) {
          if (location.pathname.includes("connect-wallet")) {
            return;
          } else {
            navigate("/");
            return;
          }
        }
      } else if (!walletAddress && location.pathname.includes("details/")) {
        return;
      } else {
        navigate("/");
      }
    };
    call();
  }, [walletAddress]);

  return (
    <AppContext.Provider
      value={{
        user,
        getSmartContract,
        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
