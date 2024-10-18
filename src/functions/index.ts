import React, { useState, useContext } from "react";
import { AppContext } from "../Context";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addQuest } from "../redux/slice/QuestSlice";
import { QuestT } from "../redux/types";
import { addProfile } from "../redux/slice/ProfileSlice";

export const useGetAllQuests = () => {
  const [loading, setLoading] = useState(false);
  const { getSmartContract } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const getAllQuest = async () => {
    try {
      setLoading(true);
      const contract = await getSmartContract();
      const totalCamp = await contract?.questId().call();
      for (let i = 0; i <= totalCamp.toNumber(); i++) {
        const data = await contract?.quests(BigInt(i)).call();
        console.log(data);
        var param = {
          id: i,
          address: window.tronWeb.address.fromHex(data.admin),
          title: data.title,
          description: data.description,
          deadline: data.deadline.toNumber(),
          price: data.price.toNumber()

        };
        dispatch(addQuest(param));
      }
      setLoading(false);
    } catch (err) {
      //   toast.error("something went wrong");
      setLoading(false);
      console.log(err);
    }
  };
  return { getAllQuest, loading };
};

export const useGetUserProfile = () => {
  const [loading, setLoading] = useState(false);
  const { getSmartContract } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const getProfile = async () => {
    try {
      setLoading(true);
      const contract = await getSmartContract();
      const user = await contract
        ?.users(window.tronWeb.defaultAddress.base58)
        .call();
      console.log(user);
      if (user) {
        var param = {
          name: user.name,
          username: user.username,
          email: user.email,
          bio: user.bio,
          social: [""],
          referral: [""],
          xp: user.xp.toNumber(),
        };
        dispatch(addProfile(param));
        setLoading(false);
      }
    } catch (err) {
      //   toast.error("something went wrong");
      setLoading(false);
      console.log(err);
    }
  };
  return { getProfile, loading };
};

export const useGetAllCampaigns = () => {
  //   const [loading, setLoading] = useState(false);
  //   const { getSmartContract } = useContext(AppContext);
  //   const dispatch = useAppDispatch();
  //   const getAllCampaigns = async () => {
  //     try {
  //       setLoading(true);
  //       const contract = await getSmartContract();
  //       const totalCamp = await contract?.campaignCounter().call();
  //       for (let i = 1; i <= totalCamp.toNumber(); i++) {
  //         const data = await contract?.campaigns(BigInt(i)).call();
  //         console.log(data);
  //         var param = {
  //           address: window.tronWeb.address.fromHex(data.admin),
  //           title: data.title,
  //           amountDonated: data.amount_donated.toNumber(),
  //           amountRequired: data.amount_required.toNumber(),
  //           description: data.description,
  //           donationComplete: data.donation_complete,
  //           id: data.id.toNumber(),
  //           endTime: data.endTime.toNumber(),
  //           donationType: data.donationType,
  //         };
  //         dispatch(addQuest(param));
  //       }
  //       setLoading(false);
  //     } catch (err) {
  //       //   toast.error("something went wrong");
  //       setLoading(false);
  //       console.log(err);
  //     }
  //   };
  //   return { getAllCampaigns, loading };
  // };
  // export const useGetMyCampaigns = () => {
  //   const [loading, setLoading] = useState(false);
  //   const { getSmartContract } = useContext(AppContext);
  //   const dispatch = useAppDispatch();
  //   const campaigns = useAppSelector((state) => state.quest);
  //   const wallet = useAppSelector((state) => state.tronData);
  //   const getMyCampaigns = async () => {
  //     try {
  //       setLoading(true);
  //       const filter = campaigns?.filter(
  //         (camp: QuestT) => camp.address === wallet.walletAddress
  //       );
  //       console.log("my campaign", filter);
  //       setLoading(false);
  //     } catch (err) {
  //       toast.error("something went wrong");
  //       setLoading(false);
  //       console.log(err);
  //     }
  //   };
  //   return { getMyCampaigns, loading };
};

export const useApproveSpending = () => {
  // const [loading, setLoading] = useState(false);
  // const approveSpending = async (tokenAddress, contractAddress, amount) => {
  //   try {
  //     setLoading(true);
  //     const getTokenContract = async (tokenAddress) => {
  //       const tokenContract = await window.tronWeb.contract().at(tokenAddress);
  //       return tokenContract;
  //     };
  //     // Get the TRC20 token contract
  //     const tokenContract = await getTokenContract(tokenAddress);
  //     // Approve the donation contract to spend tokens on behalf of the user
  //     const result = await tokenContract
  //       .approve(contractAddress, window.tronWeb.toSun(amount))
  //       .send({
  //         from: window.tronWeb.defaultAddress.base58,
  //       });
  //     setLoading(false);
  //     console.log("Approval successful:", result);
  //     return result;
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Error approving tokens:", error);
  //     throw error;
  //   }
  // };
  // return { approveSpending, loading };
};
