import React from 'react';
import { useHistory } from 'react-router-dom';

import { json_Big_Ashdod_1 } from '../../DB/index';

import './index.css';

console.log('json_Big_Ashdod_1', json_Big_Ashdod_1);
console.log(
  'json_Big_Ashdod_1',
  json_Big_Ashdod_1.features.filter((big) => big.properties.name === 'Nike')
);

const HomePage = () => {
  const history = useHistory();

  const handleSearchByCategory = () => {
    history.push('/search-by-category');
  };

  const handleSearchByStore = () => {
    history.push('/search-by-store');
  };

  const handleAbout = () => {
    history.push('/about');
  };

  return (
    <div className="home-page-wrapper">
      <h1>Welcome</h1>
      <div className="home-page-buttons-wrapper">
        <button
          className="home-page-button category-search-button"
          onClick={handleSearchByCategory}
        >
          Search by category
        </button>
        <button
          className="home-page-button search-button"
          onClick={handleSearchByStore}
        >
          Search by store name
        </button>
      </div>
      <a href="https://qgis-2-web-big-ashdod.vercel.app/#18">
        <button className="home-page-button map-button">Big Ashdod map</button>
      </a>
      <button className="home-page-button about-button" onClick={handleAbout}>
        About
      </button>
    </div>
  );
};

export default HomePage;
