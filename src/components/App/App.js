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

import { LoggedInContext } from './../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import Popup from '../Popup/Popup';

const App = () => {



  const RouteWrapper = ({path, element}) => {

    const routesWithoutHeader = [
      '/signin',
      '/signup',
      '*',
    ]

      return (

              <>
                {!routesWithoutHeader.includes(path) && <Header/>}
                {element}
              </>

        )


  }
  return (
    <div className={"app"}>
      <div className='content'>

        <Routes>
          <Route
            exact path="/movies"
            element={
              <RouteWrapper path={"/movies"} element={<Movies />} />
            }
          />
          <Route exact path={"/saved-movies"} element={
            <RouteWrapper path={"/saved-movies"} element={<SavedMovies />} /> }/>

          <Route exact path="/profile" element={
            <RouteWrapper path={"/profile"} element={<Profile />} />
          } />

          <Route exact path="/signin" element={
            <RouteWrapper path={"/signin"} element={<Login />} />
          }/>

          <Route exact path="/signup" element={
            <RouteWrapper path={"/signup"} element={<Register />} />
          }
          />

          <Route exact path="/" element={
            <RouteWrapper path={"/"} element={<Main />} />
          }/>

          <Route path="*" element={
            <RouteWrapper path={"*"} element={<PageNotFound />} />
          } />

        </Routes>
        <Footer />

      </div>
    </div>
  );
};

export default App;
