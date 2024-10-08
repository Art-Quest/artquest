import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";

import abi from "../contract/abi.json";
export const contractAddress_ = "TWE5CpLwpiXpaERhJbKuzUPHZksfPEniVS";

import { useGetMyCampaigns, useGetAllCampaigns } from "../functions";
import { QuestT } from "../redux/types";

type bioT = {
  name: string;
  description: string;
};

export const AppContext = React.createContext<{
  getSmartContract: any;
  user: any;
}>({
  getSmartContract: undefined,
  user: undefined,
});

// const network = "https://api.shasta.trongrid.io";
const network = "https://api.nileex.io";

export const AppProvider = ({ children }: any) => {
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

  const { getMyCampaigns } = useGetMyCampaigns();
  const { getAllCampaigns, loading: isLoading_ } = useGetAllCampaigns();
  const walletAddress = useAppSelector((state) => state.tronData.walletAddress);
  const quests = useAppSelector((state) => state.quest);

  const getSmartContract = async () => {
    window.tronWeb.setFullNode(network);
    if (walletAddress) {
      if (window.tronWeb.ready) {
        return await window.tronWeb.contract(abi.entrys, contractAddress_);
      }
    }
  };

  React.useEffect(() => {
    const call = async () => {
      await getAllCampaigns();
    };
    call();

    const userExist = quests?.filter(
      (quest: QuestT) => quest.address === walletAddress
    );
    console.log(userExist, "UserExist");
    // console.log(campaigns, "camp");
    if (userExist === undefined) {
      return;
    }
    if (!walletAddress && location.pathname.includes("details/")) {
      return;
    } else if (!walletAddress) {
      navigate("/");
    } else if (userExist.length > 0) {
      getMyCampaigns();

      const previousPage = location.state?.from || "campaign";
      navigate(previousPage);
    } else if (userExist.length === 0) {
      navigate("/");
    }
  }, [walletAddress, isLoading_]);

  return (
    <AppContext.Provider
      value={{
        user,
        getSmartContract,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
