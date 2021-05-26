import React from 'react';
import '../css/Footer.css';

function Header() {
  return (
    <React.Fragment>
        <div className="FooterArea">
            <div>
                <hr className="FooterLine"/>
                <div className="FooterNote">
                    Created by Robin Tan using <a target="_blank" href="https://reactjs.org/">React.js</a> and <a target="_blank" href="https://animejs.com/">anime.js</a>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Header;