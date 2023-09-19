import React from 'react';
import '../../styles/BigTitle/BigTitle.css'
const BigTitle = (props) => {
    return (

        <div className={props.className}>
            <div>
                <hr />
                <h1>{props.title}</h1>
                <hr />
            </div>
            <div><i className={props.icone}></i></div>
        </div>

    );
};

export default BigTitle;