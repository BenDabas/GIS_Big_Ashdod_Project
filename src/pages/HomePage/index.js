import React from 'react';
import { useHistory } from 'react-router-dom';
import { tada } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import './index.css';

const HomePage = () => {
  const history = useHistory();

  const Tada = styled.div`
    animation: 1s ${keyframes`${tada}`} 1;
  `;
  const handleSearchByCategory = () => {
    history.push({ pathname: '/search-by-category', open: true });
  };

  const handleSearchByStore = () => {
    history.push('/search-by-store');
  };

  const handleAbout = () => {
    history.push('/about');
  };

  return (
    <div className="home-page-wrapper">
      <Tada>
        <h1>Welcome to GIS project!</h1>

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
          <button className="home-page-button map-button">
            Big Ashdod map
          </button>
        </a>
        <button className="home-page-button about-button" onClick={handleAbout}>
          About
        </button>
      </Tada>
    </div>
  );
};

export default HomePage;
