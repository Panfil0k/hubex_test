import React from 'react';

import './Contacts.scss';

import Icons from '../Icons/Icons';
import ContactList from '../ContactList/ContactList';
import SocialList from '../SocialList/SocialList';

import { TABLET_WIDTH } from '../../utils/constants';

function Contacts({ data, widthWindow }) {
  return (
    <ul className='contacts'>
      {
        widthWindow < TABLET_WIDTH
        ?
        <>
          <li className='contacts__item'>
            <a href={`tel:${data.contacts.tel}`}>
              <Icons
                name='phone-big'
                className='contacts__icon'
                role='img'
                alt='Номер мобильного телефона'
              />
            </a>
          </li>
          <li className='contacts__item'>
            <a href={`mailto:${data.contacts.email}`}>
              <Icons
                name='email-big'
                className='contacts__icon'
                role='img'
                alt='Email'
              />
            </a>
          </li>
          <li className='contacts__item'>
            <a href={data.contacts.site} target='_blank' rel='noopener noreferrer'>
              <Icons
                name='site-big'
                className='contacts__icon'
                role='img'
                alt='Сайт'
              />
            </a>
          </li>
          <SocialList contacts={data.social}/>
        </>
        :
        <>
          <ContactList contacts={data.contacts}/>
          <li className='contacts__item'>
              <Icons
                name='share'
                className='contacts__icon'
                role='img'
                alt='Социальные сети'
              />
            <ul className='contacts__sublist'>
              <SocialList contacts={data.social}/>
            </ul>
          </li>
        </>
      }
    </ul>
  );
}

export default Contacts;
