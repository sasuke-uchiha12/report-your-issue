import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ComplaintsForm.css'; // Ensure you have this CSS file in the correct path

function ComplaintForm() {
    const { userType } = useParams();
    const navigate = useNavigate();
    const [complaintData, setComplaintData] = useState({
        identifier: '',
        title: '',
        issue: '',
        location: '',
        nature: '',
        phone: '',
        priority: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaintData({ ...complaintData, [name]: value });
    };

    const handleImageChange = (e) => {
        setComplaintData({ ...complaintData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(complaintData).forEach(key => {
            formData.append(key, complaintData[key]);
        });

        console.log("Form data ready to be sent to the backend:", formData);

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        // navigate('/dashboard');
    };

    return (
        <div className="complaint-form-container">
            <h2>{`${userType.charAt(0).toUpperCase() + userType.slice(1)} Complaint Form`}</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="input-group">
                    <label htmlFor="identifier">
                        {userType === 'student' ? 'Student Number' : 'Staff ID'}
                        {userType === 'Department'? 'Department Name' : ' '};
                    </label>
                    <input
                        type="text"
                        id="identifier"
                        name="identifier"
                        value={complaintData.identifier}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={complaintData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="issue">Issue</label>
                    <textarea
                        id="issue"
                        name="issue"
                        value={complaintData.issue}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={complaintData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="nature">Nature of the Complaint</label>
                    <input
                        type="text"
                        id="nature"
                        name="nature"
                        value={complaintData.nature}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={complaintData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                        id="priority"
                        name="priority"
                        value={complaintData.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="image">Image (Optional)</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                <button type="submit">Submit Complaint</button>
            </form>
        </div>
    );
}

export default ComplaintForm;
