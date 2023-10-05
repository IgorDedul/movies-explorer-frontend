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

  // Исключение хедера из указанных форм
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
    <LoggedInContext.Provider value={loggedIn}>
    <CurrentUserContext.Provider value={currentUser}>
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
    </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
