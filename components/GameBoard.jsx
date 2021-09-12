import React, { useState } from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

    // Tracks player moves
    const [tracker, setTracker] = useState([[''],[''],[''],
                                            [''],[''],[''],
                                            [''],[''],['']])
    // Cell inputs for 'X' & 'Y'
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [input3, setInput3] = useState(null)
    const [input4, setInput4] = useState(null)
    const [input5, setInput5] = useState(null)
    const [input6, setInput6] = useState(null)
    const [input7, setInput7] = useState(null)
    const [input8, setInput8] = useState(null)
    const [input9, setInput9] = useState(null)

    // Possible player moves
    const X = 'X'
    const Y = 'Y'

    // Cell onClick func that handles player selecting a cell
    const cell1 = () => {
        if (move % 2 === 0){
            setInput1('X'), setMove(move + 1), setTracker(tracker[0] = 'X')
        }   else {
            setInput1('Y'), setMove(move + 1), setTracker(tracker[0] = 'Y')
        }
    }
    const cell2 = () => {
          if (move % 2 === 0){
            setInput2('X'), setMove(move + 1)
        }   else {
            setInput2('Y'), setMove(move + 1)
        }
    }
    const cell3 = () => {
        if (move % 2 === 0){
            setInput3('X'), setMove(move + 1)
        }else {
            setInput3('Y'), setMove(move + 1)
        }
    }
    const cell4 = () => {
        if (move % 2 === 0){
            setInput4('X'), setMove(move + 1)
        }else {
            setInput4('Y'), setMove(move + 1)
        }
    }
    const cell5 = () => {
        if (move % 2 === 0){
            setInput5('X'), setMove(move + 1)
        }else {
            setInput5('Y'), setMove(move + 1)
        }
    }
    const cell6 = () => {
        if (move % 2 === 0){
            setInput6('X'), setMove(move + 1)
        }else {
            setInput6('Y'), setMove(move + 1)
        }
    }
    const cell7 = () => {
        if (move % 2 === 0){
            setInput7('X'), setMove(move + 1)
        }else {
            setInput7('Y'), setMove(move + 1)
        }
    }
    const cell8 = () => {
        if (move % 2 === 0){
            setInput8('X'), setMove(move + 1)
        }else {
            setInput8('Y'), setMove(move + 1)
        }
    }
    const cell9 = () => {
        if (move % 2 === 0){
            setInput9('X'), setMove(move + 1)
        }else {
            setInput9('Y'), setMove(move + 1)
        }
    }

    console.log('move:', move)
    console.log('Player moves:', tracker[0])
    // Things to figure out:
    // Each time player moves update move tracker array and declare what was placed on the
    // Will need to write all possible win conditions for the game and check if they are already met when player goes to move again
    // Try storing possible win conditions as arrays and check if playerTracker matches 
    return(
        <div className="gameBoard">
            <div className="header-container">
                <h1>Tic-Tac-Toe</h1>
                <label>Start</label>
            </div>
            <div className="gameBoard-container">
                <div className="gameBoard-cell" onClick={cell1}><h1 className='cell-text'>{input1}</h1></div>
                <div className="gameBoard-cell" onClick={cell2}><h1 className='cell-text'>{input2}</h1></div>
                <div className="gameBoard-cell" onClick={cell3}><h1 className='cell-text'>{input3}</h1></div>
                <div className="gameBoard-cell" onClick={cell4}><h1 className='cell-text'>{input4}</h1></div>
                <div className="gameBoard-cell" onClick={cell5}><h1 className='cell-text'>{input5}</h1></div>
                <div className="gameBoard-cell" onClick={cell6}><h1 className='cell-text'>{input6}</h1></div>
                <div className="gameBoard-cell" onClick={cell7}><h1 className='cell-text'>{input7}</h1></div>
                <div className="gameBoard-cell" onClick={cell8}><h1 className='cell-text'>{input8}</h1></div>
                <div className="gameBoard-cell" onClick={cell9}><h1 className='cell-text'>{input9}</h1></div>
            </div>
        </div>
    )
}

export default GameBoard