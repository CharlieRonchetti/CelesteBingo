import React from 'react'
import Cell from './Cell'
import './row.css'

const Row = ({ objectives, setPlayerScore, playerScore, playerColour }) => {
    const renderCells = objectives.map(objective => 
        <Cell 
            objective={objective} 
            setPlayerScore={setPlayerScore} 
            playerScore={playerScore}
            playerColour={playerColour}
            key={objectives.indexOf(objective)}
        />
    )

    return (
        <>
            <div className='row'>{renderCells}</div>
        </>
    )
}

export default Row