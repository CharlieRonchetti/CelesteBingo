import React from 'react'
import { useState } from 'react'
import './cell.css'

const Cell = ({ objective, setPlayerScore, playerScore, playerColour }) => {
    // Old blue color #0096FF
    const [isTicked, setIsTicked] = useState(false)
    const [isHovering, setHovering] = useState(false)
    const [cellColour, setCellColour] = useState()

    const handleObjectiveTick = () => {
        if(isTicked) {
            setIsTicked(false)
            setPlayerScore(playerScore - 1)
        } else {
            setIsTicked(true)
            setPlayerScore(playerScore + 1)

            setCellColour(playerColour)
        }
    }

    const handleObjectiveHover = (e) => {
        if(e.type === "mouseenter") {
            setHovering(true)
        } else if(e.type === "mouseleave") {
            setHovering(false)
        }
    }

    return (
        <button className='cell' 
                onClick={handleObjectiveTick}
                onMouseEnter={handleObjectiveHover}
                onMouseLeave={handleObjectiveHover}
                style={{backgroundColor: isTicked ? cellColour: 
                                        isHovering ? '#272B30' : "#272B30"}}
        > 
            {objective} 
        </button>
    )
}

export default Cell