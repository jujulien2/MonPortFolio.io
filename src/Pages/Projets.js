import React, { useState } from 'react';
import '../styles/ProjectsPageCss/Projects/Projects.css'
import Cards from '../Components/Cards/Cards';
import Data from '../Assets/Data/data'
import Modal from '../Components/Modal/Modal';


const Projets = () => {

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedCardIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCardIndex(null);
        setIsModalOpen(false);
    };


    return (
        <div className='projectsWrapper'>
            {Data && Data.map((project, index) => (
                < Cards
                    key={index}
                    className='cardWrapper'
                    title={project.title}
                    image={project.image}
                    onClick={() => openModal(index)}
                    logoCard={project.logoOCR}
                />
            ))}
            {isModalOpen && selectedCardIndex !== null ? (
                <Modal
                    projectData={Data}
                    selectedCardIndex={selectedCardIndex}
                    closeModal={closeModal}
                />


            ) : null}
        </div>
    );
};

export default Projets;






