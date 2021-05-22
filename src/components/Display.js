import React, { useState } from 'react';
import '../css/Display.css';

function Display(props) {
    return (
        <React.Fragment>
            <div>
                {props.numPeople}
            </div>
        </React.Fragment>
    );
}

export default Display;