
import './App.css';
import React from 'react';
import Header from './partials/header/Header'
import Baner from './partials/baner/Baner';
import RowPoat from './partials/RowPost/RowPoat';
import { action,original } from './Constent/urls';

function App() {
  return (
    <div className="App">
      <Header/>
      <Baner/>
      <RowPoat url={original} title='Netflix Orginls' />
      <RowPoat url={action} isSmall title='Action Movies' />
      <RowPoat url={action} isSmall title='Action Movies' />
      
    </div>
  );
}

export default App;
