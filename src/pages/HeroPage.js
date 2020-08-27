import React from 'react';

const HeroPage = () => {
    return (
        <div className="page hero-page">

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
                                <span className="status-icon status__alive"></span>
                                Dead - Human
                            </div>
                            <div className="hero-item-location hero-block">
                                <p>Last known location:</p>
                                <p>Earth (Replacement Dimension)</p>
                            </div>
                            <div className="hero-item-series hero-block">
                                <p>First seen in:</p>
                                <p>Pickle Rick</p>
                            </div>
                        </div>
                    </div>


                    <div className="btn-block">
                        <a href="/" className="back-page">Back to list...</a>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HeroPage;