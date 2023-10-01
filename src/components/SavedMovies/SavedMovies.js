import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'

const SavedMovies = () => {
  
  return (
    <main className='saved-movies'>
      <SearchForm/>
      <p className='movies__not-found'></p>
      <MoviesCardList/>
      </main>
  );
};

export default SavedMovies;