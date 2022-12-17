import React from 'react'
import Board from './board/Board'
import LockoutScore from './lockout_score/LockoutScore'
import ColourPicker from './colour_picker/ColourPicker'
import { useState } from 'react'
import './game.css'

const Game = () => {
	const [playerScore, setPlayerScore] = useState(0)
	const [playerColour, setPlayerColour] = useState('#279AF1')

  	return (
    	<>
			<div className='game-container'>
				<ColourPicker setPlayerColour={setPlayerColour}/>
				<Board setPlayerScore={setPlayerScore} playerScore={playerScore} playerColour={playerColour}/>
				<LockoutScore playerScore={playerScore} playerColour={playerColour}/>
			</div>
		</>
  	)
}

export default Game