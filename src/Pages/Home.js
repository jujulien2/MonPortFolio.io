import React from 'react';

import '../styles/HomePageCss/Home/Home.css'
import picOfMe from '../Assets/photo.webp'


const Home = () => {
    return (

        <div className='homeContain'>
            <div className='presentation'>
                <hr />
                <h1>Présentation</h1>
                <hr />
            </div>
            <div className='nameAndPhoto'>

                <div className='containLeftSide'>
                    <div className='name'>Blondel Julien</div>
                    <div className='job'>Développeur Junior - Intégrateur Web</div>
                    <div className='aboutMe'>
                        👋 Bonjour, je suis Julien, un développeur web junior passionné de 24 ans.

                        💡 Mon parcours dans le monde du développement web a été guidé par ma soif d'apprentissage et ma volonté de créer des solutions numériques innovantes. Chaque ligne de code que j'écris est une opportunité d'améliorer l'expérience utilisateur et de résoudre des problèmes avec élégance.

                        🌐 Je suis constamment à la recherche de nouvelles technologies et de tendances pour rester à jour avec les derniers développements du secteur. Mon expérience inclut la création de sites web réactifs, l'intégration de fonctionnalités dynamiques, et la résolution de défis techniques avec une approche axée sur la qualité et la performance.

                        💼 Mon objectif en tant que développeur web junior est de contribuer à des projets stimulants au sein d'une équipe dynamique. Je suis prêt à apporter mes compétences en développement web, ma créativité et mon désir d'apprendre pour aider votre entreprise à atteindre de nouveaux sommets.

                    </div>
                </div>

                <div className='containRightSide'>
                    <img src={picOfMe}></img>
                </div>
            </div>

        </div>


    );
};

export default Home;