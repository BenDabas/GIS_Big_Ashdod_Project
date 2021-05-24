import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import { json_Big_Ashdod_1 } from '../../DB/index';

// const map = require('../../Map/index.html');

// const html = require('../../DB/index.html');

import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const SearchByCategoryPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const html = '<iframe src="../../Map/index.html"></iframe>';

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

  //   const handleCategoryInput = ({ target }) => {
  //     setCategorySearch(target.value);
  //   };

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
      {/* <div>
        <input value={categorySearch} onChange={handleCategoryInput} />
      </div>
      <button className="search-category-page-button">Search Category</button>
      <div>
        <label>{categorySearch}</label>
      </div> */}
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

      {/* <Chip label="Primary clickable" clickable color="primary" /> */}
      {/* {categorySearch !== ''
        ? categorySearch.map((store, index) => (
            <label className="search-by-Store-label">{`Name: ${categorySearch[index].properties?.name}, category: ${categorySearch[index].properties?.category}
          , location: ${categorySearch[index].properties?.location}, opening hours: ${categorySearch[index].properties?.time}`}</label>
          ))
        : ''} */}
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
