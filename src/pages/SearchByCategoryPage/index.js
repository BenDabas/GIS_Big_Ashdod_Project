import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';

import { json_Big_Ashdod_1 } from '../../DB/index';

import './index.css';

const SearchByCategoryPage = () => {
  const history = useHistory();

  const [categorySearch, setCategorySearch] = useState([]);

  const categories = [
    'Fashion',
    'Footwear',
    'Electronics',
    'Restaurants and Food',
    'Various',
    'Cosmetics and Pharmacy',
    'Optics',
    'Accessories and Bags',
  ];

  const handleBackButton = () => {
    history.push('/');
  };

  const handleSearchCategory = (index) => {
    const stores = json_Big_Ashdod_1.features.filter(
      (store) => store.properties.category === categories[index]
    );
    setCategorySearch(stores);
    console.log('stores', stores);
  };

  return (
    <div className="search-by-category-page-wrapper">
      <button
        className="search-category-page-button"
        onClick={handleBackButton}
      >
        Back To Home Page
      </button>
      <div>
        {categories.map((category, index) => (
          <button
            className="search-category-page-button"
            key={index}
            onClick={() => handleSearchCategory(index)}
          >
            {category}
          </button>
        ))}
      </div>
      {categorySearch.map((store, index) => {
        return (
          <div>
            <Chip
              style={{ fontSize: '25px', margin: '8px 8px' }}
              label={`Name: ${categorySearch[index].properties?.name}, category: ${categorySearch[index].properties?.category}
            , location: ${categorySearch[index].properties?.location}, opening hours: ${categorySearch[index].properties?.time}`}
              clickable
              color="primary"
              component="a"
              href={`https://qgis-2-web-big-ashdod.vercel.app/#21/${categorySearch[index].geometry.coordinates[0][0][0][1]}/${categorySearch[index].geometry.coordinates[0][0][0][0]}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchByCategoryPage;
