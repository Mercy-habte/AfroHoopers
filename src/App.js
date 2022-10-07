import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './screens/Home';
import Registartion from './screens/Registartion';
import TermsAndConditions from './screens/TermsAndConditions';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Registartion/>}></Route>
        <Route path='/termsAndconditions' element={<TermsAndConditions/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
