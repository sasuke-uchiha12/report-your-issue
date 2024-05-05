import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ComplaintsTable.css'; // Import your CSS file for styling

function ComplaintsTable() {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/getComplaints');
        setComplaints(response.data);
      } catch (error) {
        setError('Error fetching complaints');
        console.error('Error fetching complaints:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  if (isLoading) {
    return <div>Loading complaints...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table className="complaints-table">
      <thead>
        <tr>
          <th>Complaint ID</th>
          <th>Description</th>
          <th>Location</th>
          <th>Department Ph.No.</th>
          <th>Severity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((complaint) => {
          return (
            <tr key={complaint._id}>
              <td>{complaint._id}</td>
              <td>{complaint.description}</td>
              <td>{complaint.location}</td>
              <td>{complaint.departmentPhoneNumber}</td>
              <td>{complaint.severity}</td>
              <td>{complaint.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ComplaintsTable;
