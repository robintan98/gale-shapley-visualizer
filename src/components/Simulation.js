import React, { useRef, useState, useEffect } from 'react';
import Control from './Control.js';
import '../css/Simulation.css';
import ReactAnime from 'react-animejs'

const { Anime } = ReactAnime;

function Simulation(props) {

    const centerRef = useRef(null);

    const [centerCoordLeftX, setCenterCoordLeftX] = useState();
    const [centerCoordRightX, setCenterCoordRightX] = useState();
    const [centerCoordY, setCenterCoordY] = useState();

    const M1Ref = useRef(null);
    const W1Ref = useRef(null);
    const M2Ref = useRef(null);
    const W2Ref = useRef(null);
    const M3Ref = useRef(null);
    const W3Ref = useRef(null);
    const M4Ref = useRef(null);
    const W4Ref = useRef(null);

    const [M1CoordX, setM1CoordX] = useState();
    const [M1CoordY, setM1CoordY] = useState();
    const [M2CoordX, setM2CoordX] = useState();
    const [M2CoordY, setM2CoordY] = useState();
    const [M3CoordX, setM3CoordX] = useState();
    const [M3CoordY, setM3CoordY] = useState();
    const [M4CoordX, setM4CoordX] = useState();
    const [M4CoordY, setM4CoordY] = useState();

    const [W1CoordX, setW1CoordX] = useState();
    const [W1CoordY, setW1CoordY] = useState();
    const [W2CoordX, setW2CoordX] = useState();
    const [W2CoordY, setW2CoordY] = useState();
    const [W3CoordX, setW3CoordX] = useState();
    const [W3CoordY, setW3CoordY] = useState();
    const [W4CoordX, setW4CoordX] = useState();
    const [W4CoordY, setW4CoordY] = useState();

    const idToCoordX = {
        "M1": M1CoordX,
        "M2": M2CoordX,
        "M3": M3CoordX,
        "M4": M4CoordX,
        "W1": W1CoordX,
        "W2": W2CoordX,
        "W3": W3CoordX,
        "W4": W4CoordX,
    }

    const idToCoordY = {
        "M1": M1CoordY,
        "M2": M2CoordY,
        "M3": M3CoordY,
        "M4": M4CoordY,
        "W1": W1CoordY,
        "W2": W2CoordY,
        "W3": W3CoordY,
        "W4": W4CoordY,
    }

    const idToRef = {
        "M1": M1Ref,
        "M2": M2Ref,
        "M3": M3Ref,
        "M4": M4Ref,
        "W1": W1Ref,
        "W2": W2Ref,
        "W3": W3Ref,
        "W4": W4Ref,
    }

    const idToSetterX = {
        "M1": setM1CoordX,
        "M2": setM2CoordX,
        "M3": setM3CoordX,
        "M4": setM4CoordX,
        "W1": setW1CoordX,
        "W2": setW2CoordX,
        "W3": setW3CoordX,
        "W4": setW4CoordX,
    }

    const idToSetterY = {
        "M1": setM1CoordY,
        "M2": setM2CoordY,
        "M3": setM3CoordY,
        "M4": setM4CoordY,
        "W1": setW1CoordY,
        "W2": setW2CoordY,
        "W3": setW3CoordY,
        "W4": setW4CoordY,
    }

    const [toggleAnime, setToggleAnime] = useState(false);

    useEffect(() => {
        setCenterCoordLeftX(centerRef.current.getBoundingClientRect().left);
        setCenterCoordRightX(centerRef.current.getBoundingClientRect().right);
        setCenterCoordY((centerRef.current.getBoundingClientRect().top + centerRef.current.getBoundingClientRect().bottom) / 2);

        for (var i = 1; i <= props.numPeople; i++) {
            const setterMX = idToSetterX["M" + i];
            const setterWX = idToSetterX["W" + i];
            const setterMY = idToSetterY["M" + i];
            const setterWY = idToSetterY["W" + i];

            const mRef = idToRef["M" + i];
            const wRef = idToRef["W" + i];

            setterMX(mRef.current.getBoundingClientRect().left);
            setterWX(wRef.current.getBoundingClientRect().right);

            setterMY(mRef.current.getBoundingClientRect().top);
            setterWY(wRef.current.getBoundingClientRect().top);
        }

        setToggleAnime(true);
    })

    var timeline = [];
    for (const keyframe of props.simInstructions) {
        switch(keyframe.type) {
            case 'Move In':
                timeline.push(
                {
                    targets: "#" + keyframe.manId,
                    translateX: centerCoordLeftX - idToCoordX[keyframe.manId] + 10,
                    translateY: centerCoordY - idToCoordY[keyframe.manId] - 20,
                    delay: 1000,
                    duration: 1000,
                    easing: 'easeInOutSine',
                })

                timeline.push(
                {
                    targets: "#" + keyframe.womanId,
                    translateX: centerCoordRightX - idToCoordX[keyframe.womanId] - 10,
                    translateY: centerCoordY - idToCoordY[keyframe.womanId] - 20,
                    duration: 1000,
                    easing: 'easeInOutSine',
                })
                break;
            case 'Move Out':
                if (keyframe.color == "none") {
                    timeline.push(
                    {
                        targets: "#" + keyframe.womanId,
                        translateX: 0,
                        translateY: 0,
                        duration: 1000,
                        easing: 'easeInOutSine',
                    })
    
                    timeline.push(
                    {
                        targets: "#" + keyframe.manId,
                        translateX: 0,
                        translateY: 0,
                        duration: 1000,
                        easing: 'easeInOutSine',
                    })
                } else {
                    timeline.push(
                    {
                        targets: "#" + keyframe.womanId,
                        translateX: 0,
                        translateY: 0,
                        duration: 1000,
                        easing: 'easeInOutSine',
                        borderColor: keyframe.color,
                    })

                    timeline.push(
                    {
                        targets: "#" + keyframe.manId,
                        translateX: 0,
                        translateY: 0,
                        duration: 1000,
                        easing: 'easeInOutSine',
                        borderColor: keyframe.color,
                    })
                }
                break;
            case 'Flash Center':
                timeline.push(
                {
                    targets: "#Center",
                    backgroundColor: keyframe.color,
                    delay: 1000,
                    duration: 500,
                    easing: 'easeInOutSine',
                })

                timeline.push(
                {
                    targets: "#Center",
                    backgroundColor: '#FFFFFF',
                    duration: 500,
                    easing: 'easeInOutSine',
                })
                break;
            case 'Color Preference':
                timeline.push(
                {
                    targets: "#" + keyframe.id,
                    duration: 500,
                    borderColor: keyframe.color,
                    easing: 'easeInOutSine',
                })
                break;
            case 'Discolor Preference':
                timeline.push(
                {
                    targets: "#" + keyframe.id,
                    duration: 500,
                    borderColor: '#C1C1C1',
                    easing: 'easeInOutSine',
                })
                break;
            case 'Free Preference':
                timeline.push(
                {
                    targets: "#" + keyframe.id,
                    delay: 1000,
                    duration: 500,
                    opacity: 0,
                    easing: 'easeInOutSine',
                })
                break;
            case 'Bold Preference':
                timeline.push(
                {
                    targets: "#" + keyframe.id,
                    delay: 1000,
                    duration: 500,
                    fontWeight: '900',
                    easing: 'easeInOutSine',
                    backgroundColor: '#E5E5E5'
                })
                break;
            case 'Free Person':
                timeline.push(
                {
                    targets: "#" + keyframe.id,
                    easing: 'easeInOutSine',
                    delay: 100,
                    duration: 500,
                    borderColor: '#888888',
                })
                break;
            case 'Flush Preferences':
                timeline.push({delay: 1000})

                for (var i = 1; i <= props.numPeople; i++) {
                    for (var j = 1; j <= props.numPeople; j++) {
                        timeline.push(
                        {
                            targets: "#M" + i + "-P" + j,
                            duration: 100,
                            opacity: 0,
                            easing: 'easeInOutSine',
                        })
                    }

                    for (var j = 1; j <= props.numPeople; j++) {
                        timeline.push(
                        {
                            targets: "#W" + i + "-P" + j,
                            duration: 100,
                            opacity: 0,
                            easing: 'easeInOutSine',
                        })
                    }
                }

                timeline.push(
                    {
                        targets: "#Center",
                        duration: 100,
                        opacity: 0,
                        easing: 'easeInOutSine',
                    })
                break;
            default:
          }
    }

    const leftElems = []
    const rightElems = []
    for (var i = 1; i <= props.numPeople; i++) {
        var leftPreferences = []
        var rightPreferences = []
        for (var j = 1; j <= props.numPeople; j++) {
            leftPreferences.push(
                <div className="LeftPreference">
                    <div type="text" class="PreferenceSimInput" id={"M" + i + "-P" + j}>
                        {props.inputState["M" + i + "-P" + j]}
                    </div>
                </div>
            );

            rightPreferences.push(
                <div className="RightPreference">
                    <div type="text" class="PreferenceSimInput" id={"W" + i + "-P" + j}>
                        {props.inputState["W" + i + "-P" + j]}
                    </div>
                </div>
            );
        }

        leftElems.push(
            <div className="LeftEntryArea">
                <div className="PreferenceArea">
                    {leftPreferences}
                </div>
                <div className="LeftPerson">
                    <div type="text" class="PersonSimInput" id={"M" + i} ref={idToRef["M" + i]}>
                        {props.inputState["M" + i]}
                    </div>
                </div>
            </div>
        );

        rightElems.push(
            <div className="RightEntryArea">
                <div className="RightPerson">
                    <div type="text" class="PersonSimInput" id={"W" + i} ref={idToRef["W" + i]}>
                        {props.inputState["W" + i]}
                    </div>
                </div>
                <div className="PreferenceArea">
                    {rightPreferences}
                </div>
            </div>
        );
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

    return (
        <React.Fragment>
            {/* {JSON.stringify(timeline)} */}
            {toggleAnime && <Anime initial={timeline} control={control} setMeta={setMeta}
                                   animeConfig={{
                                        autoplay: true,
                                        duration: 1500,
                                        easing: "easeInOutSine"
                                        }}
            ></Anime>}
            <div className="LabelArea">
                    <div className="LabelEndColumn">Proposers</div>
                    <div className="LabelMidColumn"></div>
                    <div className="LabelEndColumn">Recipients</div>
                </div>
            <div className="DisplayArea">
                <div className="DisplayLeftColumn">
                    {leftElems}
                </div>
                <div className="DisplayMidColumn">
                    <div id="Center" className="Center" ref={centerRef}></div>
                </div>

                <div className="DisplayRightColumn">
                    {rightElems}
                </div> 
            </div>

            <Control setControl={setControl} meta={meta} setInputState={props.setInputState} setShowSim={props.setShowSim}/>
        </React.Fragment>
    );
}


export default Simulation;

