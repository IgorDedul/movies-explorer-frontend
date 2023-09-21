import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';


const SavedMovies = () => {
  
  return (
    <main className='saved-movies'>
      <SearchForm/>
      <p className='movies__not-found'>Ничего не найдено</p>
      </main>
  );
};

export default SavedMovies;