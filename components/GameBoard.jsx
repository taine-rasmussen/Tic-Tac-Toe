import React, { useState} from 'react';

const GameBoard = () => {

    // Cell state used to keep track moves
    const [move, setMove] = useState(null)

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

    // Default color for subheader
    let color = '#070F1C'

    // Flips subheader color so its visible on round win
    const toggleColor = () => {
        color = '#FFE3E3'
    }

    // Handles reset btn
    const Reset = () => {
        location.reload();
    }

    // Landing header that changes on game win
    let header = 'player has won'

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
        checksForWinCol(), checksForWinRow(), checksForWinDiaganle()

        // All cells onClick funcs
        const cell1 = () => {
           // Handles input of X or Y depending on which players turn it is then changes player turn & updates tracker
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
            if (input9 != ''){
                return null
            }   else {
                if (move % 2 === 0){
                    return setInput9('X'), setMove(move + 1), setCellTracker9('X')
                }else {
                    return setInput9('O'), setMove(move + 1), setCellTracker9('O')
                }
            }
        }

    return(
        <div className="gameBoard">
            <div className="header-container">
                <h1>Tic-Tac-Toe</h1>
            </div>
                <img src='/tic-tac-toe-bg.svg' className='bg-img' alt='background-img' />
                <img src='/bg.svg' className='bg-img2' alt='background-img' />
                
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
                <button onClick={Reset} className='start-btn'>Reset</button>
                <h4 className='sub-header' style={{color: color}}>{header}</h4>
        </div>
    )
}

export default GameBoard