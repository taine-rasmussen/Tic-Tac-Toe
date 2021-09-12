import React, { useState } from 'react';

const GameBoard = () => {


    const [move, setMove] = useState(null)
    const [move2, setMove2] = useState(null)

    // Cell inputs
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [input3, setInput3] = useState(null)


    const cell1 = () => {

        // Input1
        if (move % 2 === 0){
            setInput1('X'), setMove(move + 1)
        }   else {
            setInput1('Y'), setMove(move + 1)
        }
    }

    const cell2 = () => {
          // Input2
          if (move2 % 2 === 0){
            setInput2('X'), setMove2(move2 + 1)
        }   else {
            setInput2('Y'), setMove2(move2 + 1)
        }
    }

    console.log('move1:', move)
    console.log('move2:', move2)

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