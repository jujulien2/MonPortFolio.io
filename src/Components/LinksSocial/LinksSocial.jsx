import React from 'react';
import '../../styles/LinksSocial/LinksSocial.css'
const LinksSocial = () => {
    const emailAddress = 'julien.blondel218@yahoo.com'
    return (
        <div className='wrapperLinks'>
            <a target='blank_' href="https://www.linkedin.com/in/julien-blondel-4b0b7a276/">
                <span><i className="fa-brands fa-linkedin"></i></span>
            </a>
            <a target='blank_' href="https://github.com/jujulien2">
                <span><i className="fa-brands fa-github"></i></span>
            </a>
            <a target='blank_' href={`mailto:${emailAddress}`}>
                <span><i className="fa-solid fa-envelope"></i></span>
            </a>
        </div>
    );
};

export default LinksSocial;