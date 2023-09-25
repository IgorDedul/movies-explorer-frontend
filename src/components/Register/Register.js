import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Auth from './../Auth/Auth';
import NameAuthInput from '../Auth/NameAuthInput/NameAuthInput';
import EmailAuthInput from '../Auth/EmailAuthInput/EmailAuthInput';
import PasswordAuthInput from '../Auth/PasswordAuthInput/PasswordAuthInput';
import './Register.css';

const Register = () => {

    return (
        <Auth
          title='Добро пожаловать!'
          submitButtonText='Зарегистрироваться'
          questionText='Уже зарегистрированы?'
          linkRoute='/signin'
          linkText='Войти'
        >
          <NameAuthInput/>
          <EmailAuthInput/>
          <PasswordAuthInput/>
        </Auth>
      );
};

export default Register;