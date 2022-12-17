import React from 'react'
import './colourPicker.css'

const ColourPicker = ({ setPlayerColour }) => {
    return (
        <div className='colour-picker-container'>
            <div className='colour-picker-header'>Choose Your Colour</div>
            <div className='colour-picker-colours'>
                <button className='colour-picker-blue' onClick={() => setPlayerColour('#279AF1')}>Blue</button>
                <button className='colour-picker-pink' onClick={() => setPlayerColour('#FF729F')}>Pink</button>
                <button className='colour-picker-yellow' onClick={() => setPlayerColour('#FBFF12')}>Yellow</button>
                <button className='colour-picker-green' onClick={() => setPlayerColour('#9FD356')}>Green</button>
                <button className='colour-picker-cyan' onClick={() => setPlayerColour('#42F2F7')}>Cyan</button>
            </div>
        </div>
    )
}

export default ColourPicker