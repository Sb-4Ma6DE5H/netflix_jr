
import './App.css';
import React from 'react';
import Header from './partials/header/Header'
import Baner from './partials/baner/Baner';
import RowPoat from './partials/RowPost/RowPoat';

function App() {
  return (
    <div className="App">
      <Header/>
      <Baner/>
      <RowPoat/>
    </div>
  );
}

export default App;
