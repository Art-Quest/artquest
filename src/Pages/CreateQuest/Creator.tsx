import React from 'react'
import { Header } from '../../Components/Header/Header'
import './creator.css'
import { AuroraBackground } from '../../Components/lib/aurora-background copy'

export const Creator = () => {
  return (
    <div className='creator-containers'>
        <Header />
        <AuroraBackground>
            <div className="creator-container">
                <div className="create-intro">
                    <h1>CREATE QUEST</h1>
                </div>
                <div className="create-text">
                    <h3>Please Tell Us About Your Game, Quest or Bounties You Want Engagements on and Fill Out the Form Correctly</h3>
                </div>
            </div>
        </AuroraBackground>
        <div className="creator-form">
            <div className="creator-form-container">
                <div className="form-right">
                    <form action="">
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
