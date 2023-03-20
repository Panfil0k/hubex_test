import React from 'react';

import './EmployeeCard.scss';

import Icons from '../Icons/Icons';
import Contacts from '../Contacts/Contacts';
import SliderPhoto from '../SliderPhoto/SliderPhoto';
import { TABLET_WIDTH } from '../../utils/constants';

import contactPhoto from '../../images/contact-photo.png';
import companyLogo from '../../images/logo-desktop.svg';
import companyLogoLink from '../../images/logo-link.svg';

import { employeeMock } from '../../mocks/employee';

function EmployeeCard({ showCompanyInfo, widthWindow }) {
  return (
    <section className='employee'>
      {
        widthWindow < TABLET_WIDTH
        ?
        <img src={contactPhoto} className='employee__photo' alt='Фотография контакта' />
        :
        <>
          <SliderPhoto />
          <img src={companyLogo} className='employee__company-logo' alt='Логотип S7 Airlines' />
        </>
      }

      <h1 className='employee__name'>{employeeMock.name}</h1>

      {
        widthWindow < TABLET_WIDTH
        ?
        <ul className='employee__info'>
          <li className='employee__info-item'>
            <Icons
              name='person'
              className='employee__info-icon'
              role='img'
              alt='Должность'
            />
            <span>{employeeMock.profession}</span>
          </li>
          <li className='employee__info-item'>
            <Icons
              name='pointer'
              className='employee__info-icon'
              role='img'
              alt='Адрес'
            />
            <span>{employeeMock.contacts.address}</span>
          </li>
        </ul>
        :
        <p className='employee__profession'>{employeeMock.profession}</p>
      }

      <button type='button' className='employee__btn-save'>Сохранить контакт</button>

      <Contacts widthWindow={widthWindow} data={employeeMock} />

      {
        widthWindow < TABLET_WIDTH
        ?
        <div className='employee__job' onClick={showCompanyInfo}>
          <img src={companyLogoLink} className='employee__job-logo' alt='S7' />
          <h2 className='employee__job-name'>S7 Airlines</h2>
          <p className='employee__job-description'>Крупнейшая частная авиакомпания России</p>
        </div>
        :
        null
      }
    </section>
  );
}

export default EmployeeCard;
