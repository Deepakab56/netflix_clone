import React from 'react';
import Signup from '../Auth/Signup';
import background from '../assets/backgorund.png'

function Header(props) {
    return (
        <div>
             <div>
            <div className="position-relative vh-100">
                <img className="header-img" src={background} alt="" />

               <Signup/>

                <div className="header-vignette"></div>
                <div className="header-bottom-vignette"></div>
            </div>
        </div>
        </div>
    );
}

export default Header;