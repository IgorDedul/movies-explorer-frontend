import React, { useEffect, useRef, useState } from 'react';

import More from '../More/More';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


const MoviesCardList = () => {

  return (
    <>
      <section className='movies-card-list section' aria-label="Фильмы">
        {/*<ul className='movies-card-list__list list'>*/}
          <MoviesCard/>
        {/*</ul>*/}
      </section>
       <More/>
    </>
  );
};

export default MoviesCardList;
