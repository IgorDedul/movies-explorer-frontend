import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Auth from './../Auth/Auth';
import EmailAuthInput from './../Auth/EmailAuthInput/EmailAuthInput';
import PasswordAuthInput from './../Auth/PasswordAuthInput/PasswordAuthInput';
import './Login.css';


const Login = ({}) => {
    return (
        <Auth
          title='Рады видеть!'
          submitButtonText='Войти'
          questionText='Ещё не зарегистрированы?'
          linkRoute='/signup'
          linkText='Регистрация'

        >
          <EmailAuthInput/>
          <PasswordAuthInput/>
        </Auth>
      );
};

export default Login;