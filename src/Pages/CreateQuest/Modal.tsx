import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const SetupProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
 const userProfile = useAppSelector((state) => state.profile)
  const navigate = useNavigate();

  const handleProfileSetup = () => {
    navigate("/profile");
    onClose();
  };

  const handlePlayGames = () => {
    navigate("/game");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-xl w-full p-6 space-y-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Create a Quest</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        {!userProfile.name ? (
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              You haven’t set up your profile yet. You need to create a profile before you can start creating quests.
            </p>
            <button
              onClick={handleProfileSetup}
              className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Set Up Profile
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              You currently have <span className="font-bold">{userProfile?.xp} XP</span>. Creating a quest costs <span className="font-bold">100 XP</span> per quest.
            </p>
            {userProfile?.xp < 100 ? (
              <>
                <p className="text-gray-400 mt-2">
                  You need more XP to create a quest. Play the noodle game or interact with the app to earn more XP!
                </p>
                <button
                  onClick={handlePlayGames}
                  className="mt-4 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Play Games to Earn XP
                </button>
              </>
            ) : (
              <p className="text-green-500 mt-2">You have enough XP to create a quest!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupProfileModal;
