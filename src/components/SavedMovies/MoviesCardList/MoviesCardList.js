import './MoviesCardList.css';

import MoviesCard from './../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className='movies-card-list section' aria-label="Сохраненные фильмы">
      <ul className='movies-card-list__list list'>
        <MoviesCard/>;
      </ul>
    </section>
  );
};

export default MoviesCardList;