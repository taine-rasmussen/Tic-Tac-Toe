import React, { useState } from 'react';

const GameBoard = () => {


    const [move, setMove] = useState(null)
    const [input, setInput] = useState(null)

    const playerMoves = [['X'], ['Y']]

    const cycleMove = () => {
        if (move % 2 === 0){
            setInput('X'), setMove(move + 1)
        }   else {
            setInput('Y'), setMove(move + 1)
        }
    }

    console.log(move)

    // Each cell needs to be independent so when state is func can check current state of single cell and updated as needed.
    
    // Things to figure out:
    // How to have each move alternate between 'X' & 'Y' - can't overide each other
    // Array of 9 X & Y strings - each click cycles to next position in the array
    // use an object? track player move - if player move is 2 then set move to Y










    // Its really great that you are coding more and more but lets think about how we can optimize the time to be even better. I love you 

    return(
        <div className="gameBoard">
            <div className="gameBoard-container">
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
                <div className="gameBoard-cell" onClick={cycleMove}><h1 className='cell-text'>{input}</h1></div>
            </div>
        </div>
    )
}

export default GameBoard