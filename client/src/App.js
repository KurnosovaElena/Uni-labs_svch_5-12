import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Main } from './pages/Main/Main';
import { Specialists } from './pages/Specialists/Specialists';
import { Contacts } from './pages/Contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
