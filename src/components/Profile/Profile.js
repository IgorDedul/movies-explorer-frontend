import React, {useContext, useState} from 'react';
import './Profile.css';

import {Link} from 'react-router-dom';

const Profile = () => {

  return (
    <main>
      <section className='profile section'>
        <form name='profile' className='profile__form' noValidate>
          <div className='profile__top'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <div className='profile__container'>
              <label className='profile__input-container'>
                <span className='profile__input-label'>Имя</span>
                <input
                  className='profile__input'
                  type='text'
                  name='name'
                  placeholder='Введите имя'
                  minLength='2'
                  maxLength='30'
                  required
                />
                <span className='profile__input-error'></span>
              </label>
              <label className='profile__input-container'>
                <span className='profile__input-label'>E-mail</span>
                <input
                  className={`profile__input profile__input_type_email`}
                  type='email'
                  name='email'
                  placeholder='Введите почту'
                  required
                />
              </label>
              <span className='profile__input-error'></span>
            </div>
          </div>
          <div className='profile__bottom'>
            <>
              <button type='button' className='profile__button profile__edit-button link'>Редактировать</button>
              <Link className='profile__button profile__sign-out-button link' to='/'>
                Выйти из аккаунта
              </Link>

            </>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
