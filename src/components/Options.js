import React, { useState } from 'react';
import Display from './Display.js';
import Simulation from './Simulation.js';
import '../css/Options.css';

function Options() {
    const [numPeople, setNumPeople] = useState(2);
    const [inputState, setInputState] = useState(new Map()); // global state for all input data
    const [showSim, setShowSim] = useState(true); // should be default false

    const condUpdate = (candValue) => {
        return (candValue == 2 || candValue == 3 || candValue == 4) ? candValue : numPeople;
    }

    /*
    {
            targets: "#M1-P1",
            delay: 1000,
            duration: 500,
            fontWeight: '900',
            easing: 'easeInOutSine',
            backgroundColor: '#E5E5E5'
        },

        {
            targets: "#M1",
            translateX: centerCoordLeftX - M1CoordX + 10,
            translateY: centerCoordY - M1CoordY - 20,
            delay: 1000,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W1",
            translateX: centerCoordRightX - W1CoordX - 10,
            translateY: centerCoordY - W1CoordY - 20,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#80F7A8',
            delay: 1000,
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#FFFFFF',
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W1",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
            borderColor: '#FF5F5F',
        },
        {
            targets: "#M1",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
            borderColor: '#FF5F5F',
        },
        {
            targets: "#M1-P1",
            delay: 1000,
            duration: 500,
            opacity: 0,
            easing: 'easeInOutSine',
        },



        {
            targets: "#M2",
            translateX: centerCoordLeftX - M2CoordX + 10,
            translateY: centerCoordY - M2CoordY - 20,
            delay: 1000,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W1",
            translateX: centerCoordRightX - W1CoordX - 10,
            translateY: centerCoordY - W1CoordY - 20,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#80F7A8',
            delay: 1000,
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#FFFFFF',
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W1",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
        },
        {
            targets: "#M2",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
            borderColor: '#FF5F5F',
        },

        {
            targets: "#M1",
            easing: 'easeInOutSine',
            borderColor: '#C1C1C1',
        },

        {
            targets: "#M1",
            translateX: centerCoordLeftX - M1CoordX + 10,
            translateY: centerCoordY - M1CoordY - 20,
            delay: 1000,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W2",
            translateX: centerCoordRightX - W2CoordX - 10,
            translateY: centerCoordY - W2CoordY - 20,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#80F7A8',
            delay: 1000,
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#Center",
            backgroundColor: '#FFFFFF',
            duration: 500,
            easing: 'easeInOutSine',
        },
        {
            targets: "#W2",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
            borderColor: '#6A5FFF'
        },
        {
            targets: "#M1",
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine',
            borderColor: '#6A5FFF'
        },
    */
    

    const simInstructions = [
        {
            type: "Bold Preference", id: "M1-P1"
        },
        {
            type: "Move In", man: "M1", woman: "W1"
        },
        {
            type: "Flash Center", color: "green"
        },
        {
            type: "Move Out", man: "M1", woman: "W1", color: "#80F7A8"
        },
        {
            type: "Free Preference", id: "M1-P1"
        },

        {
            type: "Bold Preference", id: "M2-P1"
        },
        {
            type: "Move In", man: "M2", woman: "W1"
        },
        {
            type: "Flash Center", color: "green"
        },
        {
            type: "Move Out", man: "M2", woman: "W1", color: "#80F7A8"
        },
        {
            type: "Free Preference", id: "M2-P1"
        },
        {
            type: "Free Person", id: "M1"
        },

        {
            type: "Bold Preference", id: "M1-P2"
        },
        {
            type: "Move In", man: "M1", woman: "W2"
        },
        {
            type: "Flash Center", color: "green"
        },
        {
            type: "Move Out", man: "M1", woman: "W2", color: "#80F7A8"
        },
        {
            type: "Free Preference", id: "M1-P2"
        },
    ]



    return (
        <React.Fragment>
            <div>
                <input type="number" class="NumPeopleForm" placeholder="2-4 people"
                    min="2" max="4" required onChange={e => setNumPeople(condUpdate(e.target.value))}>
                </input>
                <p>Number of people: {numPeople} </p>
                {!showSim && <Display numPeople={numPeople} inputState={inputState} setInputState={setInputState} setShowSim={setShowSim}></Display>}
                {showSim && <Simulation numPeople={numPeople} inputState={inputState} simInstructions={simInstructions}></Simulation>}
            </div>
        </React.Fragment>
    );
}


export default Options;