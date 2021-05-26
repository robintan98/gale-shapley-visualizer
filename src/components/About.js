import React from 'react';
import '../css/About.css';

function About(props) {

    const handleClick = () => {
        props.setShowAbout(false);
        props.setInputState({});
    }

    return (
        <React.Fragment>
            <div className="AboutArea">
                <div className="GoBackArea">
                    <button className="GoBackButton" onClick={handleClick}>Go Back</button>
                </div>
                <div className="NoteArea">
                    <div className="NoteWrapperArea">
                        <div className="NotePaper">
                            <div className="NotePaperTitle">
                                Introduction
                            </div>
                            <hr className="NotePaperLine" />
                            <div className="NotePaperBody">
                                This is a visualization tool designed to help you to better understand the stable matching algorithm
                                known as the Gale-Shapley Algorithm (1962). I created this to aid students of the University of 
                                Pennsylvania, but really it is free for everyone to experiment with.
                                <br /> <br />
                                Using this visualizer is incredibly simple: just enter the number of matches, along with the list 
                                of Proposers, Recipients, and each person's Preferences, then take advantage of 
                                this tool's powerful animation and playback capabilities.
                                <br /> <br />
                                Huge credit goes to the creators of the React.js framework and the incredible animation engine 
                                known as anime.js.
                            </div>
                        </div>
                    </div>
                    <div className="NoteWrapperArea">
                        <div className="NotePaper">
                            <div className="NotePaperTitle">
                                hi
                            </div>
                            <hr className="NotePaperLine" />
                            <div className="NotePaperBody">
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;