import React from 'react';
import '../styles/ProjectsPageCss/Projects/Projects.css'
import Cards from '../Components/Cards/Cards';
import bookiProject from '../Assets/Projects/booki.com.jpeg'
import kasaProject from '../Assets/Projects/kasa.png'

const Projets = () => {
    return (
        <div className='projectsWrapper'>
            <Cards
                className='cardWrapper'
                title='Projet Booki.com'
                href='https://jujulien2.github.io/projet3-booki.com/'
                image={bookiProject}
            />
            <Cards
                className='cardWrapper'
                title='Projet Kasa'
                image={kasaProject}
            />
            <Cards
                className='cardWrapper'
                title='Projet Booki.com'
                image={bookiProject}
            />
        </div>
    );
};

export default Projets;