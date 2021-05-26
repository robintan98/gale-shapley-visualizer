import React from 'react';
import '../css/Options.css';

function Options(props) {
    const condUpdate = (numMatches, candValue) => {
        return (candValue == 2 || candValue == 3 || candValue == 4) ? candValue : numMatches;
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
                    <input type="number" className="NumMatchesInput" placeholder="2-4 matches"
                            min="2" max="4" required onChange={e => props.setNumMatches(condUpdate(props.numMatches, e.target.value))}>
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