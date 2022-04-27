import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  );
}

export default App;
