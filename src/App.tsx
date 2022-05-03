import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
