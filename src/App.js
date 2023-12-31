import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import Nav from './components/nav';
import "./App.css";

export default function App() {
    //Use the Route component to specify each route
  return (
    <div className='App'>
      <Nav /> 
        <Routes>
            <Route path='/' element={<Main/>}/>
            < Route path='/currencies' element={<Currencies/>}/>
            <Route path='/price/:symbol' element ={<Price/>}/>
        </Routes>
    </div>
  );
}
