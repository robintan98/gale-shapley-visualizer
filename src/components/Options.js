import React from 'react';
import '../css/Options.css';

function Options(props) {
    const condUpdate = (numPeople, candValue) => {
        return (candValue == 2 || candValue == 3 || candValue == 4) ? candValue : numPeople;
    }
    
    const handleClick = () => {
        props.setShowAbout(true)
    }
    return (
        <React.Fragment>
            <div className="OptionsArea">
                <div className="EndColumnArea"></div>
                <div className="MidColumnArea">
                    Number of Matches:
                    <input type="number" className="NumPeopleInput" placeholder="2-4 matches"
                            min="2" max="4" required onChange={e => props.setNumPeople(condUpdate(props.numPeople, e.target.value))}>
                    </input>
                </div>
                <div class="EndColumnArea">
                    <button class="AboutButton" onClick={handleClick}>About</button>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Options;