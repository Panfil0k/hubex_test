import React, { useState } from 'react';

import './App.scss';

import Header from '../Header/Header';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import CompanyCard from '../CompanyCard/CompanyCard';

function App() {
  const [companyInfo, setCompanyInfo] = useState(false);

  function toggleCompanyInfo() {
    setCompanyInfo(!companyInfo);
  }

  return (
    <div className='page'>
      <Header companyInfo={companyInfo} closeCompanyInfo={toggleCompanyInfo} />
      <main className='main'>
        { !companyInfo ? <EmployeeCard showCompanyInfo={toggleCompanyInfo} /> : <CompanyCard /> }
      </main>
    </div>
  );
}

export default App;
