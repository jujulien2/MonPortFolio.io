import React, { useState } from 'react';
import '../../styles/Header/Header.css'
const Header = (props) => {

    return (
        <div className='headerWrapper'>
            <div className='presentation'>
                <a href="/">
                    <p>{props.navOne}</p>
                </a>
            </div>
            <div className='presentation'>
                <a href="/Projects">
                    <p>{props.navTwo}</p>
                </a>
            </div>
            <div className='presentation'>
                <a href="/Skills">
                    <p>{props.navThree}</p>

                </a>
            </div>
        </div>
    );
};

export default Header;