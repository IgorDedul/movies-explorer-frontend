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

import Popup from '../Popup/Popup';

import { LoggedInContext } from './../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [popupTitle, setPopupTitle] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const navigate = useNavigate();

  // Открытие попапа
  const openPopup = (popupText) => {
    setPopupTitle(popupText);
    setIsOpenPopup(true);
  };

  // Закрытие попапа
  const closePopup = () => {
    setIsOpenPopup(false);
    setPopupTitle('');
  };

  // Авторизация токеном через локальное хранилище
  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    handleCheckToken();
  };

  // Выход из авторизации
  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('searchText');
    localStorage.removeItem('areShortiesSeleted');
    localStorage.removeItem('foundMovies');
    navigate('/');
  };

  // Проверка токена
  const handleCheckToken = () => {
    const token = localStorage.getItem('token');

    mainApi.checkToken(token)
      .then((user) => {
        if (user.data) {
          setCurrentUser(user.data);
          setLoggedIn(true);
          navigate('/movies');

          return mainApi.getSavedMovies()
            .then((movies) => {
              setSavedMovies(movies);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        localStorage.removeItem('token');
        localStorage.removeItem('searchText');
        localStorage.removeItem('areShortMoviesSelected');
        localStorage.removeItem('foundMovies');
        setCurrentUser({});
        console.error(err);
      });
  };

  // Обновление профиля
  const handleUpdateUser = (userInfo) => {
    setCurrentUser(userInfo);
    openPopup('Вы успешно обновили профиль!');
  };

  // Сохранение фильмов
  const handleSaveMovie = (movieData) => {
    mainApi.saveMovie(movieData)
      .then((savedMovie) => {
        if (savedMovie) {
          setSavedMovies((movies) => [...movies, savedMovie]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Отмена сохранения фильмов
  const handleUnsaveMovie = (movieId) => {
    mainApi.unsaveMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => {
          return movie._id !== movieId;
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleCheckToken();
  }, []);

  // Закрытие попапа нажатием клавиши Esc
  useEffect(() => {
    if (isOpenPopup) {
      const handleEscKeydown = (evt) => {
        if (evt.key === 'Escape') {
          closePopup();
        }
      };

      document.addEventListener('keydown', handleEscKeydown);

      return () => {
        document.removeEventListener('keydown', handleEscKeydown);
      }
    }
  }, [isOpenPopup]);

  return (
    <LoggedInContext.Provider value={loggedIn}>
    <CurrentUserContext.Provider value={currentUser}>
    <div className={"app"}>
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
    </div>
    </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
