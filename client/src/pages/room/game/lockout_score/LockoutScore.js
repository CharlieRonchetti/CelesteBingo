import React from 'react'
import './lockoutScore.css'

const lockout_score = ({ playerScore, playerColour }) => {
    return (
        <div className='score-container'>
            <div className='left-score-container'>
            <div className='left-score-name'><p>Goombs</p></div>
                <div className='left-score-count' style={{backgroundColor: playerColour}}><p>{playerScore}</p></div>
            </div>

            <div className='right-score-container'>
                <div className='right-score-count'><p>0</p></div>
                <div className='right-score-name'><p>Crab</p></div>
            </div>
        </div>
    )
}

export default lockout_score