import React from 'react';

import './ContactItem.scss';

import Icons from '../../Icons/Icons';
import changeCapitalLetter from '../../../utils/changeCapitalLetter';

function ContactItem({ name, contact }) {
  return (
    <li className='employee__contacts-item'>
      <a href={contact}>
        <Icons
          name={name}
          className='employee__contacts-social-icon'
          role='img'
          alt={changeCapitalLetter(name)}
        />
      </a>
    </li>
  );
}

export default ContactItem;
