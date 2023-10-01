import React, { useEffect, useState } from 'react';

import './SearchForm.css';

const SearchForm = () => {
  
  return (
    <section className='search section' aria-label="Поиск">
      <form name='search' className='search__form' noValidate>
        <div className='search__input-container'>
          <input
            type='text'
            name='searchText'
            placeholder='Фильм'
            className='search__input'
            required
          />
          <button 
            type='submit' 
            className='search__button'
          />
        </div>
        <span className='search__input-error'></span>
        <label className='search__sort link'>
          <input
            type='checkbox'
            name='areShortMoviesSelected'
            id='short-films'
            className='search__checkbox'
          />
          <span className='search__custom-checkbox'></span>
          <span className='search__checkbox-text'>Короткометражки</span>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;