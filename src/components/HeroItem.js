import React from 'react';

const HeroItem = ({hero}) => {

    const {name, gender, image, location, status, species  } = hero

    return (
        <div className="hero-item-id">
            <div className="hero-item-image">
                <img src={image} alt={name}/>
            </div>
            <div className="hero-item-card">
                <div className="hero-item-name">
                    <h3>{name}</h3>
                </div>
                <div className="hero-item-status">
                    <span className="status-icon status__{status}"></span>
                    {status} - {gender} - {species}
                </div>
                <div className="hero-item-location hero-block">
                    <p>Last known location:</p>
                    <p>{location && location.name}</p>
                </div>
                <div className="hero-item-series hero-block">
                    <p>First seen in:</p>
                    <p>Pickle Rick ---</p>
                </div>
            </div>
        </div>
    );
};

export default HeroItem;