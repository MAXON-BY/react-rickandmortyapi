import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";

const HeroPage = () => {

    const {id} = useParams();

    console.log('id page hero', id)

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        setIsLoaded(true);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    setHeroes(result.results);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="page hero-page">

            <section className="hero-item-container">
                <div className="container">

                    {isLoaded && <Spinner/>}

                    {error && <ErrorMsg/>}

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
                        <Link to="/" className="back-page">Back to list...</Link>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HeroPage;