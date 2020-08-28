import React, { useEffect, useState } from 'react';
import HeroList from '../components/HeroList';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const [heroes, setHeroes] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then(
        (result) => setHeroes(result.results),
        (error) => {
          // TODO some global errors will be there
          throw Error(error);
        }
      );
  }, []);

  const showMainInfo = heroes ? (
    <ul>
      {heroes.map((hero, index) => (
        <HeroList key={index} hero={hero} />
      ))}
    </ul>
  ) : (
    <Spinner />
  );

  return (
    <div className="page home-page">
      <section className="hero-container">
        <div className="container">
          <div className="hero-list">{showMainInfo}</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
