import React from 'react';

import '../styles/HomePageCss/Home/Home.css'
import picOfMe from '../Assets/photo.webp'
import BigTitle from '../Components/BigTitle/BigTitle';
import scss from '../Assets/Skills/scss.png'
import react from '../Assets/Skills/react.png'
import git from '../Assets/Skills/github.png'
import LinksSocial from '../Components/LinksSocial/LinksSocial';


const Home = () => {

    const emailAddress = 'julien.blondel218@yahoo.com'

    return (

        <div className='homeContain'>
            <div className='nameAndPhoto'>

                <div className='containLeftSide'>
                    <div className='name'>Blondel Julien</div>
                    <div className='job'>Développeur Junior - Intégrateur Web</div>
                    <div className='myDescription'>
                        <p> Developpeur intégrateur web junior de 24 ans,</p>
                        <p>Soif d'apprendre et de découvrir davantage le monde du web.</p>
                        <p className='sentenceAboutMe'>Passionné par le développement Front-end, j'apprécie particulièrement de créer des interfaces utilisateur professionnelles, agréables et intuitives qui améliorent l'expérience de l'utilisateur, tout en alliant esthétique et fonctionnalité. </p>

                    </div>
                </div>

                <div className='containRightSide'>
                    <img src={picOfMe}></img>
                    <div className='logoUnderPic'>
                        <img src={scss}></img>
                        <img src={react}></img>
                        <img src={git}></img>
                    </div>
                </div>
            </div>
            <BigTitle
                title='Présentation'
                className="aboutMe"
            />
            <section className='descriptionWrapper'>
                <div className='textDescription'>
                    <h1>Bienvenue sur mon portfolio !</h1>
                    <p>En tant qu'intégrateur web je prends plaisir à développer des sites optimisés, tant sur <span className='importantWord'>l'esthétisme</span> que sur la <span className='importantWord'>maintenabilité</span>.</p>
                    <p>Bien que je sois <span className='importantWord'>curieux</span> et <span className='importantWord'>déterminer</span> à apprendre tout type de langages, je me perfectionne avant tout en développant avec <span className='importantWord'>ReactJs/redux, Scss.</span>  </p>
                </div>
            </section>
            <BigTitle
                title='Contact'
                className="aboutMe"
            />
            <section className='contactWrapper'>
                <div className='textContact'>
                    <h1>Mon profil vous intéresse ? N'hésitez pas ! </h1>
                    <a className='mailTo' href={`mailto:${emailAddress}`}>
                        <span><i className="fa-regular fa-paper-plane"></i></span>
                    </a>
                </div>
                <LinksSocial />
            </section>
        </div >


    );
};

export default Home;