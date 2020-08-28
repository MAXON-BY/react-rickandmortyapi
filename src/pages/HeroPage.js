import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";
import HeroItem from "../components/HeroItem";

const HeroPage = () => {

    const {id} = useParams();

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [hero, setHero] = useState([])

    useEffect(() => {
        setIsLoaded(true);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    setHero(result);
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

                    {hero && <HeroItem hero={hero}/>}

                    <div className="btn-block">
                        <Link to="/" className="back-page">Back to list...</Link>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HeroPage;