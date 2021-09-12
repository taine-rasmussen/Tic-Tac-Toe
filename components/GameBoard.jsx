import React, { useState } from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

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

    // Array used to track previous moves
    const moveTracker = []

    // Cell onClick func that handles player selecting a cell
    const cell1 = () => {
        if (move % 2 === 0){
            setInput1('X'), setMove(move + 1), moveTracker.push("X")
        }   else {
            setInput1('Y'), setMove(move + 1), moveTracker.push('Y')
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

    console.log('move1:', move)
    console.log(moveTracker)

    // Each cell needs to be independent so when state is func can check current state of single cell and updated as needed.
    
    // Things to figure out:
    // How to have each move alternate between 'X' & 'Y' - can't overide each other
    // Array of 9 X & Y strings - each click cycles to next position in the array
    // use an object? track player move - if player move is 2 then set move to Y
    return(
        <div className="gameBoard">
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