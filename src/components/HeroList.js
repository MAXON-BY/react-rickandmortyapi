import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImageFound from 'assets/img/noImageFound.png';

const HeroList = ({ hero }) => {
  const { id, name, image } = hero;

  const showMore = id ? (
    <Link className="hero-more" to={`/hero/${id}`}>
      More...
    </Link>
  ) : (
    <div className="hero-noInfo">
      {/*TODO придумай МАКС!*/}
      Sorry, now info =(
    </div>
  );

  return (
    <li key={id}>
      <div className="hero-item">
        <div className="hero-image">
          <img src={image} alt="rick" />
        </div>
        <div className="hero-name">
          <h3>{name}</h3>
        </div>
        {showMore}
      </div>
    </li>
  );
};

HeroList.defaultProps = {
  id: null,
  name: '',
  image: noImageFound,
};

HeroList.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default HeroList;
