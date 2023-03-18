import React from 'react';

import './App.scss';

import Header from '../Header/Header';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function App() {
  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <EmployeeCard />
      </main>
    </div>
  );
}

export default App;
