import React, { Fragment, useEffect, useState } from 'react';
import HeroList from '../components/HeroList';
import Spinner from '../components/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import { heroList, setPage } from '../redux/reducers/heroReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const { heroes, currentPage } = useSelector((state) => state.heroReducer);

  const [error, setError] = useState(null);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      dispatch(setPage(currentPage + 1));
    }
  };

  useEffect(() => {
    const shouldLoadHeroes = !heroes[currentPage];
    !currentPage && dispatch(setPage(1));
    if (shouldLoadHeroes) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(heroList(result.results));
          },
          (error) => {
            setError(error);
          }
        );
    }
  }, [currentPage, dispatch, heroes]);

  const showSpinner = !heroes[currentPage] && <Spinner />;

  const renderHeroesInfo = (
    <ul onScroll={handleScroll}>
      {Object.values(heroes).map((heroesPerPage) =>
        heroesPerPage.map((hero) => (
          <Fragment key={hero.id}>
            <HeroList hero={hero} />
          </Fragment>
        ))
      )}
    </ul>
  );

  return (
    <div className="page home-page">
      <section className="hero-container">
        <div className="container">
          <div className="hero-list">
            {renderHeroesInfo}
            {showSpinner}
            {error && <ErrorMsg />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
