import React, { useState } from 'react';
import Display from './Display.js';
import '../css/Options.css';

function Options() {
    const [numPeople, setNumPeople] = useState(2);
    // <input type="number" class="NumPeopleForm" placeholder="2-4 people" min="2" max="4" required></input> // for reference
    // return (2 <= parseInt(candValue) <= 4) ? candValue : numPeople; // for reference

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
                <Display numPeople={numPeople}></Display>
            </div>
        </React.Fragment>
    );
}


export default Options;