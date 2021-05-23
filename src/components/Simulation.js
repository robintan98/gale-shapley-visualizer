import React from 'react';
import Anime from 'react-anime';
import animejs from "animejs";
import '../css/Simulation.css';

function Simulation(props) {
    let colors = [ 'blue', 'green', 'red' ];

    return (
        <Anime opacity={[0, 1]} translateX={[64,0]} delay={1000}>
            <nav/>sup
        </Anime>
    );
}


export default Simulation;