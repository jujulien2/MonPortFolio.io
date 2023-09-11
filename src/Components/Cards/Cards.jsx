import React from 'react';
import '../../styles/ProjectsPageCss/Cards/Cards.css'
import Modal from '../Modal/Modal';



const Cards = (props) => {
    return (
        <div className={props.className}>
            <div className='openProject'>
                <i className="fa-solid fa-arrow-right"></i>
                <button onClick={props.onClick}>En savoir plus ici !</button>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img src={props.image}></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Cards;
