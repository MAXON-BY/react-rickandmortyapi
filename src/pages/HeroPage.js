import React from 'react';

const HeroPage = () => {
    return (
        <div className="hero-page">

            <section className="hero-item-container">
                <div className="container">

                    <div className="hero-item-id">
                        <div className="hero-item-image">
                            <img src="https://rickandmortyapi.com/api/character/avatar/345.jpeg" alt="rick"/>
                        </div>
                        <div className="hero-item-card">
                            <div className="hero-item-name">
                                <h3>Rick</h3>
                            </div>
                            <div className="hero-item-status">
                                <span className="status__active"></span>
                                Dead - Human
                            </div>
                            <div className="hero-item-location">
                                <p>Last known location:</p>
                                <p>Earth (Replacement Dimension)</p>
                            </div>
                            <div className="hero-item-series">
                                <p>First seen in:</p>
                                <p>Pickle Rick</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HeroPage;