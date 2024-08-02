import React from "react";
import '../hints/hint-pin-component.styles.css'

const HintPin = ({grade}) => {
    return (
        <div className={`hint-pin grade${grade}`}>
            
        </div>
    )
}

export default HintPin;