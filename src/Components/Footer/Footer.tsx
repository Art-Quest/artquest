import React from 'react'
import twitter from "../../assets/twitter-brands-solid.svg"
import discord from "../../assets/discord-brands-solid.svg"
import github from "../../assets/github-brands-solid.svg"

export const Footer = () => {
  return (
    <footer>
        <div className='bg-black flex items-center justify-evenly'>
            <div className="hidden sm:block text-white">
                <p>&copy; 2024 ArtQuest. All rights reserved. </p>
            </div>
            <div className="text-white">
                Built and developed on Tron
            </div>
            {/* <div className="footerss-social">
                <img src={twitter} alt="" />
                <img src={discord} alt="" />
                <img src={github} alt="" />
            </div> */}
        </div>
    </footer>
  )
}
