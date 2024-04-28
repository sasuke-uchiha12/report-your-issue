import React from 'react';
import '../css/ComplaintsTable.css'; // Import your CSS file for styling

function ComplaintsTable({ complaints, handleAssignWorkerAndStatus }) {
    return (
        <table className="complaints-table">
            <thead>
                <tr>
                    <th>Identifier</th>
                    <th>Title</th>
                    <th>Issue</th>
                    <th>Assigned Worker</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {complaints.map((complaint, index) => (
                    <tr key={index}>
                        <td>{complaint.identifier}</td>
                        <td>{complaint.title}</td>
                        <td>{complaint.issue}</td>
                        <td>{complaint.assignedWorker}</td>
                        <td>{complaint.status}</td>
                        <td>
                            {/* Dropdown to select assigned worker */}
                            <select
                                value={complaint.assignedWorker}
                                onChange={(e) => handleAssignWorkerAndStatus(index, e.target.value, complaint.status)}
                            >
                                <option value="">Select Worker</option>
                                {/* Add options for available workers */}
                                <option value="Worker 1">Worker 1</option>
                                <option value="Worker 2">Worker 2</option>
                                {/* Add more options as needed */}
                            </select>

                            {/* Dropdown to select status */}
                            <select
                                value={complaint.status}
                                onChange={(e) => handleAssignWorkerAndStatus(index, complaint.assignedWorker, e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Assigned">Assigned</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ComplaintsTable;
