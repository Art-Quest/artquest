import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import './creator.css'
import { AuroraBackground } from '../../Components/lib/aurora-background copy'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

export const Creator = () => {

    // const [startDate, setStartDate] = useState(new Date());
    
  return (
      
      <div className='creator-containers'>
        <AuroraBackground>
        <Header />
            <div className="creator-container">
                <div>
                    <h1  className="create-intro">CREATE QUEST</h1>
                </div>
                <div className="create-text">
                    <h3>Please Tell Us About Your Game, Quest or Bounties You Want Engagements on and Fill Out the Form Correctly</h3>
                </div>
            </div>
        <div className="creator-form">
            <div className="flex creator-form-container">
                <div className="form-right">
                    <form action="">
                        <div className="creator-title">
                            {/* <label htmlFor="">Name/Title</label> */}
                            <h4>Mode Of Payment:</h4>
                        </div>
                    </form>
                </div>
                <div className="payment">
                    <form action="">
                        <div className="creator-title">
                            <p>Title of Quest:</p>
                            <input type="text" placeholder='Enter here...' />
                        </div>
                        <div className="date-quest">
                            <p>Quest Start Date:</p>
                            <input type="date" />                        
                        </div>
                        <div className="quest-end">
                            <p>Quest End Date:</p>
                            <input type="date" name="" id="" />
                        </div> 
                        <div className="description">
                            <p>About Quest:</p>
                            <textarea placeholder='Expand the textarea for more space' name="" id=""></textarea>
                        </div>
                        <div className="creator-title">
                            <p>Prize Pool:</p>
                            <input type="number" placeholder='Enter here...' />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
                
            </div>
        </div>
    </AuroraBackground>
    </div>

  )
}
