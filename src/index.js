import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Ingresar from './components/Ingresar';
import Perfil from './components/Perfil';
import UseProvider from './context/datos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UseProvider>
      <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/ingresar' element={<Ingresar />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </UseProvider>
  </BrowserRouter>
);
