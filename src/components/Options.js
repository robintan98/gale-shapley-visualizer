import React, { useState } from 'react';
import Display from './Display.js';
import Simulation from './Simulation.js';
import '../css/Options.css';

function Options() {
    const [numPeople, setNumPeople] = useState(2);
    const [inputState, setInputState] = useState(new Map()); // global state for all input data
    const [showSim, setShowSim] = useState(false); // should be default false

    const condUpdate = (candValue) => {
        return (candValue == 2 || candValue == 3 || candValue == 4) ? candValue : numPeople;
    }

    return (
        <React.Fragment>
            <div>
                <input type="number" class="NumPeopleForm" placeholder="2-4 people"
                    min="2" max="4" required onChange={e => setNumPeople(condUpdate(e.target.value))}>
                </input>
                <p>Number of people: {numPeople} </p>
                {!showSim && <Display numPeople={numPeople} inputState={inputState} setInputState={setInputState} setShowSim={setShowSim}></Display>}
                {showSim && <Simulation inputState={inputState}></Simulation>}
            </div>
        </React.Fragment>
    );
}


export default Options;