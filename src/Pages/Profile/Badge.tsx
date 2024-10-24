import React from "react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-gradient-to-b from-slate-900 rounded-lg shadow-lg p-8 max-w-lg mx-auto text-center">
        {/* Success Icon */}
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4 -4m0 -6l-9 9l4 4l9 -9"
            />
          </svg>
        </div>
        {/* Modal Title */}
        <h2 className="text-3xl font-bold text-gray-100 mt-4">
          🎉 Congratulations!
        </h2>
        {/* Modal Message */}
        <p className="text-gray-300 mt-4">
          You&apos;ve successfully claimed the{" "}
          <span className="font-semibold text-indigo-300">Honorable Badge</span>
          !
        </p>
        <p className="text-gray-300 mt-2">
          An NFT has been minted for you, and your address is whitelisted for a
          potential airdrop.
        </p>

        {/* View Transaction Button */}
        <a
          href="https://nile.tronscan.org/?_gl=1*1y6zjrf*_ga*MTcwODM3NzY3NC4xNzI5Mjg0MjI0*_ga_TBLE5BZDE8*MTcyOTc3NDg0Ni4xMS4wLjE3Mjk3NzQ4NTQuNTIuMC4w#/contract/TNHckM2oxc2GFbbiirPzckmeArFM1qfjJg/transactions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 mt-6 rounded-lg hover:bg-gray-400 transition duration-300 mr-4"
        >
          View Transaction
        </a>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="inline-block bg-red-500 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-red-400 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
