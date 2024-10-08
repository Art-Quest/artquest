import React from "react";
import toast from "react-hot-toast";
import { AppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const QuestModal = ({ isOpen, onClose, questDetails }) => {
  if (!isOpen) return null;
  const [loading, setLoading] = React.useState(false);
  const { getSmartContract } = React.useContext(AppContext);
  const navigate = useNavigate();

  const { title, description, totalParticipants, leaderboard } = questDetails;
  const handleJoinQuest = async () => {
    try {
      setLoading(true);
      const contract = await getSmartContract();
      const join = await contract.joinQuest(BigInt(2)).send({
        from: window.tronWeb.defaultAddress.base58,
        shouldPollResponse: false,
      });

      if (join) {
        toast.error("Quest Joined Successfully");
        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-gray-600 text-white rounded-lg shadow-lg max-w-3xl w-full p-6 space-y-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{title}</h2>
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

        {/* Quest Description */}
        <p className="text-gray-300 text-lg">{description}</p>

        {/* Total Participants */}
        <div className="mt-4">
          <span className="block text-gray-300 font-semibold">
            Total Participants:{" "}
          </span>
          <span className="text-xl font-bold">{totalParticipants}</span>
        </div>

        {/* Leaderboard */}
        <div className="mt-4">
          <span className="block text-gray-300 font-semibold mb-2">
            Leaderboard:
          </span>
          <ul className="space-y-2">
            {leaderboard.slice(0, 3).map((user, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
              >
                <span>{user.name}</span>
                <span className="text-indigo-400 font-bold">
                  Score: {user.score}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Quest Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleJoinQuest}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {loading ? "Joining..." : "Join Quest"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestModal;
