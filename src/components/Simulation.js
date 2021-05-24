import React, { useRef, useState, useEffect } from 'react';
import '../css/Simulation.css';
import ReactAnime from 'react-animejs'
// import Anime from 'react-anime';

const {Anime, stagger} = ReactAnime;

function Simulation(props) {

    const centerRef = useRef(null);
    const M1Ref = useRef(null);

    const [centerCoordX, setCenterCoordX] = useState();
    const [centerCoordY, setCenterCoordY] = useState();
    const [M1CoordX, setM1CoordX] = useState();
    const [M1CoordY, setM1CoordY] = useState();
    const [toggleAnime, setToggleAnime] = useState(false);

    useEffect(() => {
        setCenterCoordX(centerRef.current.getBoundingClientRect().left);
        setCenterCoordY((centerRef.current.getBoundingClientRect().top + centerRef.current.getBoundingClientRect().bottom) / 2);

        setM1CoordX(M1Ref.current.getBoundingClientRect().left);
        setM1CoordY(M1Ref.current.getBoundingClientRect().top);

        setToggleAnime(true);
    })

    var keyframes = [
        { //1st segment
          targets: "#M1",
          translateX: centerCoordX - M1CoordX,
          translateY: centerCoordY - M1CoordY,
          delay: 1000,
          easing: 'easeInOutSine',
        //   border: '1px solid green'
        },
        { //2nd
          targets: "#b",
          translateX: 250,
          delay: 1000,
          easing: 'easeInOutSine'
        },
        { //3rd
          targets: "#c",
          translateX: 250,
          delay: 1000,
          easing: 'easeInOutSine'
        }
    ];

    // const centerCircle = document.querySelector("#CenterCircle");

    return (
        <React.Fragment>
            {/* {console.log(centerCoords)} */}
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
                </div>

                <div className="DisplayMidColumn">
                    <div id="CenterCircle" className="CenterCircle" ref={centerRef}>Truth Booth</div>
                </div>

                <div className="DisplayRightColumn">
                    <div id="a">a</div>
                    <div id="b">b</div>
                    <div id="c">c</div>
                </div> 
            </div>
        </React.Fragment>
    );

    // return (
    //     <React.Fragment>
    //         <Anime initial={keyframes} ></Anime>
    //         <div className="DisplayArea">
    //             <div className="DisplayLeftColumn">
    //                 <div id="a" ref={aRef}>a</div>
    //                 <div id="b">b</div>
    //                 <div id="c">c</div>
    //             </div>

    //             <div className="DisplayMidColumn">
    //                 <div id="CenterCircle" className="CenterCircle" ref={circleRef}>Truth Booth</div>
    //             </div>

    //             <div className="DisplayRightColumn">
    //                 <div id="a">a</div>
    //                 <div id="b">b</div>
    //                 <div id="c">c</div>
    //             </div> 
    //         </div>
    //         {/* <div>{centerCircleX}</div> */}
    //         <div>{aX}</div>
    //         {/* <div>{delta}</div> */}
    //     </React.Fragment>
    // );

//     return (
//         <React.Fragment>
//             <script src="anime.min.js"></script>
//             <div className="DisplayArea">
//                 <div className="DisplayLeftColumn">
//                 <Anime
//   initial={[
//     {
//       targets: "#Box",
//       translateX: 50,
//       easing: "linear"
//     }
//   ]}
// >
//   <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
// </Anime>
// <Anime
//   initial={[
//     {
//       targets: "#Box",
//       keyframes: [
//         {
//           translateX: 50
//         },
//         {
//           translateY: 50
//         },
//         {
//           translateX: 0
//         },
//         {
//           translateY: 0
//         }
//       ],
//       // easing:'spring',
//       duration: 3500,
//       loop: true
//     }
//   ]}
// >
// </Anime>
// <Anime
//       initial={[
//         { //1st segment
//           targets: "#a",
//           translateX: 250,
//           delay: 1000,
//           direction: "alternate"
//         },
//         { //2nd
//           targets: "#b",
//           translateX: 250,
//           delay: 1000
//         },
//         { //3rd
//           targets: "#c",
//           translateX: 250,
//           delay: 1000
//         }
//       ]}
//     ></Anime>
    // <React.Fragment>
    // <div id="a">hi</div><div id="b">hi</div><div id="c">hi</div>
    //             </div>

    //             <div className="DisplayMidColumn">
    //                 <div id="CenterCircle" className="CenterCircle">Truth Booth</div>
    //             </div>

    //             <div className="DisplayRightColumn">
    //             </div>
    //         </div>
    //     </React.Fragment>
    // );
}


export default Simulation;
