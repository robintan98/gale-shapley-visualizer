import React, { useRef, useState, useEffect } from 'react';
import '../css/Control.css';

function Control(props) {

    const handleGoBack = () => {
        props.setInputState({})
        props.setShowSim(false)
    }

    // controller state
    const [control, setControl] = useState(null);

    // meta state
    const [meta, setMeta] = useState({
        control: control,
        progress: 100,
        currentTime: 0,
        duration: 0
    });

    const [showPlay, setShowPlay] = useState(false);

    return (
        <React.Fragment>
            <div className="BottomSimArea">
                <div className="BottomLeftSimArea">
                    {showPlay &&
                    <div
                        className="PlayButton"
                        onClick={() => {
                        setControl("play");
                        setShowPlay(false);
                        }}>Play</div>
                    }
                    {!showPlay &&
                    <div
                        className="PauseButton"
                        onClick={() => {
                        setControl("pause");
                        setShowPlay(true);
                        }}>Pause</div>
                    }

                    <div
                        className="RestartButton"
                        onClick={() => {
                        setControl("restart");
                        }}>Restart</div>
                    <div
                        className="SkipButton"
                        onClick={() => {
                        setControl(["seek", 100]);
                        setShowPlay(true);
                        }}>Skip to End</div>
                </div>

                <div className="BottomRightSimArea">
                    <button className="GoBackButton" onClick={() => handleGoBack()}>
                        Go Back
                    </button>
                </div>
            </div>
            <div className="SliderArea">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={meta.progress || 0}
                    className="slider"
                    onChange={e => setControl(["seek", e.currentTarget.value])}>
                </input>
                <div className='SliderNote'>
                    Pause to Scrub
                </div>
            </div>
        </React.Fragment>
    );
}


export default Control;

