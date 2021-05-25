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

    // const simInstructions = [
    //     {
    //         type: "Bold Preference", id: "M1-P1"
    //     },
    //     {
    //         type: "Move In", man: "M1", woman: "W1"
    //     },
    //     {
    //         type: "Flash Center", color: "#80F7A8"
    //     },
    //     {
    //         type: "Move Out", man: "M1", woman: "W1", color: "#FF5F5F"
    //     },
    //     {
    //         type: "Free Preference", id: "M1-P1"
    //     },

    //     {
    //         type: "Bold Preference", id: "M2-P1"
    //     },
    //     {
    //         type: "Move In", man: "M2", woman: "W1"
    //     },
    //     {
    //         type: "Flash Center", color: "green"
    //     },
    //     {
    //         type: "Move Out", man: "M2", woman: "W1", color: "#FF5F5F"
    //     },
    //     {
    //         type: "Free Person", id: "M1"
    //     },
    //     {
    //         type: "Free Preference", id: "M2-P1"
    //     },

    //     {
    //         type: "Bold Preference", id: "M1-P2"
    //     },
    //     {
    //         type: "Move In", man: "M1", woman: "W2"
    //     },
    //     {
    //         type: "Flash Center", color: "green"
    //     },
    //     {
    //         type: "Move Out", man: "M1", woman: "W2", color: "#6A5FFF"
    //     },
    //     {
    //         type: "Free Preference", id: "M1-P2"
    //     },
    // ]

    var tempInputState = {
        'M1': 'a',
        'M2': 'b',
        'W1': 'c',
        'W2': 'd',

        'M1-P1': 'c',
        'M1-P2': 'd',
        'M2-P1': 'c',
        'M2-P2': 'd',
        'W1-P1': 'a',
        'W1-P2': 'b',
        'W2-P1': 'a',
        'W2-P2': 'b',
    }

    tempInputState = inputState; // this shouldn't be here; just testing


    // Running Gale Shapley Algorithm
    // Initialize rank structure
    var rank = {}
    for (var i = 1; i <= numPeople; i++) {
        rank[tempInputState["M" + i]] = {}
        rank[tempInputState["W" + i]] = {}

        for (var j = 1; j <= numPeople; j++) {
            rank[tempInputState["M" + i]][tempInputState["M" + i + "-P" + j]] = j
            rank[tempInputState["W" + i]][tempInputState["W" + i + "-P" + j]] = j
        }
    }

    // A convenient dictionary for colors
    var color = {}
    color[tempInputState["W" + 1]] = '#FF9100'
    color[tempInputState["W" + 2]] = '#2B00FF'
    color[tempInputState["W" + 3]] = '#00FF3C'
    color[tempInputState["W" + 4]] = '#FF0000'

    // Maps from Person to ID
    var reversePersonIndex = {}
    for (var i = 1; i <= numPeople; i++) {
        reversePersonIndex[tempInputState["M" + i]] = "M" + i
        reversePersonIndex[tempInputState["W" + i]] = "W" + i
    }

    // Maps from Preference to ID given Person
    var reversePrefIndex = {}
    for (var i = 1; i <= numPeople; i++) {
        reversePrefIndex[tempInputState["M" + i]] = {}
        reversePrefIndex[tempInputState["W" + i]] = {}

        for (var j = 1; j <= numPeople; j++) {
            reversePrefIndex[tempInputState["M" + i]][tempInputState["M" + i + "-P" + j]] = "M" + i + "-P" + j
            reversePrefIndex[tempInputState["W" + i]][tempInputState["W" + i + "-P" + j]] = "W" + i + "-P" + j
        }
    }
    console.log(reversePrefIndex)

    // Maps a person's current preferences
    var personToPref = {}
    for (var i = 1; i <= numPeople; i++) {
        personToPref[tempInputState["M" + i]] = []
        personToPref[tempInputState["W" + i]] = []

        for (var j = 1; j <= numPeople; j++) {
            personToPref[tempInputState["M" + i]].push(tempInputState["M" + i + "-P" + j])
            personToPref[tempInputState["W" + i]].push(tempInputState["W" + i + "-P" + j])
        }
    }

    // Map of matches (woman -> man)
    var matches = {}

    // Initialize queue
    var queue = []
    for (var i = 1; i <= numPeople; i++) {
        queue.push(tempInputState["M" + i])
    }

    const isPreferred = (woman, man1, man2) => {
        return rank[woman][man1] < rank[woman][man2]
    }

    const simInstructions = []
    while (queue.length > 0) {
        var currentMan = queue.shift() // #Ex: "Aaron"
        var proposedWoman = personToPref[currentMan].shift() // Ex: "Chloe"

        var prefId = reversePrefIndex[currentMan][proposedWoman]
        var manId = reversePersonIndex[currentMan]
        var womanId = reversePersonIndex[proposedWoman]

        // Push "Bold Preference"
        simInstructions.push(
            {
                type: "Bold Preference",
                id: prefId
            }
        )

        // Push "Move In"
        simInstructions.push(
            {
                type: "Move In",
                manId: manId,
                womanId: womanId
            }
        )

        if (!(proposedWoman in matches)) { // Woman was free initially
            matches[proposedWoman] = currentMan

            // Push "Flash Center"
            simInstructions.push(
                {
                    type: "Flash Center",
                    color: "#80F7A8"
                }
            )
            
            // Push "Move Out"
            simInstructions.push(
                {
                    type: "Move Out",
                    manId: manId,
                    womanId: womanId,
                    color: color[proposedWoman]
                }
            )
        } else {
            var rivalPartner = matches[proposedWoman]
            var rivalId = reversePersonIndex[rivalPartner]

            if (isPreferred(proposedWoman, currentMan, rivalPartner)) {
                matches[proposedWoman] = currentMan
                // marry currentMan and proposedWoman
                // free rivalPartner
                queue.push(rivalPartner)

                // Push "Flash Center"
                simInstructions.push(
                    {
                        type: "Flash Center",
                        color: "#80F7A8"
                    }
                )

                // Push "Move Out"
                simInstructions.push(
                    {
                        type: "Move Out",
                        manId: manId,
                        womanId: womanId,
                        color: color[proposedWoman]
                    }
                )

                // Push "Free Person"
                console.log(rivalId)
                simInstructions.push(
                    {
                        type: "Free Person",
                        id: rivalId
                    }
                )
            } else {
                // match unsuccessful: currentMan rejected

                console.log("hi")
                // Push "Flash Center"
                simInstructions.push(
                    {
                        type: "Flash Center",
                        color: "#F76D6D"
                    }
                )

                // Push "Move Out"
                simInstructions.push(
                    {
                        type: "Move Out",
                        manId: manId,
                        womanId: womanId,
                        color: "none"
                    }
                )
                
                queue.push(currentMan)
            }
        }

        // Push "Free Preference"
        simInstructions.push(
            {
                type: "Free Preference",
                id: prefId
            }
        )
    }

    console.log(JSON.stringify(personToPref))

    return (
        <React.Fragment>
            <div>
                <input type="number" class="NumPeopleForm" placeholder="2-4 people"
                    min="2" max="4" required onChange={e => setNumPeople(condUpdate(e.target.value))}>
                </input>
                <p>Number of people: {numPeople} </p>
                {!showSim && <Display numPeople={numPeople} inputState={inputState} setInputState={setInputState} setShowSim={setShowSim}></Display>}
                {showSim && <Simulation numPeople={numPeople} inputState={tempInputState} simInstructions={simInstructions}></Simulation>}
            </div>
        </React.Fragment>
    );
}


export default Options;