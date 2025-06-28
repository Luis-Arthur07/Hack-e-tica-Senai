import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ListaProfissionais from './components/ListaProfissionais';
import VagasPorFuncionario from './components/VagasPorFuncionario';
import Footer from './components/Footer';
import Empresas from './Empresas';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/vagas" element={<VagasPorFuncionario />} />
        <Route path="/profissionais" element={<ListaProfissionais />} />
      </Routes>
      {/* Só renderiza Footer se não estiver na Home */}
      {/* window.location.pathname !== '/' ? <Footer /> : null */}
    </Router>
  );
}
