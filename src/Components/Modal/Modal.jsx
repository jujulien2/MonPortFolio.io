import React from 'react';
import '../../styles/Modal/Modal.css'

const Modal = (props) => {
    return (
        <div className='modalWrapper'>
            <div className='modal'>
                <div className='closeModal'><i className="fa-solid fa-xmark" onClick={props.closeModal}></i></div>
                <h1>{props.title}</h1>
                <h2>{props.titleTwo}</h2>
                <img src={props.logo} alt="logo kasa project" />
                <p>{props.description}</p>
                <div className='seeProject'>
                    <i className="fa-solid fa-arrow-right"></i>
                    <a href={props.href} target='blank_'>Aller sur ce projet</a>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </div>
        </div>
    );
};

export default Modal;