import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';

import { json_Big_Ashdod_1 } from '../../DB/index';

import DialogPopUp from '../../Components/DialogPopUp';

import './index.css';

const SearchByCategoryPage = () => {
  const history = useHistory();

  const [categorySearch, setCategorySearch] = useState([]);
  const [open, setOpen] = useState(true);

  const handleCloseDialog = () => {
    setOpen(false);
  };
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
      <DialogPopUp handleClose={handleCloseDialog} open={open} />
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
          <div className="chips-wrapper">
            <Chip
              style={{
                fontSize: '30px',
                margin: '4px 8px',
                width: '20%',
                height: '20%',
              }}
              label={`${categorySearch[index].properties?.name}`}
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
