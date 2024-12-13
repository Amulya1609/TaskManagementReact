
import './App.css';
import Button from 'react-bootstrap/Button';
import Home from './components/Home';
import Login from './components/Login';
import Tasks from './components/Tasks';
import NoPage from './components/NoPage';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';


function App() {
  return (
    
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="*" element={<NoPage/>}/>
         

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
