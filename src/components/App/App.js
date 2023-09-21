import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import Main from './../Main/Main';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import Profile from './../Profile/Profile';
import Login from './../Login/Login';
import Register from './../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => {

  return (
      <div className='content'>
        <Header />
        <Routes>
          <Route
            exact path="/movies"
            element={
                <Movies/>
            }
          />
          <Route
            exact path="/saved-movies"
            element={
                <SavedMovies/>
            }
          />
          <Route
            exact path="/profile"
            element={
                <Profile/>
            }
          />

          <Route
            exact path="/"
            element={<Main />}
          />
          <Route
            exact path="/signin"
            element={<Login  />}
          />
          <Route
            exact path="/signup"
            element={<Register  />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />

      </div>

  );
};

export default App;