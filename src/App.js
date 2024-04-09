import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
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
        <Route path="/login" element={<LoginTypeSelection />} />
        <Route path="/login/:userType" element={<LoginPage />} />
        <Route path="/complaint/:userType" element={<ComplaintForm />} />
        <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/department/dashboard" element={<DepartmentDashboard />} />

        {/* <Route path="/complaint/student" element={<ComplaintForm userType="student" />} />
        <Route path="/complaint/staff" element={<ComplaintForm userType="staff" />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
