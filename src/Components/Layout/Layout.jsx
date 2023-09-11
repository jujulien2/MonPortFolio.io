import React, { useState } from 'react';
import '../../styles/Layout/Layout.css'
import Header from '../Header/Header';
const Layout = (props) => {

    return (
        <div className='background'>
            <div className='layoutWrapper' >
                <Header
                    navOne='Présentation'
                    navTwo='Projets'
                    navThree='Compétences'
                />
                {props.children}
            </div>
        </div>
    );
};

export default Layout;