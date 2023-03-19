import React from 'react';

import Icons from '../../Icons/Icons';
import changeCapitalLetter from '../../../utils/changeCapitalLetter';

function ContactItem({ name, contact }) {
  return (
    <li className='contacts__item'>
      <a href={contact}>
        <Icons
          name={name}
          className='contacts__social-icon'
          role='img'
          alt={changeCapitalLetter(name)}
        />
      </a>
    </li>
  );
}

export default ContactItem;
