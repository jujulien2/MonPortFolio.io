import React from 'react';
import '../../styles/Layout/Layout.css'
import Header from '../Header/Header';
const Layout = (props) => {
    return (
        <div className='background'>
            <div className='containWrapper' >
                <Header />
                {props.children}
            </div>
        </div>
    );
};

export default Layout;