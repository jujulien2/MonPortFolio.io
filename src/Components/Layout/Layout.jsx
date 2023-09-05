import React from 'react';
import '../../styles/Layout/Layout.css'
const Layout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Layout;