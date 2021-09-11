import React, { useState } from 'react';

const GameBoard = () => {


    const [move, setMove] = useState(null)

    const possibleMoves = [['X'], ['Y'], ['X'], ['Y'], ['X'], ['Y'], ['X'], ['Y'], ['X']]

    const playerMoves = () => {
        setMove(possibleMoves[0][0])
    }

    // Each cell needs to be independent so when state is func can check current state of single cell and updated as needed.
    
    // Things to figure out:
    // How to have each move alternate between 'X' & 'Y' - can't overide each other
    // Array of 9 X & Y strings - each click cycles to next position in the array

    return(
        <div className="gameBoard">
            <div className="gameBoard-container">
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
                <div className="gameBoard-cell" onClick={playerMoves}><h1 className='cell-text'>{move}</h1></div>
            </div>
        </div>
    )
}

export default GameBoard