import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import Debit from './components/Debit.js';
import Credit from './components/Credit.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Debit' element={<Debit />} />
        <Route path='/Credit' element={<Credit />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
