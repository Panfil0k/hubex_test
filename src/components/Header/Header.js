import React from 'react';

import './Header.scss';

import logoMobile from '../../images/logo-mobile.svg';

function Header({ companyInfo, closeCompanyInfo }) {
  const headerClass = companyInfo ? 'header header_place_other' : 'header header_place_main';
  const buttonClass = companyInfo ? 'header__btn-back visible' : 'header__btn-back hidden';

  return (
    <header className={headerClass}>
      <button type='button' className={buttonClass} onClick={closeCompanyInfo}>Назад</button>
      <img src={logoMobile} className='header__logo_mobile' alt='Логотип S7' />
    </header>
  );
}

export default Header;
