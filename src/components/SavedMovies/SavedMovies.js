import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'

import '../Movies/MoviesCardList/MoviesCardList.css';

import film from '../../images/Film/film.jpg';
import film1 from '../../images/Film/film1.jpg';
import film2 from '../../images/Film/film2.jpg';


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