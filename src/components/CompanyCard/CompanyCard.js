import React from 'react';

import './CompanyCard.scss';

import Contacts from '../Contacts/Contacts';

import { companyMock } from '../../mocks/company';

function CompanyCard({ widthWindow }) {
  const paragraphs = companyMock.description.split('\n');

  return (
    <section className='company'>
      <h2 className='company__title'>{companyMock.name}</h2>

      <div className='wrapper'>
        {paragraphs.map(paragraph =>
          <p key={paragraph} className='company__description'>{paragraph}</p>
        )}
      </div>

      <Contacts widthWindow={widthWindow} data={companyMock} />
    </section>
  );
}

export default CompanyCard;
