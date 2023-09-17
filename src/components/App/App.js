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
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [popupTitle, setPopupTitle] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const navigate = useNavigate();

  const openPopup = (popupText) => {
    setPopupTitle(popupText);
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
    setPopupTitle('');
  };

  

  return (
    <LoggedInContext.Provider value={loggedIn}>
    <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Header />
        <Routes>
          <Route
            exact path="/movies"
            element={
              <ProtectedRoute>
                <Movies
                  onSaveMovie={handleSaveMovie}
                  onUnsaveMovie={handleUnsaveMovie}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact path="/saved-movies"
            element={
              <ProtectedRoute>
                <SavedMovies
                  savedMovies={savedMovies}
                  onUnsaveMovie={handleUnsaveMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact path="/profile"
            element={
              <ProtectedRoute>
                <Profile
                  onUpdateUser={handleUpdateUser}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact path="/"
            element={<Main />}
          />
          <Route
            exact path="/signin"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            exact path="/signup"
            element={<Register onLogin={handleLogin} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />

        <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;