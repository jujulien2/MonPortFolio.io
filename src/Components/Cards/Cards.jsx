import React from 'react';
import '../../styles/ProjectsPageCss/Cards/Cards.css'



const Cards = (props) => {
    return (
        <div className={props.className}>
            <div className='openProject'>
                <i className="fa-solid fa-arrow-right"></i>
                <button onClick={props.onClick}>En savoir plus ici !</button>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img className='imageCard' src={props.image}></img>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Cards;
