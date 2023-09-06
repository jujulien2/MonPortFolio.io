import React from 'react';
import '../../styles/Header/Header.css'
const Header = () => {
    return (
        <div className='headerWrapper'>
            <div className='presentation'>
                <a href="">
                    <p> Présentation</p>
                </a>
            </div>
            <div className='presentation'>
                <a href="">
                    <p> Projets</p>
                </a>
            </div>
            <div className='presentation'>
                <a href="">
                    <p>Compétences</p>

                </a>
            </div>
        </div>
    );
};

export default Header;