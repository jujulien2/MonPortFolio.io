import React from 'react';
import '../../styles/Modal/Modal.css'

const Modal = (props) => {
    const projectData = props.projectData;
    const selectedProject = projectData[props.selectedCardIndex];
    const stopPropagation = function (e) {
        e.stopPropagation()
    }

    return (
        <aside className='modalWrapper' onClick={props.closeModal}>
            <div className='modal' onClick={stopPropagation} >
                <section className='headerModal'>
                    <h1>{selectedProject.title}</h1>
                </section>
                <div className='closeModal'><i className="fa-solid fa-xmark" onClick={props.closeModal}></i></div>

                <h2>{selectedProject.titleTwo}</h2>
                <div className='imgOfModal'>
                    <img className='logo' src={selectedProject.logo} alt="logo kasa project" />
                    <img className='screenProject' src={selectedProject.screenProject} alt='screen project' />
                </div>
                <p>{selectedProject.description}</p>

                {selectedProject.threeFacts.map((fact, index) => (

                    <ul key={index}>
                        <li>{fact}</li>
                    </ul>


                ))}
                <div className='skills'>
                    {selectedProject.skillsLogo.map((skills, index) => (
                        <img key={index} src={skills}></img>
                    ))}

                </div>


                <div className='seeProject'>
                    <i className="fa-solid fa-arrow-right"></i>
                    <a href={selectedProject.href} target='blank_'>Regarder ce projet !</a>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </div>
        </aside>
    );
};

export default Modal;