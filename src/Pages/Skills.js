import React, { useState } from 'react';
import BigTitle from '../Components/BigTitle/BigTitle';
import '../styles/Skills/Skills.css'
import logoSkills from '../Assets/Data/logoSkills';

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


        </div>
    );
};


export default Skills;