import React from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Login from './Auth/Login';


function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Header/>}> </Route>
    <Route path='/login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
