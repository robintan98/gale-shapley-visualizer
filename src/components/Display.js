import React, { useState } from 'react';
import Entry from './Entry.js';
import '../css/Display.css';

function Display(props) {

    const initialInputState = new Map();
    for (var i = 1; i <= props.numPeople; i++) {
        initialInputState["M".concat(i)] = props.numPeople;
        initialInputState["W".concat(i)] = "";

        for (var j = 1; j <= props.numPeople; j++) {
            // initialInputState["MP" + i + "-" + j] = "";
            // initialInputState["WP" + i + "-" + j] = "";
        }
    }
    const [inputState, setInputState] = useState(initialInputState); // global state for all input data

    const leftElems = [];
    var i;
    for (i = 1; i <= props.numPeople; i++) {
        leftElems.push(<Entry numPeople={props.numPeople} count={i} isLeft={true} setInputState={setInputState}/>);
    }

    const rightElems = [];
    var i;
    for (i = 1; i <= props.numPeople; i++) {
        rightElems.push(<Entry numPeople={props.numPeople} count={i} isLeft={false} setInputState={setInputState}/>);
    }

    return (
        <React.Fragment>
            <div className="DisplayArea">
                <div className="DisplayLeftColumn">
                    Men (Proposers)
                    {leftElems}
                </div>
                <div className="DisplayMidColumn"></div>
                <div className="DisplayRightColumn">
                    Women (Recipients)
                    {rightElems}
                </div>
            </div>
            {props.numPeople}
            {JSON.stringify(inputState)}
            {/* <form> */}
                {/* <button onSubmit=handleSubmit></button> */}
            {/* </form> */}
        </React.Fragment>
    );
}

export default Display;