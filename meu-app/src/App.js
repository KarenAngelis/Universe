import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Universe from './components/Universe/Universe';
import Exploration from './components/Exploration/Exploration';
import Header from './components/Header/Header';
import './App.css'; // Seus estilos globais
import homeBackground from './assets/mountains-universe-1.png';
import universeBackground from './assets/mountains-universe02.png';
import explorationBackground from './assets/mountains-universe-3.png';

function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

function PageLayout() {
  const location = useLocation();
  const backgroundImages = {
    '/': homeBackground,
    '/universe': universeBackground,
    '/exploration': explorationBackground,
    '/o-universo': universeBackground // Adicionando rota para a página "O universo"
  };

  const currentBackground = backgroundImages[location.pathname] || homeBackground;

  const appStyle = {
    backgroundImage: `url(${currentBackground})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100vw'
  };

  return (
    <div style={appStyle}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/o-universo" element={<Universe />} /> {/* Rota para a página "O universo" */}
      </Routes>
    </div>
  );
}

export default App;

