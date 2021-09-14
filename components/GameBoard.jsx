import React, { useState } from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

    // Tracks player moves
    // const [tracker, setTracker] = useState([[''],[''],[''],
    //                                         [''],[''],[''],
    //                                         [''],[''],['']])
    // Cell inputs for 'X' & 'O'
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [input3, setInput3] = useState(null)
    const [input4, setInput4] = useState(null)
    const [input5, setInput5] = useState(null)
    const [input6, setInput6] = useState(null)
    const [input7, setInput7] = useState(null)
    const [input8, setInput8] = useState(null)
    const [input9, setInput9] = useState(null)

    // Cell values to tracker state of each cell as players make moves throughout the game
    const [cellTracker1, setCellTracker1] = useState('empty')
    const [cellTracker2, setCellTracker2] = useState('empty')
    const [cellTracker3, setCellTracker3] = useState('empty')
    const [cellTracker4, setCellTracker4] = useState('empty')
    const [cellTracker5, setCellTracker5] = useState('empty')
    const [cellTracker6, setCellTracker6] = useState('empty')
    const [cellTracker7, setCellTracker7] = useState('empty')
    const [cellTracker8, setCellTracker8] = useState('empty')
    const [cellTracker9, setCellTracker9] = useState('empty')



    // Make subheader btns the same colour as the SVG - the off White contrast 
    // Conditionaly render winning screen at end of game - One component - concatenate winner with state
    // score board to the left kepping track of rounds - if time is used try display time of each round
    // Reset btn set bottom right of screen adding splash of pink to the negative space
    // try find ways to make Header darker to help balance colours
    // Round timer displayed in lower left
    // Use PS to cut out pink space on tic-tac-toe-bg.svg so bg.svg can be used

    //try recreate cod menu with react - check jackfrags vid for examples
    // build analog clock - figure 8 out of two squares of divs on top - sections light up as time changes - add animtations to transtion - fliping


        // Handles reset btn
        const Reset = () => {
            // Resets move counter
            setMove(null)
            // Resets cells to null state
            setInput1(null)
            setInput2(null)
            setInput3(null)
            setInput4(null)
            setInput5(null)
            setInput6(null)
            setInput7(null)
            setInput8(null)
            setInput9(null)
        }

        // Array used to store player moves as the game is played
        let tracker = [cellTracker1, cellTracker2, cellTracker3, cellTracker4, cellTracker5, cellTracker6, cellTracker7, cellTracker8, cellTracker9]

    
        
        // Handles checking current game state to see if any win condition has been met
        const checksForWinRow= () => {

                // Checks top row for win conditions
                if (tracker[0] && tracker[1] && tracker[2] === 'X'){
                    console.log('X won the game via top row')
                } else if (tracker[0] && tracker[1] && tracker[2] === 'O') {
                    console.log('O won game via top row')
                }
                
                // Checks center row for win conditions
                else if (tracker[3] && tracker[4] && tracker[5] === 'X'){
                    console.log('X won game via center row')
                } else if (tracker[3] && tracker[4] && tracker[5] === 'O') {
                    console.log('O won game via center row')
                }
                
                // Checks bottom row for win conditions
                else if (tracker[6] && tracker[7] && tracker[8] === 'X'){
                    console.log('X won game via bottom row')
                } else if (tracker[6] && tracker[7] && tracker[8] === 'O') {
                    console.log('O won game via bottom row')
                }
        }
        checksForWinRow()




        // Cell onClick func that handles player selecting a cell
        const cell1 = () => {
            if (move % 2 === 0){
                setInput1('X'), setMove(move + 1), setCellTracker1('X')
            }   else {
                setInput1('O'), setMove(move + 1), setCellTracker1('O')
            }
        }
        const cell2 = () => {
            if (move % 2 === 0){
                setInput2('X'), setMove(move + 1), setCellTracker2('X')
            }   else {
                setInput2('O'), setMove(move + 1), setCellTracker2('O')
            }
        }
        const cell3 = () => {
            if (move % 2 === 0){
                setInput3('X'), setMove(move + 1), setCellTracker3('X')
            }else {
                setInput3('O'), setMove(move + 1), setCellTracker3('O')
            }
        }
        const cell4 = () => {
            if (move % 2 === 0){
                setInput4('X'), setMove(move + 1), setCellTracker4('X')
            }else {
                setInput4('O'), setMove(move + 1), setCellTracker4('O')
            }
        }
        const cell5 = () => {
            if (move % 2 === 0){
                setInput5('X'), setMove(move + 1), setCellTracker5('X')
            }else {
                setInput5('O'), setMove(move + 1), setCellTracker5('O')
            }
        }
        const cell6 = () => {
            if (move % 2 === 0){
                setInput6('X'), setMove(move + 1), setCellTracker6('X')
            }else {
                setInput6('O'), setMove(move + 1), setCellTracker6('O')
            }
        }
        const cell7 = () => {
            if (move % 2 === 0){
                setInput7('X'), setMove(move + 1), setCellTracker7('X')
            }else {
                setInput7('O'), setMove(move + 1), setCellTracker7('O')
            }
        }
        const cell8 = () => {
            if (move % 2 === 0){
                setInput8('X'), setMove(move + 1), setCellTracker8('X')
            }else {
                setInput8('O'), setMove(move + 1), setCellTracker8('O')
            }
        }
        const cell9 = () => {
            if (move % 2 === 0){
                setInput9('X'), setMove(move + 1), setCellTracker9('X')
            }else {
                setInput9('O'), setMove(move + 1), setCellTracker9('O')
            }
        }

    console.log('move:', move)
    console.log('Player moves:', tracker)
    // Things to figure out:
    // Each time player moves update move tracker array and declare what was placed on the
    // Will need to write all possible win conditions for the game and check if they are already met when player goes to move again
    // Try storing possible win conditions as arrays and check if playerTracker matches 
    return(
        <div className="gameBoard">
            <div className="header-container">
                <h1>Tic-Tac-Toe</h1>
            </div>
                <img src='/tic-tac-toe-bg.svg' className='bg-img' alt='test' />



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
            <button onClick={Reset} className='reset-btn'>Reset</button>
        </div>
    )
}

export default GameBoard