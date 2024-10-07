import React, { useState } from "react";
import{ Button, InputField, Select }  from "../../Components/Reusable";
import { Header } from "../../Components/Header/Header";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993


const CreateQuestPage = () => {
  const [questName, setQuestName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [prizePool, setPrizePool] = useState("");
  const [paymentMode, setPaymentMode] = useState("equal");
  const [firstPrize, setFirstPrize] = useState("");
  const [secondPrize, setSecondPrize] = useState("");
  const [thirdPrize, setThirdPrize] = useState("");
  const navigate = useNavigate()


  const paymentOptions = [
    { value: "equal", label: "Equal Pay" },
    { value: "points", label: "Pay Based on Points" },
  ];

  const handleCreateQuest = () => {
    navigate("/explore")
    // Handle create quest logic
  };

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
            label="Prize Pool"
            placeholder="Enter the total prize pool"
            type="number"
            value={prizePool}
            onChange={(e) => setPrizePool(e.target.value)}
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

<<<<<<< HEAD
        <div className="flex justify-center mt-8">
          <Button onClick={handleCreateQuest}>Create Quest</Button>
=======
        <div  className="flex justify-center mt-8">
          <Button  onClick={handleCreateQuest}>Create Quest</Button>
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
        </div>
      </div>
    </div>
  );
};


export default CreateQuestPage