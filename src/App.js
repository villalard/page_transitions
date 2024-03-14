import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
