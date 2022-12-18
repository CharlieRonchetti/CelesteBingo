import React from 'react'
import './board.css'
import { useState } from 'react'
import Row from './Row'

const Grid = ({ setPlayerScore, playerScore, playerColour }) => {
    const objectives = [["Use 2 Binoculars in 4 Chapters", "Grabless 5A", "5 Winged Berries", "All Berries in Awake (1)", "2 Blue and 2 Red Hearts"],
                    ["Get 5 Berries in PICO-8", "All Berries in Shrine (9)", "Blue and Red Heart in Golden Ridge", "All Flags in 3000M", "Mess Order: Chests \u2193 Towels \u2192 Books \u2191"],
                    ["Grabless 6A", "Golden Ridge Blue Heart", "Get a 1-Up in 1A", "Get 2 Keys in Power Source", "6 Winged Berries"],
                    ["10 Berries in 3A", "8 Winged Berries", "4 Gems in The Summit", "Grabless Huge Mess", "Get a 1-Up in 4A"],
                    ["Golden Ridge Cassette", "5 Berries in 3 Chapters", "Reflection Blue Heart", "Get 15 Berries in PICO-8", "Reach the Bird\u0027s Nest in Epilogue"]];

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