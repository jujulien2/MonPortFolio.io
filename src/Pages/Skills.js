import React from 'react';
import BigTitle from '../Components/BigTitle/BigTitle';
import '../styles/Skills/Skills.css'
import logoSkills from '../Assets/Data/logoSkills';

const Skills = () => {
    return (
        <div>
            <div className='title'>
                <BigTitle
                    className='bigTitle'
                    title='Compétences techniques'
                    icone="fa-solid fa-wrench"
                />
            </div>
            <div className='containSkillsWrapper'>
                <div className='contentSkills'>
                    {logoSkills && logoSkills[0].logos.map((logo, index) => (
                        <div key={index}>
                            <img src={logo}></img>
                        </div>


                    ))}
                </div>
            </div>

        </div>
    );
};

// {Data && Data.map((logos, index) => (
//     <li key={index}>
//         <ul><img src={logos.}></img></ul>
//         <ul></ul>
//         <ul></ul>
//         <ul></ul>
//     </li>
// ))}
export default Skills;