import React from 'react'
import './chatbox.css'

const Chatbox = () => {
    return (
        <div className='chatbox-container'>
            <div className='chatbox-header'>Chat Feed</div>
            <div className='chatbox-message-container'></div>
            <div className='chatbox-input-container'>
                <div className='chatbox-input'></div>
                <button className='chatbox-submit'>Send</button>
            </div>
        </div>
    )
}

export default Chatbox