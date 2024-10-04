import React, { useEffect, useRef } from "react";

// Mock data for the leaderboard
const leaderboardData = [
  { wallet: "0x123...abc", score: 1200 },
  { wallet: "0x456...def", score: 1100 },
  { wallet: "0x789...ghi", score: 1000 },
  { wallet: "0xabc...jkl", score: 950 },
  { wallet: "0x123...abc", score: 1200 },
  { wallet: "0x456...def", score: 1100 },
  { wallet: "0x789...ghi", score: 1000 },
  { wallet: "0xabc...jkl", score: 950 },
  { wallet: "0xabc...jkl", score: 950 },
  { wallet: "0x123...abc", score: 1200 },
  { wallet: "0x456...def", score: 1100 },
  { wallet: "0x789...ghi", score: 1000 },
  { wallet: "0xabc...jkl", score: 950 },
  
  

  // Add more entries if needed
];

 const Leaderboard = () => {
  const leaderboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (leaderboardRef.current) {
        leaderboardRef.current.style.animation = `scroll 10s linear infinite`;
      }
    };
    scroll();
  }, []);

  return (
    <div className="text-white  w-[30%] p-4 absolute">
      <h2 className="text-center text-lg font-bold mb-4 z-200   " >Leaderboard</h2>
     {/* Scrolling container for leaderboard entries */}
     <div className="relative h-96 overflow-hidden">
      <div
        ref={leaderboardRef}
        className="space-y-4 overflow-hidden h-96"
        style={{ animation: "scroll 20s linear infinite" }}
      >
        {leaderboardData.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between bg-slate-700 rounded-lg p-3"
          >
            <span>{entry.wallet}</span>
            <span>{entry.score}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Leaderboard