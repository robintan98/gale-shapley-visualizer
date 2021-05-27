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
                                Huge credit goes to the creators of the <a target="_blank" href="https://reactjs.org/">React.js</a> framework
                                and the incredible animation engine 
                                known as <a target="_blank" href="https://animejs.com/">anime.js</a>.
                                Special thanks to "jmdisuanco" for creating <a target="_blank" href="https://www.npmjs.com/package/react-animejs">this wrapper library</a> which
                                allowed me to easily create these animations.
                                <br /> <br />
                                Please email <a href = "mailto: robintan@wharton.upenn.edu">robintan@wharton.upenn.edu</a> for any suggestions to improve this tool.
                            </div>
                        </div>
                    </div>
                    <div className="NoteWrapperArea">
                        <div className="NotePaper">
                            <div className="NotePaperTitle">
                                The Stable Matching Problem and the Gale-Shapley Algorithm
                            </div>
                            <hr className="NotePaperLine" />
                            <div className="NotePaperBody">
                                Given a set of <em>n</em> proposers (former. "men") and recipients (former. "women"), each with their own preferences,
                                 our goal is to find an assignment such that:
                                <ul>
                                    <li>Each proposer ends up with exactly one recipient.</li>
                                    <li>No pair of people (not already partners) would leave their current partners to engage with each other.</li>
                                </ul>
                                This is known as a <em>stable matching</em>. Its applications range from economics and networks to medical school assignments and, yes, romance.
                                <br /> <br />
                                The Gale-Shapley Algorithm proposes a greedy solution to this. We process proposers arbitrarily and go down each proposer's list of 
                                preferences for recipients. In each round, if a recipient is free, this <em>(proposer, recipient)</em> pair becomes temporarily "engaged". If the recipient is already engaged,
                                it will leave (and thus free) its current partner only if it prefers this proposer more. This process continues until 
                                all <em>n</em> proposers and recipients are engaged with one other person.
                                <br /> <br />
                                It is proven to produce a unique and optimal solution. It runs in quadratic time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;