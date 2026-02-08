import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Template1 from './components/template1';
import Template2 from './components/CVTemplate2';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Routes>
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/" element={<Navigate to="/template1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
