import React from 'react'
import "../Header/header.css"
import search from "../../assets/magnifying-glass-solid.svg"

export const Header = () => {
    return (
        <div className='head-head'>
            <div className=" flex header-container">
                <div className=" flex items-center justify-center name-search">
                    <div className="text-xl flex name">
                        <h2 className='blue-name title'>Art</h2>
                        <h2 className='title'>Quest</h2>
                    </div>
                </div>
                <div className=" flex space-x-16 justify-center items-center header-menus">
                    <div className="quests">
                        <h1>Quests</h1>
                    </div>
                    <div className="quests">
                        <h1>Bounties</h1>
                    </div>
                    <div className="quests">
                        <h1>Hot 🔥</h1>
                    </div>
                </div>
                <div className="items-center justify-center flex connect-wallet">
                    <button className='connect-button'>Connect Wallet</button>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    )
}

// the quest creators will have a seperate kind of UI, on sign up every users will be asked if they are signing as a creator or as a hunter.
