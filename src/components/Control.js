import React, { useState } from 'react';
import '../css/Control.css';

function Control(props) {

    const handleGoBack = () => {
        props.setInputState({})
        props.setShowSim(false)
    }

    const [isPlay, setIsPlay] = useState(true);

    return (
        <React.Fragment>
            <div className="BottomSimArea">
                <div className="BottomLeftSimArea">
                    {!isPlay && // play button shows => not playing right now
                    <div
                        className="PlayButton"
                        onClick={() => {
                        props.setControl("play");
                        setIsPlay(true); 
                        }}>Play</div>
                    }
                    {isPlay && // pause button shows => playing right now
                    <div
                        className="PauseButton"
                        onClick={() => {
                        props.setControl("pause");
                        setIsPlay(false);
                        }}>Pause</div>
                    }

                    <div
                        className="RestartButton"
                        onClick={() => {
                        props.setControl("restart");
                        setIsPlay(true);
                        }}>Restart</div>
                    <div
                        className="SkipButton"
                        onClick={() => {
                        props.setControl(["seek", 100]);
                        setIsPlay(false);
                        }}>Skip to End</div>
                </div>

                <div className="BottomRightSimArea">
                    <button className="GoBackSimButton" onClick={() => handleGoBack()}>
                        Go Back
                    </button>
                </div>
            </div>
            <div className="SliderArea">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={props.meta.progress || 0}
                    className="slider"
                    onChange={e => props.setControl(["seek", e.currentTarget.value])}>
                </input>
                <div className='SliderNote'>
                    Pause to Scrub
                    <br />
                    and Restart
                </div>
            </div>
        </React.Fragment>
    );
}


export default Control;

