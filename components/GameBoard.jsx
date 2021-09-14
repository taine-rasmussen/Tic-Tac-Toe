import React, { useState, useEffect } from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

    // Header to swap from title to winner of game once a player wins
    const [header, setHeader] = useState('Tic-Tac-Toe')

    // Used to update game clock
    const [count, setCount] = useState(0);

    // handles input for cells on player click
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [input3, setInput3] = useState(null)
    const [input4, setInput4] = useState(null)
    const [input5, setInput5] = useState(null)
    const [input6, setInput6] = useState(null)
    const [input7, setInput7] = useState(null)
    const [input8, setInput8] = useState(null)
    const [input9, setInput9] = useState(null)

    // Cell values to track state of each cell as players make moves throughout the game
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
    // Snake with react?????


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

            // Stops gameClocl
            
        }

        const gameClock = () => {
            setInterval(() => {
                setCount(prevCount => prevCount + 1)
              }, 1000);
        }

        // Array used to store player moves as the game is played
        let tracker = [cellTracker1, cellTracker2, cellTracker3, cellTracker4, cellTracker5, cellTracker6, cellTracker7, cellTracker8, cellTracker9]

        // Handles checking current game state to see if any win condition has been met across rows
        const checksForWinRow= () => {
                // Checks top row for win conditions
                if (tracker[0] === 'X' && tracker[1] === 'X' && tracker[2] === 'X'){
                    console.log('X won game top center row')
                } else if (tracker[0] === 'O' && tracker[1] === 'O' && tracker[2] === 'O') {
                    console.log('O won game top center row')
                }

                // Checks center row for win conditions
                else if (tracker[3] === 'X' && tracker[4] === 'X' && tracker[5] === 'X'){
                    console.log('X won game via center row')
                } else if (tracker[3] === 'O' && tracker[4] === 'O' && tracker[5] === 'O') {
                    console.log('O won game via center row')
                }
                
                // Checks bottom row for win conditions
                else if (tracker[6] === 'X' && tracker[7] === 'X' && tracker[8] === 'X'){
                    console.log('X won game via bottom row')
                } else if (tracker[6] === 'O' && tracker[7] === 'O' && tracker[8] === 'O') {
                    console.log('O won game via bottom row')
            }
        }
        // Handles checking current game state to see if any win condition has been met across cols
        const checksForWinCol= () => {
                // Checks left col for win conditions
                if (tracker[0] === 'X' && tracker[3] === 'X' && tracker[6] === 'X'){
                    console.log('X won the game via left col')
                } else if (tracker[0] === 'O' && tracker[3] === 'O' && tracker[6] === 'O') {
                    console.log('O won game via left col')
                }
                
                // Checks center col for win conditions
                else if (tracker[1] === 'X' && tracker[4] === 'X' && tracker[7] === 'X'){
                    console.log('X won game via center col')
                } else if (tracker[1] === 'O' && tracker[4] === 'O' && tracker[7] === 'O') {
                    console.log('O won game via center col')
                }
                
                // Checks right col for win conditions
                else if (tracker[2] === 'X' && tracker[5] === 'X' && tracker[8] === 'X'){
                    console.log('X won game via right col')
                } else if (tracker[2] === 'O' && tracker[5] === 'O' && tracker[8] === 'O') {
                    console.log('O won game via right col')
            }
        }  
        // Handles checking current game state to see if any win condition has been met across diaganles
        const checksForWinDiaganle = () => {
                // Checks top left to bottom right diaganle win condition
                if (tracker[0] === 'X' && tracker[4] === 'X' && tracker[8] === 'X'){
                    console.log('X won via top left diaganle win')
                } else if (tracker[0] === 'O' && tracker[4] === 'O' && tracker[8] === 'O') {
                    console.log('O won via top left diaganle win')
                }
                
                // Checks bottom left to top right diaganle win condition
                else if (tracker[2] === 'X' && tracker[4] === 'X' && tracker[6] === 'X'){
                    console.log('O won via top right diaganle win')
                } else if (tracker[2] === 'O' && tracker[4] === 'O' && tracker[6] === 'O') {
                    console.log('O won via top right diaganle win')
            }
        } 
    checksForWinCol()
    checksForWinRow()
    checksForWinDiaganle()





        // All cells onClick funcs
        const cell1 = () => {

            // Starts gameClock if start btn not pressed when players start a round
            count === 0 ? gameClock() : null

            // Handles input of X or Y depending on which players turn it is then changes player turn
            if (move % 2 === 0){
                setInput1('X'), setMove(move + 1), setCellTracker1('X')
            }   else {
                setInput1('O'), setMove(move + 1), setCellTracker1('O')
            }
        }
        const cell2 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput2('X'), setMove(move + 1), setCellTracker2('X')
            }   else {
                setInput2('O'), setMove(move + 1), setCellTracker2('O')
            }
        }
        const cell3 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput3('X'), setMove(move + 1), setCellTracker3('X')
            }else {
                setInput3('O'), setMove(move + 1), setCellTracker3('O')
            }
        }
        const cell4 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput4('X'), setMove(move + 1), setCellTracker4('X')
            }else {
                setInput4('O'), setMove(move + 1), setCellTracker4('O')
            }
        }
        const cell5 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput5('X'), setMove(move + 1), setCellTracker5('X')
            }else {
                setInput5('O'), setMove(move + 1), setCellTracker5('O')
            }
        }
        const cell6 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput6('X'), setMove(move + 1), setCellTracker6('X')
            }else {
                setInput6('O'), setMove(move + 1), setCellTracker6('O')
            }
        }
        const cell7 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput7('X'), setMove(move + 1), setCellTracker7('X')
            }else {
                setInput7('O'), setMove(move + 1), setCellTracker7('O')
            }
        }
        const cell8 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput8('X'), setMove(move + 1), setCellTracker8('X')
            }else {
                setInput8('O'), setMove(move + 1), setCellTracker8('O')
            }
        }
        const cell9 = () => {
            count === 0 ? gameClock() : null

            if (move % 2 === 0){
                setInput9('X'), setMove(move + 1), setCellTracker9('X')
            }else {
                setInput9('O'), setMove(move + 1), setCellTracker9('O')
            }
        }


        // Handles a draw - will need to be update to check if win is true else display draw
        const Draw = () => {
            if (move > 9){
                window.alert('ITS A DRAW')
            }
        }
        Draw()

    console.log('move:', move)
    console.log('Player moves:', tracker)
    
    return(
        <div className="gameBoard">
            <div className="header-container">
                <h1>{header}</h1>
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
            <button onClick={gameClock} className='start-btn'>Start</button>
            <h3 className='game-clock'>{count}</h3>
        </div>
    )
}

export default GameBoard