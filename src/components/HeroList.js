import React from 'react';

const HeroList = () => {
    return (
        <li>
            <div className="hero-item">
                <div className="hero-image">
                    <img src="https://rickandmortyapi.com/api/character/avatar/345.jpeg" alt="rick"/>
                </div>
                <div className="hero-name">
                    <h3>Rick</h3>
                </div>

                <a className="hero-more" href="/">More...</a>
            </div>
        </li>
    );
};

export default HeroList;