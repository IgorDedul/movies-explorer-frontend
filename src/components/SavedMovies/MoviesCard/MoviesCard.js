import React, { useState } from 'react';
import './MoviesCard.css';

import '../MoviesCardList/MoviesCardList';

import film from '../../../images/Film/film.jpg';
import film1 from '../../../images/Film/film1.jpg';
import film2 from '../../../images/Film/film2.jpg';

const MoviesCard = () => {
  
  return (

<ul className='movies-card-list__list list'>
  <li className='movies-card'> 
    <a
      href='#'
      rel='noreferrer'
      target='_blank'
      className='movies-card__link link'
    >
        <img src={film} alt='33 слова о дизайне' className='movies-card__img img'/>
    </a>
    <div className='movies-card__container'>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__title'>33 слова о дизайне</h3>
        <button type='button' className='movies-card__close-button link' />
      </div>
      <p className='movies-card__duration'>1ч 47м</p>
    </div>
  </li>

  <li className='movies-card'> 
    <a
      href='#'
      rel='noreferrer'
      target='_blank'
      className='movies-card__link link'
    >
        <img src={film1} alt='Киноальманах «100 лет дизайна»' className='movies-card__img img'/>
    </a>
    <div className='movies-card__container'>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__title'>Киноальманах «100 лет дизайна»</h3>
        <button type='button' className='movies-card__close-button link' />
      </div>
      <p className='movies-card__duration'>1ч 3м</p>
    </div>
  </li>

  <li className='movies-card'> 
    <a
      href='#'
      rel='noreferrer'
      target='_blank'
      className='movies-card__link link'
    >
        <img src={film2} alt='В погоне за Бенкси' className='movies-card__img img'/>
    </a>
    <div className='movies-card__container'>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__title'>В погоне за Бенкси</h3>
        <button type='button' className='movies-card__close-button link' />
      </div>
      <p className='movies-card__duration'>1ч 42м</p>
    </div>
  </li>
</ul>

  );
};

export default MoviesCard;