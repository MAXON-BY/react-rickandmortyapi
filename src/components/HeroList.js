import React from 'react';
import { Link } from 'react-router-dom';

const HeroList = ({ hero }) => {
    const { id, name, image } = hero;

    const showMore = id ? (
        <Link className="hero-more" to={`/hero/${id}`}>
            More...
        </Link>
    ) : (
        <div>No info :(</div>
    );

    return (
        <li key={id}>
            <div className="hero-item">
                <div className="hero-image">
                    <img src={image} alt="rick" />
                </div>
                <div className="hero-name">
                    <h3>{name}</h3>
                </div>

                {showMore}
            </div>
        </li>
    );
};

export default HeroList;
