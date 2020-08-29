import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import HeroItem from '../components/HeroItem';
import { useDispatch, useSelector } from 'react-redux';
import { heroItem } from '../redux/reducers/heroReducer';

const HeroPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const hero = useSelector((state) => state.heroReducer.hero);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    dispatch(heroItem(result));
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            );
    }, [id]);

    return (
        <div className="page hero-page">
            <section className="hero-item-container">
                <div className="container">
                    {isLoaded && <Spinner />}

                    {error && <ErrorMsg />}

                    {hero && <HeroItem hero={hero} />}

                    <div className="btn-block">
                        <Link to="/" className="back-page">
                            Back to list...
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroPage;
