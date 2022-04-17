import React, { useEffect } from 'react';
import { SignIn } from './pages/SignIn';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer/store';
import { setUser, setToken } from './reducer/app';
import { meAPI } from './api/index';
import { HomePage } from './pages/HomePage';


function App() {

  const dispatch = useDispatch();
 
  const token = useSelector((state: RootState) => state.app.token);
  async function saveUser(token: string) {
    const user = await meAPI(token);
    dispatch(setUser(user));
  }
  
  
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('auth-token');
    console.log({ tokenLocalStorage });
    if (tokenLocalStorage)
       {
      dispatch(setToken(tokenLocalStorage));
      saveUser(tokenLocalStorage);
    }
    
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
    </div>
  );
}


export default App
