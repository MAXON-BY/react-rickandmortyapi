import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import HeroItem from '../components/HeroItem';

const HeroPage = () => {
  const { id } = useParams();

  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(
        (result) => setHero(result || []),
        (error) => {
          // TODO some global errors will be there
          throw Error(error);
        }
      );
  }, []);

  console.log('hero', hero);

  return (
    <div className="page hero-page">
      <section className="hero-item-container">
        <div className="container">
          {hero ? <HeroItem hero={hero} /> : <Spinner />}
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
