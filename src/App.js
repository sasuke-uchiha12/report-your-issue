import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import LoginTypeSelection from './component/LoginTypeSelection';
import ComplaintForm from './component/ComplaintForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginTypeSelection />} />
        <Route path="/login/:userType" element={<LoginPage />} />
        <Route path="/complaint/:userType" element={<ComplaintForm />} />

        {/* <Route path="/complaint/student" element={<ComplaintForm userType="student" />} />
        <Route path="/complaint/staff" element={<ComplaintForm userType="staff" />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
