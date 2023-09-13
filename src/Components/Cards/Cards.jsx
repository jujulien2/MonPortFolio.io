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
            <div className='underImageCard'>
                <h1>{props.title}</h1>
                <img className='openClassRoomLogo' src={props.logoCard}></img>
            </div>
        </div>
    );
};

export default Cards;
