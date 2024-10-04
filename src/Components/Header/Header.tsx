import React from 'react';
import "../Header/header.css";
import search from "../../assets/magnifying-glass-solid.svg";

export const Header = () => {
    return (
        <div className='head-head z-20'>
            <div className="flex justify-between items-center px-6 md:px-12 py-4">
                {/* ArtQuest Title (visible on all screens) */}
                <div className="cursor-pointer text-lg md:text-xl flex items-center space-x-1">
                    {/* Add color classes */}
                    <h2 className='text-blue-500 font-bold'>Art</h2>
                    <h2 className='text-gray-500 font-semibold'>Quest</h2>
                </div>

                {/* Menu (hidden on mobile, visible on md screens and up) */}
                <div className="hidden md:flex md:space-x-16">
                    <div className="cursor-pointer quests">
                        <h1 className="text-gray-800 hover:text-blue-500">Quests</h1>
                    </div>
                    <div className="cursor-pointer quests">
                        <h1 className="text-gray-800 hover:text-blue-500">Bounties</h1>
                    </div>
                    <div className="cursor-pointer quests">
                        <h1 className="text-gray-800 hover:text-red-500">Hot 🔥</h1>
                    </div>
                </div>

                {/* Connect Wallet button (hidden on mobile, visible on md screens and up) */}
                <div className="hidden md:block">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Connect Wallet</button>
                </div>
            </div>
        </div>
    );
}
