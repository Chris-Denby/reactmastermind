import { React, useEffect, useState, useContext } from "react";
import Row from "../row/row-component";
import '../board/board-component.styles.css'
import { ColourChoices } from "../constants/constants";
import RandomNumberUtil from "../../util/random-number";
import { GameOutcomeContext } from "../contexts/game-outcome-context";

const Board = ()=>{


    const { gameOutcome, setGameOutcome} = useContext(GameOutcomeContext);

    const [activeRow, setActiveRow] = useState(0);

    const [secretCode, setSecretCode] = useState();

    //do on first render
    useEffect(()=>{
        generateSecretCode();
    },[]);

    const generateSecretCode = ()=> {
        setSecretCode([
            ColourChoices[RandomNumberUtil(0, ColourChoices.length)],
            ColourChoices[RandomNumberUtil(0, ColourChoices.length)],
            ColourChoices[RandomNumberUtil(0, ColourChoices.length)],
            ColourChoices[RandomNumberUtil(0, ColourChoices.length)],
        ])
    }

    // @param: rowSubmission = array containing colour choices
    // @param: rowNumber = integer of the row number
    const submitRowToBoard = ()=>{
        // const gameOver = determineIfWon(rowSubmission, rowNumber); 
        // determineIfWon(rowSubmission,rowNumber) ?? 
        setActiveRow(activeRow+1)
    }

    useEffect(()=>console.log(secretCode),[secretCode])


    return(
        <div className="board-container">
            <Row solutionRow={true}/>
            <Row rowNumber={11} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={10} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={9} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={8} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={7} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={6} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={5} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={4} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={3} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={2} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={1} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
            <Row rowNumber={0} submitRowToBoard={submitRowToBoard} activeRow={activeRow} secretCode={secretCode}/>
        </div>
    )
}

export default Board;