import React, { useState } from 'react';
import './MoviesCard.css';
//import '../MoviesCardList/MoviesCardList.css';

import formatMovieDuration from '../../../utils/formatMovieDuration';

/**
import film from '../../../images/Film/film.jpg';
import film1 from '../../../images/Film/film1.jpg';
import film2 from '../../../images/Film/film2.jpg';
import film3 from '../../../images/Film/film3.jpg';
import film4 from '../../../images/Film/film4.jpg';
import film5 from '../../../images/Film/film5.jpg';
import film6 from '../../../images/Film/film6.jpg';
import film7 from '../../../images/Film/film7.jpg';
import film8 from '../../../images/Film/film8.jpg';
import film9 from '../../../images/Film/film9.jpg';
import film10 from '../../../images/Film/film10.jpg';
import film11 from '../../../images/Film/film11.jpg';
**/

const MoviesCard = ({ movie, savedMovies, onSaveButtonClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  let isSaved;
  if (savedMovies) {
    isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.movieId);
  }

  async function handleSaveButtonClick() {
    setIsLoading(true);

    await onSaveButtonClick(movie);

    setIsLoading(false);
  }
  
  return (

    <li className='movies-card'>
      <a
        href={movie.trailerLink}
        rel='noreferrer'
        target='_blank'
        className='movies-card__link link'
      >
          <img src={movie.image} alt={movie.nameRU} className='movies-card__img img'/>
      </a>
      <div className='movies-card__container'>
        <div className='movies-card__title-container'>
          <h3 className='movies-card__title'>{movie.nameRU}</h3>
          <button type='button' className={`movies-card__like-button link ${isSaved ? 'movies-card__like-button_active' : ''}`} onClick={handleSaveButtonClick} disabled={isLoading} />
        </div>
        <p className='movies-card__duration'>{formatMovieDuration(movie.duration)}</p>
      </div>
    </li>

    /**
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
            <button type='button' className='movies-card__like-button movies-card__like-button_active link'/>
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
            <button type='button' className='movies-card__like-button link'/>
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
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film3} alt='Баския: Взрыв реальности' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Баския: Взрыв реальности</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 21м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film4} alt='Бег это свобода' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Бег это свобода</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 44м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film5} alt='Книготорговцы' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Книготорговцы</h3>
            <button type='button' className='movies-card__like-button movies-card__like-button_active link'/>
          </div>
          <p className='movies-card__duration'>1ч 37м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film6} alt='Когда я думаю о Германии ночью' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Когда я думаю о Германии ночью</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 56м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film7} alt='Gimme Dander: История Игги и The Stooge...' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Gimme Dander: История Игги и The Stooge...</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 59м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film8} alt='Дженис: Маленькая девочка грустит' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Дженис: Маленькая девочка грустит</h3>
            <button type='button' className='movies-card__like-button movies-card__like-button_active link'/>
          </div>
          <p className='movies-card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film9} alt='Собираюсь перед прыжком' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Собираюсь перед прыжком</h3>
            <button type='button' className='movies-card__like-button movies-card__like-button_active link'/>
          </div>
          <p className='movies-card__duration'>1ч 10м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film10} alt='Пи Джей Харви: A dog called money' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>Пи Джей Харви: A dog called money</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 4м</p>
        </div>
      </li>

      <li className='movies-card'> 
        <a
          href='#'
          rel='noreferrer'
          target='_blank'
          className='movies-card__link link'
        >
            <img src={film11} alt='По волнам: Искусство звука в кино' className='movies-card__img img'/>
        </a>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>По волнам: Искусство звука в кино</h3>
            <button type='button' className='movies-card__like-button link'/>
          </div>
          <p className='movies-card__duration'>1ч 7м</p>
        </div>
      </li>

    </ul>
    **/
  );
};

export default MoviesCard;