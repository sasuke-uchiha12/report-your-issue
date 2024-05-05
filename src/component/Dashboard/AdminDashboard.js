import React, { useState } from 'react';
//import ComplaintForm from '../ComplaintForm';
import ComplaintsTable from '../ComplaintsTable';
import DashHeader from '../DashHeader';
// import './AdminDashboard.css'; // Assuming you have separate styles for the admin dashboard

const AdminDashboard = () => {
    const [complaints, setComplaints] = useState([]);

    // Function to handle assigning worker and updating status
    const handleAssignWorkerAndStatus = (index, assignedWorker, status) => {
        const updatedComplaints = [...complaints];
        updatedComplaints[index].assignedWorker = assignedWorker;
        updatedComplaints[index].status = status;
        setComplaints(updatedComplaints);
    };

    return (
        <div>
            <DashHeader />
            <div className="dashboard">
                <div className="dashboard-container">
                    <h1>Complaints (Admin Dashboard)</h1>
                    <ComplaintsTable complaints={complaints} handleAssignWorkerAndStatus={handleAssignWorkerAndStatus} />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
