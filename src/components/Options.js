import React from 'react';
import '../css/Options.css';

const condUpdate = (numPeople, candValue) => {
    return (candValue == 2 || candValue == 3 || candValue == 4) ? candValue : numPeople;
}

function Options(props) {
    return (
        <React.Fragment>
            <div className="OptionsArea">
                <div className="ColumnArea"></div>
                <div className="ColumnArea">
                    Number of Matches:
                    <input type="number" className="NumPeopleButton" placeholder="2-4 matches"
                            min="2" max="4" required onChange={e => props.setNumPeople(condUpdate(props.numPeople, e.target.value))}>
                    </input>
                </div>
                <div class="ColumnArea">
                    <button class="AboutButton">About</button>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Options;