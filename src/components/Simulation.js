import React, { useRef, useState, useEffect } from 'react';
import '../css/Simulation.css';
import ReactAnime from 'react-animejs'
// import Anime from 'react-anime';

const {Anime, stagger} = ReactAnime;

function Simulation(props) {

    const centerRef = useRef(null);
    const M1Ref = useRef(null);
    const W1Ref = useRef(null);

    const M2Ref = useRef(null);
    const W2Ref = useRef(null);

    const [centerCoordLeftX, setCenterCoordLeftX] = useState();
    const [centerCoordRightX, setCenterCoordRightX] = useState();
    const [centerCoordY, setCenterCoordY] = useState();

    const [M1CoordX, setM1CoordX] = useState();
    const [M1CoordY, setM1CoordY] = useState();
    const [W1CoordX, setW1CoordX] = useState();
    const [W1CoordY, setW1CoordY] = useState();

    const [M2CoordX, setM2CoordX] = useState();
    const [M2CoordY, setM2CoordY] = useState();
    const [W2CoordX, setW2CoordX] = useState();
    const [W2CoordY, setW2CoordY] = useState();
    const [toggleAnime, setToggleAnime] = useState(false);

    useEffect(() => {
        setCenterCoordLeftX(centerRef.current.getBoundingClientRect().left);
        setCenterCoordRightX(centerRef.current.getBoundingClientRect().right);
        setCenterCoordY((centerRef.current.getBoundingClientRect().top + centerRef.current.getBoundingClientRect().bottom) / 2);

        setM1CoordX(M1Ref.current.getBoundingClientRect().left);
        setM1CoordY(M1Ref.current.getBoundingClientRect().top);
        setW1CoordX(W1Ref.current.getBoundingClientRect().right);
        setW1CoordY(W1Ref.current.getBoundingClientRect().top);

        setM2CoordX(M2Ref.current.getBoundingClientRect().left);
        setM2CoordY(M2Ref.current.getBoundingClientRect().top);
        setW2CoordX(W2Ref.current.getBoundingClientRect().right);
        setW2CoordY(W2Ref.current.getBoundingClientRect().top);

        setToggleAnime(true);
    })

    var keyframes = [
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
    ];

    return (
        <React.Fragment>
            {toggleAnime && <Anime initial={keyframes}></Anime>}
            <div className="DisplayArea">
                <div className="DisplayLeftColumn">
                    <div className="LeftEntryArea">
                        {/* <div className="PreferenceArea">
                            {preferenceElems}
                        </div> */}
                        <div className="LeftPerson">
                            <div type="text" class="PersonInput" maxlength="6" id={"M" + 1} required 
                                placeholder={"Man " + 1} ref={M1Ref}>Man 1</div>
                        </div>
                    </div>
                    <div className="LeftEntryArea">
                        {/* <div className="PreferenceArea">
                            {preferenceElems}
                        </div> */}
                        <div className="LeftPerson">
                            <div type="text" class="PersonInput" maxlength="6" id={"M" + 2} required 
                                placeholder={"Man " + 2} ref={M2Ref}>Man 2</div>
                        </div>
                    </div>
                </div>

                <div className="DisplayMidColumn">
                    <div id="Center" className="CenterCircle" ref={centerRef}></div>
                </div>

                <div className="DisplayRightColumn">
                    <div className="RightEntryArea">
                        {/* <div className="PreferenceArea">
                            {preferenceElems}
                        </div> */}
                        <div className="RightPerson">
                            <div type="text" class="PersonInput" maxlength="6" id={"W" + 1} required 
                                placeholder={"Lady " + 1} ref={W1Ref}>Lady 1</div>
                        </div>
                    </div>
                    <div className="RightEntryArea">
                        {/* <div className="PreferenceArea">
                            {preferenceElems}
                        </div> */}
                        <div className="RightPerson">
                            <div type="text" class="PersonInput" maxlength="6" id={"W" + 2} required 
                                placeholder={"Lady " + 2} ref={W2Ref}>Lady 2</div>
                        </div>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    );
}


export default Simulation;
