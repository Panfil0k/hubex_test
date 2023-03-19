import React from 'react';

import './CompanyCard.scss';

import Icons from '../Icons/Icons';
import ContactList from '../ContactList/ContactList';

import { companyMock } from '../../mocks/company';

function CompanyCard() {
  const paragraphs = companyMock.description.split('\n');

  return (
    <section className='company'>
      <h2 className='company__title'>{companyMock.name}</h2>

      {paragraphs.map(paragraph =>
        <p className='company__description'>{paragraph}</p>
      )}

      <ul className='contacts'>
        <li className='contacts__item'>
          <a href={`tel:${companyMock.tel}`}>
            <Icons
              name='phone-big'
              className='contacts__icon'
              role='img'
              alt='Номер мобильного телефона'
            />
          </a>
        </li>
        <li className='contacts__item'>
          <a href={`mailto:${companyMock.email}`}>
            <Icons
              name='email-big'
              className='contacts__icon'
              role='img'
              alt='Email'
            />
          </a>
        </li>
        <li className='contacts__item'>
          <a href={companyMock.site} target='_blank' rel='noopener noreferrer'>
            <Icons
              name='site-big'
              className='contacts__icon'
              role='img'
              alt='Сайт'
            />
          </a>
        </li>
        <ContactList contacts={companyMock.social}/>
      </ul>
    </section>
  );
}

export default CompanyCard;
