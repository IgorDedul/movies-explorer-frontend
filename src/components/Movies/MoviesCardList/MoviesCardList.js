import React, { useEffect, useRef, useState } from 'react';

import More from '../More/More';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import { NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS } from '../../../utils/constants';


const MoviesCardList = ({ foundMovies, savedMovies, onSaveButtonClick }) => {
  const [shownMovies, setShownMovies] = useState([]);
  const moviesCardListElement = useRef();

  // Обработчик на нажатие кнопки ещё, если кол-во фильмов превышает заданное
  const handleMoreButtonClick = () => {
    const numberOfColumns = window.getComputedStyle(moviesCardListElement.current).getPropertyValue('grid-template-columns').split(' ').length;
    const numberOfShownMovies = Math.ceil(shownMovies.length / numberOfColumns) * numberOfColumns;

    setShownMovies(foundMovies.slice(0, numberOfShownMovies + NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS[numberOfColumns].ADD));
  };

  useEffect(() => {
    if (foundMovies.length) {
      const numberOfColumns = window.getComputedStyle(moviesCardListElement.current).getPropertyValue('grid-template-columns').split(' ').length;

      setShownMovies(foundMovies.slice(0, NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS[numberOfColumns].INITIAL));
    }
  }, [foundMovies]);

  return (
    <>
      <section className='movies-card-list section' aria-label="Фильмы">
        <ul className='movies-card-list__list list' ref={moviesCardListElement}>
          {shownMovies.map((movie) => {
            return (<MoviesCard key={movie.movieId} movie={movie} savedMovies={savedMovies} onSaveButtonClick={onSaveButtonClick} />);
          })}
        </ul>
      </section>
      {shownMovies.length < foundMovies.length && (
        <More onMoreButtonClick={handleMoreButtonClick} />
      )}
    </>
  );
};

export default MoviesCardList;
