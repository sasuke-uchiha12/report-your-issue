import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
// import LoginTypeSelection from './component/LoginTypeSelection';
import LoginPage from './component/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginTypeSelection />} /> */}
        <Route path="/superadmin" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
