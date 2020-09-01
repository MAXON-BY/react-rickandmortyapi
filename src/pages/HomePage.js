import React, { useEffect, useState } from 'react';
import HeroList from '../components/HeroList';
import Spinner from '../components/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import { heroList, heroPage } from '../redux/reducers/heroReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const heroes = useSelector((state) => state.heroReducer.heroes);
    const page = useSelector((state) => state.heroReducer.page);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            dispatch(heroPage(page + 1));
        }
    };

    useEffect(() => {
        setIsLoaded(true);
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
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
    }, [page]);

    return (
        <div className="page home-page">
            <section className="hero-container">
                <div className="container">
                    <div className="hero-list">
                        <ul onScroll={handleScroll}>
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
