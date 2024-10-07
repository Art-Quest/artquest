import React from 'react';
import "../Header/header.css";
import search from "../../assets/magnifying-glass-solid.svg";
import Logo from "../../assets/logo-no-bg.png"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='head-head z-20'>
            <div className="flex justify-between items-center px-6 md:px-12 py-4">
                {/* ArtQuest Title (visible on all screens) */}
                <div className="rounded-xl cursor-pointer md:text-xl w-24 flex items-center space-x-1">
                    {/* Add color classes */}
                    
                  <Link to="/"><img  src={Logo} alt="" /></Link>
                </div>

                {/* Menu (hidden on mobile, visible on md screens and up) */}
                <div className="hidden md:flex md:space-x-16">
                    <div className="cursor-pointer quests">
                        <Link to='/explore'><h1 className="text-slate-400 hover:text-blue-500">Quests</h1></Link>
                    </div>
                    <div className="cursor-pointer quests">
<<<<<<< HEAD
                        <h1 className="text-gray-800 hover:text-blue-500">Profile</h1>
=======
                        <Link to='/profile'><h1 className="text-slate-400 hover:text-blue-500">Profile</h1></Link>
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
                    </div>
                    <div className="cursor-pointer quests">
                        <Link to='/game'><h1 className="text-red-500 hover:text-slate-500">Hot 🔥</h1></Link>
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
