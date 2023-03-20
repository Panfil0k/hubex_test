import React from 'react';

import './Header.scss';

import { TABLET_WIDTH } from '../../utils/constants';

import logoMobile from '../../images/logo-mobile.svg';

function Header({ companyInfo, toggleCompanyInfo, widthWindow }) {
  const headerClass = companyInfo ? 'header header_place_other' : 'header header_place_main';
  const buttonClass = companyInfo ? 'header__btn-back visible' : 'header__btn-back hidden';

  return (
    <header className={headerClass}>
      {
        widthWindow < TABLET_WIDTH
        ?
        <>
          <button type='button' className={buttonClass} onClick={toggleCompanyInfo}>Назад</button>
          <img src={logoMobile} className='header__logo_mobile' alt='Логотип S7' />
        </>
        :
        <nav className='nav'>
          <button type='button' className='nav__btn nav__btn-employee' disabled={!companyInfo ? 'disabled' : null} onClick={toggleCompanyInfo}>о сотруднике</button>
          <button type='button' className='nav__btn nav__btn-company' disabled={companyInfo ? 'disabled' : null} onClick={toggleCompanyInfo}>о компании</button>
        </nav>
      }
    </header>
  );
}

export default Header;
