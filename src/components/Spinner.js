import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader type="TailSpin" color="#ff9800" height={50} width={50} timeout={5000} />
    </div>
  );
};

export default Spinner;
