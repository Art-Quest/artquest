import React from 'react'
import twitter from "../../assets/twitter-brands-solid.svg"
import discord from "../../assets/discord-brands-solid.svg"
import github from "../../assets/github-brands-solid.svg"
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
        <div className='footer flex items-center justify-center'>
            <div className="footer-container">
                <p>&copy; 2024 ArtQuest. All rights reserved. </p>
            </div>
            <div className="footer-text">
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
