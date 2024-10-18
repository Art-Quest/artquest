import React, { useEffect, useState } from "react";
import { Button, InputField, Select } from "../../Components/Reusable";
import { Header } from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../../Context";
import Modal from "./Modal"
import { useGetUserProfile } from "../../functions";
import { useAppSelector } from "../../redux/hook";

const CreateQuestPage = () => {
  const [questName, setQuestName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [prizePool, setPrizePool] = useState(0);
  const [paymentMode, setPaymentMode] = useState("equal");
  const [firstPrize, setFirstPrize] = useState("");
  const [secondPrize, setSecondPrize] = useState("");
  const [thirdPrize, setThirdPrize] = useState("");
  const [linkToQuest, setLinkToQuest] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {getProfile,  loading:profileLoad } =  useGetUserProfile()
  const profile = useAppSelector((state) => state.profile)
  const { getSmartContract} = React.useContext(AppContext);

  const [isOpen, setIsOpen] = useState(true)

  const paymentOptions = [
    { value: "equal", label: "Equal Pay" },
    { value: "points", label: "Pay Based on Points" },
  ];

  const handleCreateQuest = async () => {
    if (profile.xp < 100) {
      toast.error("You need enough Xp to create a quest, trying playing the game :)")
      return
    }
    const endTimeBigInt = deadline
      ? BigInt(new Date(deadline).getTime() / 1000)
      : null;

    try {
      setLoading(true);
      const contract = await getSmartContract();

      const quest = await contract
        .addQuest(
          questName,
          description,
          endTimeBigInt,
          linkToQuest,
          BigInt(prizePool),
          paymentMode,
          false,
          BigInt(prizePool),
          BigInt(1),
          [],
          []
        )
        .send({
          callValue: window?.tronWeb.toSun(prizePool),
          from: window.tronWeb.defaultAddress.base58,
          shouldPollResponse: false,
        });
      if (quest) {
        toast.error("Quest Created Successfully");
        navigate("/explore");
      }
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }

    // Handle create quest logic
  };


    useEffect(() => {
          const call = async() => {
            await getProfile()
          }
          call();
    }, [])

    const handleOnClose = () => {
      setIsOpen(false)
    }
  return (
    <div className=" bg-gradient-to-b from-slate-900 via-slate-800 to-gray-900 w-full min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Create a Quest
        </h1>
        <InputField
          label="Quest Name/Title"
          placeholder="Enter the name of the quest"
          value={questName}
          onChange={(e) => setQuestName(e.target.value)}
        />
        <InputField
          label="Description"
          placeholder="Describe the quest"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-24"
        />
        <InputField
          label="Deadline"
          placeholder="Enter the quest deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <InputField
          label="Link To Quest"
          placeholder="Enter the url to the Quest"
          value={linkToQuest}
          onChange={(e) => setLinkToQuest(e.target.value)}
        />
        <InputField
          label="Prize Pool"
          placeholder="Enter the total prize pool"
          type="number"
          value={prizePool}
          onChange={(e) => setPrizePool(+e.target.value)}
        />
        <Select
          label="Mode of Payment to Winners"
          options={paymentOptions}
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
        />

        {paymentMode === "points" && (
          <div className="space-y-4">
            <InputField
              label="First Place Prize"
              placeholder="Enter the prize for 1st place"
              type="number"
              value={firstPrize}
              onChange={(e) => setFirstPrize(e.target.value)}
            />
            <InputField
              label="Second Place Prize"
              placeholder="Enter the prize for 2nd place"
              type="number"
              value={secondPrize}
              onChange={(e) => setSecondPrize(e.target.value)}
            />
            <InputField
              label="Third Place Prize"
              placeholder="Enter the prize for 3rd place"
              type="number"
              value={thirdPrize}
              onChange={(e) => setThirdPrize(e.target.value)}
            />
          </div>
        )}

        <div className="flex justify-center mt-8">
          {loading ? (
            <p className="text-white">loading...</p>
          ) : (
            <Button onClick={handleCreateQuest}>Create Quest</Button>
          )}
        </div>
      </div>
      {!profileLoad  &&  (

        <Modal isOpen={isOpen} onClose={handleOnClose}/>
      )
      }
    </div>
  );
};

export default CreateQuestPage;
