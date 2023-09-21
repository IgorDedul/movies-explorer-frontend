import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = () => {
  
  return (
    <li className='movies-card'>
      <a
        href={1}
        rel="noreferrer"
        target="_blank"
        className='movies-card__link link'><img src={''} alt={''} className='movies-card__img img'/></a>
      <div className='movies-card__container'>
        <div className='movies-card__title-container'>
          <h3 className='movies-card__title'>Название карты</h3>
          <button type='button' className='movies-card__close-button link' />
        </div>
        <p className='movies-card__duration'></p>
      </div>
    </li>
  );
};

export default MoviesCard;