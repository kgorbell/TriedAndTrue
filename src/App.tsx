import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import {
  Home
} from './pages';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
