import React from 'react';
import '../css/ComplaintsTable.css'; // Import your CSS file for styling

function ComplaintsTable({ complaints }) {
    return (
        <table className="complaints-table">
            <thead>
                <tr>
                    <th>Identifier</th>
                    <th>Title</th>
                    <th>Issue</th>
                    {/* ... other headers */}
                </tr>
            </thead>
            <tbody>
                {complaints.map((complaint, index) => (
                    <tr key={index}>
                        <td>{complaint.identifier}</td>
                        <td>{complaint.title}</td>
                        <td>{complaint.issue}</td>
                        {/* ... other complaint data */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ComplaintsTable;
