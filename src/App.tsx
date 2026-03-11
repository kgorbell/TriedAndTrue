import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </div>
  );
};

export default App;
