import React, { useState } from 'react';
import Entry from './Entry.js';
import '../css/Display.css';

function Display(props) {

    const [inputState, setInputState] = useState(new Map()); // global state for all input data

    const leftElems = [];
    for (var i = 1; i <= props.numPeople; i++) {
        leftElems.push(<Entry numPeople={props.numPeople} count={i} isLeft={true} setInputState={setInputState}/>);
    }

    const rightElems = [];
    for (var i = 1; i <= props.numPeople; i++) {
        rightElems.push(<Entry numPeople={props.numPeople} count={i} isLeft={false} setInputState={setInputState}/>);
    }
    const handleSubmit = () => {
        if (!validateData()) {
            alert("input sucks");
        } else {
            alert("input good!");
        }
    }

    const shareElements = (set1, set2) => {
        Array.from(set1).forEach(function (item, index) {
            if (item in set2) {
                return false;
            }
        });
        return true;
    }

    const validateData = () => {
        // Check if inputs are well-formed
        var prefixes = ["M", "W"];
        for (var i = 0; i < 2; i++) {
            for (var j = 1; j <= props.numPeople; j++) {
                if (!((prefixes[i] + j) in inputState)) {
                    return false;
                }

                if (inputState[prefixes[i] + j].length == 0) {
                    return false;
                }

                for (var k = 1; k <= props.numPeople; k++) {
                    if (!((prefixes[i] + j + "-P" + k) in inputState)) {
                        return false;
                    }

                    if (inputState[prefixes[i] + j + "-P" + k].length == 0) {
                        return false;
                    }
                }
            }
        }

        // Get sets of men and women
        var menList = []
        for (var i = 1; i <= props.numPeople; i++) {
            menList.push(inputState["M" + i]);
        }
        var menSet = new Set(menList);

        var womenList = []
        for (var i = 1; i <= props.numPeople; i++) {
            womenList.push(inputState["W" + i]);
        }
        var womenSet = new Set(womenList);

        if (menSet.size != props.numPeople || womenSet.size != props.numPeople || !shareElements(menSet, womenSet)) {
            return false;
        }

        // Check if preferences match
        var prefixes = ["M", "W"];
        for (var i = 0; i < 2; i++) {
            for (var j = 1; j <= props.numPeople; j++) {
                var prefList = []
                for (var k = 1; k <= props.numPeople; k++) {
                    prefList.push(inputState[prefixes[i] + j + "-P" + k]);
                }
                var prefSet = new Set(prefList);
                if (i == 0 && !setEquals(prefSet, womenSet)) {
                    return false;
                } else if (i == 1 && !setEquals(prefSet, menSet)) {
                    return false;
                }
            }
        }

        return true;
    }

    const setEquals = (set1, set2) => {
        var array1 = Array.from(set1);
        array1.sort();

        var array2 = Array.from(set2);
        array2.sort();
        
        return JSON.stringify(array1) === JSON.stringify(array2);
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
            {JSON.stringify(inputState)}
            <button class="SubmitButton" onClick={handleSubmit}>Submit</button>
        </React.Fragment>
    );
}

export default Display;