import React from 'react';

import './Header.css';

import logo from '../../images/logo.svg';

import Navigation from './../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return ( <> {
      <header className={`header section ${location.pathname === '/' ? 'header_theme_main' : ''}`}>
        <Link className='link header__link' to='/'>
          <img className='image header__logo' src={logo} alt='Логотип сайта Movies-Explorer'/>
        </Link>
        <Navigation/>
      </header>
  } </>
  );
};

export default Header;