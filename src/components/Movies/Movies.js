import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

const Movies = () => {

  return (
    <main className='movies'>
      <SearchForm/>
      <SearchResults/>

    </main>
  );
};

export default Movies;