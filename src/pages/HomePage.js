import React, { useEffect, useState } from 'react';
import HeroList from '../components/HeroList';
import Spinner from '../components/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import { heroList } from '../redux/reducers/heroReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const heroes = useSelector((state) => state.heroReducer.heroes);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    dispatch(heroList(result.results));
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            );
    }, []);

    return (
        <div className="page home-page">
            <section className="hero-container">
                <div className="container">
                    <div className="hero-list">
                        <ul>
                            {heroes.map((hero, index) => (
                                <HeroList key={index} hero={hero} />
                            ))}
                        </ul>

                        {isLoaded && <Spinner />}

                        {error && <ErrorMsg />}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
