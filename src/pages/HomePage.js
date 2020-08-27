import React from 'react';
import HeroList from "../components/HeroList";

const HomePage = () => {
    return (
        <div className="home-page">

            <section className="hero-container">
                <div className="container">
                    <div className="hero-list">
                        <ul>
                            <HeroList/>
                        </ul>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;