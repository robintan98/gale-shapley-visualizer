import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <React.Fragment>
        <h1><div className="Title">
            Gale-Shapley Visualizer
        </div></h1>
        <div className="Subtitle">
            A stable matching algorithm animated for the human eye
        </div>
    </React.Fragment>
  );
}

export default Header;