import React, { useState } from 'react';
import ComplaintForm from '../ComplaintForm';
import ComplaintsTable from '../ComplaintsTable';
import DashHeader from '../DashHeader';
import './DepartmentDashboard.css'

const DepartmentDashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [complaints, setComplaints] = useState([]);

    const handleFormSubmit = (complaint) => {
        setComplaints([...complaints, complaint]);
        setShowForm(false);
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    // const handleOverlayClick = (e) => {
    //     // Assuming the overlay has a unique class name 'form-overlay'
    //     if (e.target.classList.contains('form-overlay')) {
    //         setShowForm(false);
    //     }
    // };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div>
        <DashHeader/>
            <div className={`dashboard ${showForm ? 'overlay-active' : ''}`}>
                {showForm && (
                    <div className="form-overlay" onClick={closeForm}>
                        <ComplaintForm onSubmit={handleFormSubmit} />
                    </div>
                )}
                <div className="dashboard-container">
                    <h1>Complaints</h1>

                    <ComplaintsTable complaints={complaints} />
                    <button onClick={toggleFormVisibility}>Add New Complaint</button>
                </div>
            </div>
        </div>
    );
}

export default DepartmentDashboard;
