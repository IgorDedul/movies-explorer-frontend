import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchForm from './SearchForm/SearchForm';

const Movies = () => {

  return (
    <main className='movies'>
      <SearchForm/>

    </main>
  );
};

export default Movies;