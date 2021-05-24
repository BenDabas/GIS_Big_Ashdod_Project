import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SearchByStorePage from '../pages/SearchByStorePage';
import SearchByCategoryPage from '../pages/SearchByCategoryPage';
import AboutPage from '../pages/AboutPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/search-by-category"
        exact
        component={SearchByCategoryPage}
      />
      <Route path="/search-by-store" exact component={SearchByStorePage} />
      <Route path="/about" exact component={AboutPage} />
    </Switch>
  );
};

export default Routes;
