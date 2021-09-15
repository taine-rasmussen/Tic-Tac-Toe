import React, { useState, useEffect } from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

    // Used to update game clock
    const [count, setCount] = useState(0)

    // GameState flips to true on game win 
    const [gameState, setGameState] = useState(false)

    // handles input for cells on player click
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')
    const [input8, setInput8] = useState('')
    const [input9, setInput9] = useState('')

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



    // THINGS TO COMPLETE FOR MVP



    // clock to reset on btn reset
    // clock to stop on game win
    // Not be able to overwrite move once made
    // Make the draw better - remove window alert and just update header with draw











    // Default color for subheader
    let color = '#FFE3E3'

    // Flips subheader color so its visible on round win
    const toggleColor = () => {
        color = '#070F1C'
    }



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

            // Resets clock

        }

        // Landing header that changes on game win
        let header = 'player has won'

        // Starts gameClock
        const startGameClock = () => {
            setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000);
        }

        // Stops gameClock
       

        // Array used to store player moves as the game is played
        let tracker = [cellTracker1, cellTracker2, cellTracker3, cellTracker4, cellTracker5, cellTracker6, cellTracker7, cellTracker8, cellTracker9]

        // Handles checking current game state to see if any win condition has been met across rows
        const checksForWinRow= () => {
                // Checks top row for win conditions
                if (tracker[0] === 'X' && tracker[1] === 'X' && tracker[2] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[0] === 'O' && tracker[1] === 'O' && tracker[2] === 'O') {
                    return header = 'O won the round!', toggleColor()
                }

                // Checks center row for win conditions
                else if (tracker[3] === 'X' && tracker[4] === 'X' && tracker[5] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[3] === 'O' && tracker[4] === 'O' && tracker[5] === 'O') {
                    return header = 'O won the round!', toggleColor()
                }
                
                // Checks bottom row for win conditions
                else if (tracker[6] === 'X' && tracker[7] === 'X' && tracker[8] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[6] === 'O' && tracker[7] === 'O' && tracker[8] === 'O') {
                    return header = 'O won the round!', toggleColor()
            }
        }
        // Handles checking current game state to see if any win condition has been met across cols
        const checksForWinCol= () => {
                // Checks left col for win conditions
                if (tracker[0] === 'X' && tracker[3] === 'X' && tracker[6] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[0] === 'O' && tracker[3] === 'O' && tracker[6] === 'O') {
                    return header = 'O won the round!', toggleColor()
                }
                
                // Checks center col for win conditions
                else if (tracker[1] === 'X' && tracker[4] === 'X' && tracker[7] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[1] === 'O' && tracker[4] === 'O' && tracker[7] === 'O') {
                    return header = 'O won the round!', toggleColor()
                }
                
                // Checks right col for win conditions
                else if (tracker[2] === 'X' && tracker[5] === 'X' && tracker[8] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[2] === 'O' && tracker[5] === 'O' && tracker[8] === 'O') {
                    return header = 'O won the round!', toggleColor()
            }
        }  
        // Handles checking current game state to see if any win condition has been met across diaganles
        const checksForWinDiaganle = () => {
                // Checks top left to bottom right diaganle win condition
                if (tracker[0] === 'X' && tracker[4] === 'X' && tracker[8] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[0] === 'O' && tracker[4] === 'O' && tracker[8] === 'O') {
                    return header = 'O won the round!', toggleColor()
                }
                
                // Checks bottom left to top right diaganle win condition
                else if (tracker[2] === 'X' && tracker[4] === 'X' && tracker[6] === 'X'){
                    return header = 'X won the round!', toggleColor()
                } else if (tracker[2] === 'O' && tracker[4] === 'O' && tracker[6] === 'O') {
                    return header = 'O won the round!', toggleColor()
            }
        } 
    checksForWinCol()
    checksForWinRow()
    checksForWinDiaganle()





        // All cells onClick funcs
        const cell1 = () => {
            // Starts gameClock if start btn not pressed when players start a round
            count === 0 ? startGameClock() : null

            // Handles input of X or Y depending on which players turn it is then changes player turn
            if (input1 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput1('X'), setMove(move + 1), setCellTracker1('X')
                }else {
                    return setInput1('O'), setMove(move + 1), setCellTracker1('O')
                }
            }
        }
        const cell2 = () => {
            count === 0 ? startGameClock() : null

            if (input2 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput2('X'), setMove(move + 1), setCellTracker2('X')
                }else {
                    return setInput2('O'), setMove(move + 1), setCellTracker2('O')
                }
            }
        }
        const cell3 = () => {
            count === 0 ? startGameClock() : null

            if (input3 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput3('X'), setMove(move + 1), setCellTracker3('X')
                }else {
                    return setInput3('O'), setMove(move + 1), setCellTracker3('O')
                }
            }
        }
        const cell4 = () => {
            count === 0 ? startGameClock() : null

            if (input4 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput4('X'), setMove(move + 1), setCellTracker4('X')
                }else {
                    return setInput4('O'), setMove(move + 1), setCellTracker4('O')
                }
            }
        }
        const cell5 = () => {
            count === 0 ? startGameClock() : null

            if (input5 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput5('X'), setMove(move + 1), setCellTracker5('X')
                }else {
                    return setInput5('O'), setMove(move + 1), setCellTracker5('O')
                }
            }
        }
        const cell6 = () => {
            count === 0 ? startGameClock() : null

            if (input6 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput6('X'), setMove(move + 1), setCellTracker6('X')
                }else {
                    return setInput6('O'), setMove(move + 1), setCellTracker6('O')
                }
            }
        }
        const cell7 = () => {
            count === 0 ? startGameClock() : null

            if (input7 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput7('X'), setMove(move + 1), setCellTracker7('X')
                }else {
                    return setInput7('O'), setMove(move + 1), setCellTracker7('O')
                }
            }
        }
        const cell8 = () => {
            count === 0 ? startGameClock() : null

            if (input8 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput8('X'), setMove(move + 1), setCellTracker8('X')
                }else {
                    return setInput8('O'), setMove(move + 1), setCellTracker8('O')
                }
            }
        }
        const cell9 = () => {
            count === 0 ? startGameClock() : null

            if (input9 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput9('X'), setMove(move + 9), setCellTracker9('X')
                }else {
                    return setInput9('O'), setMove(move + 9), setCellTracker9('O')
                }
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
    console.log(color)

    return(
        <div className="gameBoard">
            <div className="header-container">
                <h1>Tic-Tac-Toe</h1>
                <h4 className='sub-header' style={{color: color}}>{header}</h4>
            </div>
                <img src='/tic-tac-toe-bg.svg' className='bg-img' alt='background-img' />
                
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
            <button onClick={startGameClock} className='start-btn'>Start</button>
            <h3 className='game-clock'>{count}</h3>
        </div>
    )
}

export default GameBoard