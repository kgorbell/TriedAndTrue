import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Footer from './components/Footer/Footer';

import './styles/App.scss';


const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
