import React from 'react'
import './board.css'
import { useState } from 'react'
import Row from './Row'

const Grid = ({ setPlayerScore, playerScore, playerColour }) => {
    const objectives = [["core blue heart", "get a 1up in 2a", "all berries in 1a start (6)", "complete shrine without dashing", "old site blue heart"],
                    ["core blue heart", "get a 1up in 2a", "all berries in 1a start (6)", "complete shrine without dashing", "old site blue heart"],
                    ["core blue heart", "get a 1up in 2a", "all berries in 1a start (6)", "complete shrine without dashing", "old site blue heart"],
                    ["core blue heart", "get a 1up in 2a", "all berries in 1a start (6)", "complete shrine without dashing", "old site blue heart"],
                    ["Mess Order: Chests \u2193 Towels \u2192 Books \u2191", "Switch to Ice on the right of Into the Core", "Reach the Bird\u0027s Nest in Epilogue", "complete shrine without dashing", "old site blue heart"]];

    const [revealedBoard, setRevealedBoard] = useState(false)

    const renderRows = objectives.map(objectiveRow => 
        <Row 
            objectives={objectiveRow} 
            setPlayerScore={setPlayerScore} 
            playerScore={playerScore}
            playerColour={playerColour} 
            key={objectives.indexOf(objectiveRow)}
        />
    );

    const handleRevealClick = () => {
        setRevealedBoard(true)
    }

    if(revealedBoard) {
        return (
            <>
                <div className='board'>
                    {renderRows}
                </div>
            </>
        )
    } else {
        return (
            <button className='board-cover' onClick={handleRevealClick}>Click to Reveal</button>
        )
    }
}

export default Grid