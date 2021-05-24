import React from 'react';
import '../css/Simulation.css';
import ReactAnime from 'react-animejs'
// import Anime from 'react-anime';

const {Anime, stagger} = ReactAnime;

function Simulation(props) {

    // const keyframes = [
    //     {
    //     translateX: 50, translateY: 50, duration: 1000, delay: 1000, easing: 'easeInOutSine'
    //     },
    //     {
    //     translateX: 0, translateY: 0, duration: 1000, delay: 1000, easing: 'easeInOutSine'
    //     },
    //     {
    //     translateX: 50, translateY: 50, duration: 1000, delay: 1000, easing: 'easeInOutSine'
    //     },
    //     {
    //     translateX: 0, translateY: 0, duration: 1000, delay: 1000, easing: 'easeInOutSine'
    //     },
    //     {border: '1px solid red', duration: 1000},
    //     {opacity: 0, duration: 1000}
    // ];

    return (
        <React.Fragment>
            {/* <Anime
            initial={[
                {
                targets: "#tester",
                keyframes: keyframes,
                // easing:'spring',
                // duration: 3500,
                // loop: true
                }
            ]}
            ><div id="tester">tester</div>
            </Anime> */}
            <Anime
      initial={[
        { //1st segment
          targets: "#a",
          translateX: 250,
          delay: 1000,
          direction: "alternate"
        },
        { //2nd
          targets: "#b",
          translateX: 250,
          delay: 1000
        },
        { //3rd
          targets: "#c",
          translateX: 250,
          delay: 1000
        }
      ]}
    ></Anime>
    <div id="a">a</div>
    <div id="b">b</div>
    <div id="c">c</div>
            
        </React.Fragment>
    );

    // var centerCircleElem = Document.querySelectorAll('./CenterCircle'); 
    // <Anime targets='.CenterCircle' translateX={500} translateY={100} borderRadius={50} delay={3000} duration={1000} easing='easeInOutQuad' direction='alternate'>
    //     <nav/>sup
    // </Anime>

    // <Anime targets='#tester' translateX={[500, 0]}> // with react-anime
    //             <div>hi</div>
    //         </Anime>
    
    
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