import React from 'react';
import '../../styles/BigTitle/BigTitle.css'
const BigTitle = (props) => {
    return (

        <div className={props.className}>
            <hr />
            <h1>{props.title}</h1>
            <hr />
        </div>

    );
};

export default BigTitle;