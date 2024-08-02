import React, { useEffect } from "react";
import RandomNumberUtil from "../../util/random-number";
import '../hints/hints-container-component.styles.css'
import HintPin from "./hint-pin-component";

const Hints = ({hints}) => {

    return (
        <div className="hints-container">
            <HintPin grade={hints[0] ?? ''}/>
            <HintPin grade={hints[1] ?? ''}/>
            <HintPin grade={hints[2] ?? ''}/>
            <HintPin grade={hints[3] ?? ''}/>
        </div>
    )
}

export default Hints