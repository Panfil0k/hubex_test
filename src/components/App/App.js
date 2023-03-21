import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from '../Header/Header';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import CompanyCard from '../CompanyCard/CompanyCard';

function App() {
  const [companyInfo, setCompanyInfo] = useState(false);
  const [widthWindow, setWidthWindow] = React.useState(document.documentElement.clientWidth);

  function toggleCompanyInfo() {
    setCompanyInfo(!companyInfo);
  }

  function updateWidthWindow() {
    setWidthWindow(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthWindow);
    return () => window.removeEventListener('resize', updateWidthWindow);
  }, []);

  return (
    <div className='page'>
      <Header
        companyInfo={companyInfo}
        toggleCompanyInfo={toggleCompanyInfo}
        widthWindow={widthWindow}
      />
      <main className='main'>
        {
          !companyInfo
          ?
          <EmployeeCard
            showCompanyInfo={toggleCompanyInfo}
            widthWindow={widthWindow}
          />
          :
          <CompanyCard
            widthWindow={widthWindow}
          />
        }
      </main>
    </div>
  );
}

export default App;
