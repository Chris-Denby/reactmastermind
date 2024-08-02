import React from "react";
import '../row/submit-button-component.styles.css'

const SubmitButton = ({onClick}) => {
    return (
        <button onClick={onClick}>✓</button>
    )
}
export default SubmitButton;