import React, { useState } from 'react';
import Options from './Options.js';
import Display from './Display.js';
import Simulation from './Simulation.js';
import '../css/Body.css';

function Body() {
    const [numPeople, setNumPeople] = useState(2);
    const [inputState, setInputState] = useState(new Map()); // global state for all input data
    const [showSim, setShowSim] = useState(false); // should be default false

    var simInstructions = []

    if (showSim) {
        // Running Gale Shapley Algorithm
        // Initialize rank structure
        var rank = {}
        for (var i = 1; i <= numPeople; i++) {
            rank[inputState["M" + i]] = {}
            rank[inputState["W" + i]] = {}

            for (var j = 1; j <= numPeople; j++) {
                rank[inputState["M" + i]][inputState["M" + i + "-P" + j]] = j
                rank[inputState["W" + i]][inputState["W" + i + "-P" + j]] = j
            }
        }

        // A convenient dictionary for colors
        var color = {}
        color[inputState["W" + 1]] = '#FF9100'
        color[inputState["W" + 2]] = '#2B00FF'
        color[inputState["W" + 3]] = '#00FF3C'
        color[inputState["W" + 4]] = '#FF0000'

        // Maps from Person to ID
        var reversePersonIndex = {}
        for (var i = 1; i <= numPeople; i++) {
            reversePersonIndex[inputState["M" + i]] = "M" + i
            reversePersonIndex[inputState["W" + i]] = "W" + i
        }

        // Maps from Preference to ID given Person
        var reversePrefIndex = {}
        for (var i = 1; i <= numPeople; i++) {
            reversePrefIndex[inputState["M" + i]] = {}
            reversePrefIndex[inputState["W" + i]] = {}

            for (var j = 1; j <= numPeople; j++) {
                reversePrefIndex[inputState["M" + i]][inputState["M" + i + "-P" + j]] = "M" + i + "-P" + j
                reversePrefIndex[inputState["W" + i]][inputState["W" + i + "-P" + j]] = "W" + i + "-P" + j
            }
        }
        console.log(reversePrefIndex)

        // Maps a person's current preferences
        var personToPref = {}
        for (var i = 1; i <= numPeople; i++) {
            personToPref[inputState["M" + i]] = []
            personToPref[inputState["W" + i]] = []

            for (var j = 1; j <= numPeople; j++) {
                personToPref[inputState["M" + i]].push(inputState["M" + i + "-P" + j])
                personToPref[inputState["W" + i]].push(inputState["W" + i + "-P" + j])
            }
        }

        // Map of matches (woman -> man)
        var matches = {}

        // Initialize queue
        var queue = []
        for (var i = 1; i <= numPeople; i++) {
            queue.push(inputState["M" + i])
        }

        const isPreferred = (woman, man1, man2) => {
            return rank[woman][man1] < rank[woman][man2]
        }

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

        // Push "Flush Preferences"
        simInstructions.push(
            {
                type: "Flush Preferences"
            }
        )
    }

    return (
        <React.Fragment>
            <div>
                {!showSim &&
                    <Options numPeople={numPeople} setNumPeople={setNumPeople}/>
                }
                {!showSim && <Display numPeople={numPeople} inputState={inputState} setInputState={setInputState} setShowSim={setShowSim}></Display>}
                {showSim && <Simulation numPeople={numPeople} inputState={inputState} 
                                        simInstructions={simInstructions} setShowSim={setShowSim}>
                            </Simulation>}
            </div>
        </React.Fragment>
    );
}


export default Body;