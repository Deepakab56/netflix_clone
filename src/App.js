import React from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Login from './Auth/Login';
import { AuthProvider } from './Auth/AuthContext';
import Setup from './Auth/Setup';
import HomeScreen from './Pages/HomeScreen';



function App() {
  return (
    <>
      <BrowserRouter>
       <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Header />}> </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/setup' element={<Setup/>}></Route>
            <Route path='/homescreen' element={<HomeScreen/>}></Route>
          </Routes>
         
          </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
