import React, { useState } from "react";

const SubmitProofModal = ({ isOpen, onClose, onSubmit }) => {
  const [proofLink, setProofLink] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Call the onSubmit prop to handle the proof submission logic
      await onSubmit(proofLink);
      setProofLink(""); // Clear input after submission
    } catch (error) {
      console.error("Error submitting proof:", error);
    } finally {
      setLoading(false);
      onClose(); // Close modal after submission
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Submit Proof of Completion</h2>
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

        {/* Proof Input Field */}
        <div>
          <label htmlFor="proofLink" className="block text-sm font-medium">
            Link to Proof (Image/Document):
          </label>
          <input
            id="proofLink"
            type="text"
            value={proofLink}
            onChange={(e) => setProofLink(e.target.value)}
            className="w-full p-2 mt-1 text-black rounded-lg focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter the URL of your proof"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {loading ? "Submitting..." : "Submit Proof"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitProofModal;
