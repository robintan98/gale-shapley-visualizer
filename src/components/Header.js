import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <React.Fragment>
        <div className="Title">
            Gale Shapley Simulator
        </div>
        <div className="SubTitle">
            A stable matching algorithm visualized for the human eye
        </div>
    </React.Fragment>
  );
}

export default Header;