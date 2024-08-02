import React, { useState, useEffect, useContext } from "react";
import '../code-pin/code-pin-component.styles.css'
import { ColourChoices } from "../constants/constants";

const CodePin = ({onColourSelect, position, enabled, solutionPin, colourOverride}) => {
    const [colour, setColour] = useState("black");
    const currentIndex = ColourChoices.indexOf(colour);
    const nextColour = ColourChoices[currentIndex+1] ?? ColourChoices[0];

    useEffect(()=>{
        onColourSelect(colour, position)
    }
    ,[colour]);

    const onCodePinClick = async () => {
        enabled && setColour(nextColour)
    }

    return(
        <div className="code-pin-container" 
        onClick={onCodePinClick} 
        style={
            {backgroundColor: !solutionPin ? colour : "black"}
        }>
        </div>
    )
}

export default CodePin;