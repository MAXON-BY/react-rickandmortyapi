import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import HeroItem from '../components/HeroItem';
import { useDispatch, useSelector } from 'react-redux';
import { heroItem, setPage } from '../redux/reducers/heroReducer';
import { RESPONSE_DEFAULT_SIZE } from '../constants/constants';

const HeroPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentPage, hero } = useSelector((state) => state.heroReducer);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentPage) {
      const page = Math.ceil(id / RESPONSE_DEFAULT_SIZE);
      dispatch(setPage(page));
    }
    if (!hero[id]) {
    //   fetch(`https://rickandmortyapi.com/api/character/${id}`)
    //     .then((res) => res.json())
    //     .then(
    //       (result) => {
    //         dispatch(heroItem({ id, result }));
    //       },
    //       (error) => {
    //         setError(error);
    //       }
    //     );
    // }
  }, [id, dispatch, hero, currentPage]);

  return (
    <div className="page hero-page">
      <section className="hero-item-container">
        <div className="container">
          {error && <ErrorMsg />}

          {hero[id] ? <HeroItem hero={hero[id]} /> : <Spinner />}

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
