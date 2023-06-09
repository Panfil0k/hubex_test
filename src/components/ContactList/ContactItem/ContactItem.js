import React from 'react';

import Icons from '../../Icons/Icons';
import changeCapitalLetter from '../../../utils/changeCapitalLetter';

function ContactItem({ name, contact }) {
  return (
    <li className='contacts__item'>
      <Icons
        name={name}
        className='contacts__icon'
        role='img'
        alt={changeCapitalLetter(name)}
      />
      <span>{contact}</span>
    </li>
  );
}

export default ContactItem;
