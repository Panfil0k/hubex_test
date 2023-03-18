import React from 'react';

import './Header.scss';

import logoMobile from '../../images/logo-mobile.svg';

function Header() {
  return (
    <header className='header'>
      <img src={logoMobile} className='header__logo_mobile' alt='Логотип S7' />
    </header>
  );
}

export default Header;
