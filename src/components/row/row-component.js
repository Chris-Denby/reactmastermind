import React, { useEffect, useState, useContext} from "react";
import CodePin from "../code-pin/code-pin-component";
import Hints from "../hints/hints-container-component";
import '../row/row-component.styles.css'
import { ColourChoices } from "../constants/constants";
import SubmitButton from "./submit-button-component";
import RandomNumberUtil from "../../util/random-number";
import { GameOutcomeContext } from "../contexts/game-outcome-context";

const Row = ({solutionRow, activeRow, rowNumber, submitRowToBoard, secretCode}) => {

    const {gameOutcome, setGameOutcome} = useContext(GameOutcomeContext);
    
    const [hints, setHints] = useState([]);
    const enabled = (activeRow !== rowNumber) || solutionRow ? false : true;
    
    const rowColourChoices = 
        [
            ColourChoices[4],
            ColourChoices[4],
            ColourChoices[4],
            ColourChoices[4],
        ];

    const onColourSelect = (colour, position)=>{
        rowColourChoices[position] = colour;
    }

    const determineIfWon = (hints, rowNumber)=>{
        if(!activeRow) return
        let score = 0;
        hints.forEach(hint=>score=score+hint);
        if(score===8) {
            //game won
            // alert("You Win!")
            // setRevealSecretCode(true);
            setGameOutcome("won");
            // window.location.reload();
        } else
        if(rowNumber <11 & score !== 8) {
            //game still in progress
        } else
        if(rowNumber === 11 && score !== 8) {
            //game lost
            // alert("You lose!")
            // setRevealSecretCode(true);
            setGameOutcome("lost");
            // window.location.reload();
        } 
    }

    useEffect(()=>{
        determineIfWon(hints,rowNumber)
    },[hints]);


    const onSubmitRow = ()=>{
        generateHints();
        submitRowToBoard()
    }

    const generateHints = ()=>{
        const hintsArray = [0,0,0,0];
        const checkedSecretCodePins = []
        const x = 0;

        for(let x=0; x<rowColourChoices.length; x++) {
            let hintGrade = 0;
            let currentPinColor = rowColourChoices[x];
            

            for(let y=0; y<secretCode.length; y++) {
                if(currentPinColor === secretCode[y] & !checkedSecretCodePins.includes(y)) {
                    hintGrade++;
                    if(x===y) {
                        hintGrade++;
                    }
                    checkedSecretCodePins.push(y)
                    break;
                }
            }
            hintsArray[x] = hintGrade;
        }
        // console.log("hints in row component ->" + hintsArray)
        setHints(shuffleHintPositions(hintsArray))
    }

    const shuffleHintPositions = (hintsArray)=> {
        //get hints array
        const positionsFilled = [];
        const shuffledHints = [null,null,null,null];
        hintsArray.forEach(hint => {
            let position = RandomNumberUtil(0,hintsArray.length);
            //if position already taken
            while(positionsFilled.includes(position)) {
                //fetch a different number
                position = RandomNumberUtil(0,hintsArray.length);
            }
            shuffledHints[position] = hint;
            positionsFilled.push(position)
        });
        //for each hint 
        //pick a random number between 0 and 3 for position
        //if position isnt already filled - fill that position
        //if filled, generate another random number
        return shuffledHints;
    }

    return(
        <div className={`row-container ${solutionRow && " solutionRow"} ${activeRow !== rowNumber && " inactive"}`}>
            {/* if solution row and game is over - show the code pins */}
            <CodePin onColourSelect={onColourSelect} position={0} enabled={enabled} solutionPin={solutionRow}/>
            <CodePin onColourSelect={onColourSelect} position={1} enabled={enabled} solutionPin={solutionRow}/>
            <CodePin onColourSelect={onColourSelect} position={2} enabled={enabled} solutionPin={solutionRow}/>
            <CodePin onColourSelect={onColourSelect} position={3} enabled={enabled} solutionPin={solutionRow}/>
            {activeRow > rowNumber && <Hints hints={hints}/>}
            {((activeRow === rowNumber) && !solutionRow) && <SubmitButton onClick={onSubmitRow}/>}
        </div>
    )
}

export default Row;

// o-----------------------------------------------o //
// |Iterate through the SOLUTION PINS              | //
// |to see if the guesses are correct.             | //
// |(Instead of looking primarily at your guess)   | //
// |Put the black pins in straight away if found,  | //
// |but leave the white pins until after iterating | //
// |through all of the solution pins.              | //
// o-----------------------------------------------o //



