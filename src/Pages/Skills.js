import React, { useState } from 'react';
import BigTitle from '../Components/BigTitle/BigTitle';
import '../styles/Skills/Skills.css'
import logoSkills from '../Assets/Data/logoSkills';
import otherLogo from '../Assets/Data/othersLogo';

const Skills = () => {
    const [isHovered, setIsHovered] = useState(true);

    const handleHover = () => {
        setIsHovered(false);
    };


    const buttonClass = isHovered ? '' : 'displayPercent';
    const noneArrow = isHovered ? '' : 'none';
    return (
        <div>
            <div className='title'>
                <BigTitle
                    className='bigTitle'
                    title='Compétences'
                    icone="fa-solid fa-wrench"
                />
            </div>
            <div className='containSkillsWrapper'>
                <div className='contentSkills'>
                    {logoSkills && logoSkills.map((logo, index) => (
                        <div className="skillsContent" key={index}>
                            <img src={logo.html}></img>
                            <p className={`percent ${buttonClass}`} >{logo.percentage}</p>
                            <i
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover} className={`fa-solid fa-chevron-down ${noneArrow}`}>
                            </i>
                        </div>
                    ))}
                </div>
            </div>

            <section className='secondSkills'>
                <div>
                    <h1>J'ai pu travailler avec :</h1>
                </div>
                <div className='otherlogoWrapper'>
                    {otherLogo && otherLogo.map((logo, index) => (
                        <div className="otherLogo" key={index}>
                            <img src={logo.type}></img>
                            <p className='nameLogo'>{logo.name}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};


export default Skills;