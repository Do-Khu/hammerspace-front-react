import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Home';
import { Aboutpage } from './pages/About';

function App() {
  return (
    <div className="App">
     <header> Hammerspace </header>
     <nav>
      ...
     </nav>
     <hr />

    <Routes>
      <Route path="/" element={<Aboutpage />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
    </div>
  );
}

export default App;
