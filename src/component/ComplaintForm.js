import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ComplaintsForm.css';

function ComplaintForm() {
    const { userType } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier: '',
        title: '',
        issue: '',
        location: '',
        nature: '',
        priority: 'low',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would typically send the formData to your server
        // For demonstration, we'll just log it to the console
        console.log(formData);

        // Assuming the submission is successful, you can navigate to a confirmation page or dashboard
        navigate('/dashboard');
    };

    return (
        <div className="complaint-form-container">
            <h2>{userType.charAt(0).toUpperCase() + userType.slice(1)} Complaint Form</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    {userType === 'student' ? 'Student Number' : 'Staff ID'}:
                    <input
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Issue:
                    <textarea
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Location:
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Nature of the Complaint:
                    <input
                        type="text"
                        name="nature"
                        value={formData.nature}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Priority:
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label>Upload an Image (Optional):
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </label>

                <button type="submit">Submit Complaint</button>
            </form>
        </div>
    );
}

export default ComplaintForm;
