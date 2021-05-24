import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { json_Big_Ashdod_1 } from '../../DB/index';

import './index.css';

const SearchByStorePage = () => {
  const history = useHistory();

  const [storeSearch, setStoreSearch] = useState('');
  const [storeDetail, setStoreDetails] = useState('');

  const handleStoreInput = ({ target }) => {
    setStoreSearch(target.value);
  };

  const handleBackButton = () => {
    history.push('/');
  };

  const handleSearchByStoreButton = () => {
    const details = json_Big_Ashdod_1.features.filter(
      (store) => store.properties.name === storeSearch
    );
    setStoreDetails(details);
    console.log('storeDetails:', details);
  };

  return (
    <div className="search-by-Store-page-wrapper">
      <div className="search-by-store">
        <input value={storeSearch} onChange={handleStoreInput} />
      </div>
      <button
        className="search-store-page-button"
        onClick={handleSearchByStoreButton}
      >
        {' '}
        Search Store
      </button>
      <div className="label-wrapper">
        {storeDetail !== '' ? (
          <a
            href={`https://qgis-2-web-big-ashdod.vercel.app/#21/${storeDetail[0].geometry.coordinates[0][0][0][1]}/${storeDetail[0].geometry.coordinates[0][0][0][0]}`}
          >
            <label
              style={{ cursor: 'pointer' }}
              className="search-by-Store-label"
            >{`Name: ${storeDetail[0].properties?.name}, category: ${storeDetail[0].properties?.category}
          , location: ${storeDetail[0].properties?.location}, opening hours: ${storeDetail[0].properties?.time}`}</label>
          </a>
        ) : (
          ''
        )}
      </div>
      <button
        className="search-category-page-button"
        onClick={handleBackButton}
      >
        Back To Home Page
      </button>
    </div>
  );
};

export default SearchByStorePage;