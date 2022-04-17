import React from 'react';
import { SignInPage } from './pages/SignInPage';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import { useSelector } from 'react-redux';
import {RootState}  from './reducer/store';
const user= useSelector((state:RootState )=> state.app.user);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage/>} />
      </Routes>
    </div>
  );
}

export default App;
