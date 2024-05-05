import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import SignupPage from './component/SignupPage';
import LoginPage from './component/LoginPage';
import LoginTypeSelection from './component/LoginTypeSelection';
import ComplaintForm from './component/ComplaintForm';
import SuperAdminDashboard from './component/Dashboard/SuperAdminDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import DepartmentDashboard from './component/Dashboard/DepartmentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<LoginTypeSelection />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/complaint/:userType" element={<ComplaintForm />} />
        <Route path="/superadmin_dashboard" element={<SuperAdminDashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/department_dashboard" element={<DepartmentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

