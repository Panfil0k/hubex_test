import React from 'react';

import './EmployeeCard.scss';

import Icons from '../Icons/Icons';
import ContactList from '../ContactList/ContactList';

import contactPhoto from '../../images/contact-photo.png';
import companyLogo from '../../images/logo-link.svg';
import { employeeMock } from '../../mocks/employee';

function EmployeeCard({ showCompanyInfo }) {
  return (
    <section className='employee'>
      <img src={contactPhoto} className='employee__photo' alt='Фотография контакта' />

      <h1 className='employee__name'>{employeeMock.name}</h1>

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
          <span>{employeeMock.address}</span>
        </li>
      </ul>

      <button type='button' className='employee__btn-save'>Сохранить контакт</button>

      <ul className='contacts'>
        <li className='contacts__item'>
          <a href={`tel:${employeeMock.mobileTel}`}>
            <Icons
              name='phone-big'
              className='contacts__icon'
              role='img'
              alt='Номер мобильного телефона'
            />
          </a>
        </li>
        <li className='contacts__item'>
          <a href={`mailto:${employeeMock.email}`}>
            <Icons
              name='email-big'
              className='contacts__icon'
              role='img'
              alt='Email'
            />
          </a>
        </li>
        <li className='contacts__item'>
          <a href={employeeMock.site} target='_blank' rel='noopener noreferrer'>
            <Icons
              name='site-big'
              className='contacts__icon'
              role='img'
              alt='Сайт'
            />
          </a>
        </li>
        <ContactList contacts={employeeMock.social}/>
      </ul>

      <div className='employee__job' onClick={showCompanyInfo}>
        <img src={companyLogo} className='employee__job-logo' alt='S7' />
        <h2 className='employee__job-name'>S7 Airlines</h2>
        <p className='employee__job-description'>Крупнейшая частная авиакомпания России</p>
      </div>
    </section>
  );
}

export default EmployeeCard;
