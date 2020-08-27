import React from 'react';
import {Link} from "react-router-dom";

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

                <Link className="hero-more" to="/">More...</Link>
            </div>
        </li>
    );
};

export default HeroList;