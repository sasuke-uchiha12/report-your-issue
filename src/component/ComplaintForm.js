import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ComplaintsForm.css';

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
    const [preview, setPreview] = useState(false);

    // const onSubmit = (complaintData) => {
    //     // Process the complaintData, e.g., send to the backend
    //     console.log(complaintData);
    //     // You could set the preview state to true here as well
    //     setPreview(true);
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaintData({ ...complaintData, [name]: value });
    };

    const handleImageChange = (e) => {
        setComplaintData({ ...complaintData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPreview(true);
    };

    const handleEdit = () => {
        setPreview(false);
    };

    const handleFinalSubmit = () => {
        const formData = new FormData();
        Object.keys(complaintData).forEach(key => {
            formData.append(key, complaintData[key]);
        });
        // Here you would send the formData to the server
        console.log("Final submission", formData);
        // navigate('/dashboard');
    };

    return (
        <div className="complaint-form-container" onClick={(e) => e.stopPropagation()}>
            {preview ? (
                <div>
                    <h2>Preview Your Complaint</h2>
                    <p><strong>Identifier:</strong> {complaintData.identifier}</p>
                    <p><strong>Title:</strong> {complaintData.title}</p>
                    <p><strong>Issue:</strong> {complaintData.issue}</p>
                    <p><strong>Location:</strong> {complaintData.location}</p>
                    <p><strong>Nature:</strong> {complaintData.nature}</p>
                    <p><strong>Phone:</strong> {complaintData.phone}</p>
                    <p><strong>Priority:</strong> {complaintData.priority}</p>
                    {complaintData.image && (
                        <p>
                            <strong>Image:</strong> {complaintData.image.name}
                        </p>
                    )}
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleFinalSubmit}>Confirm and Submit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="input-group">
                        <label htmlFor="identifier">
                            {userType === 'student' ? 'Student Number' : 'Department ID'}
                            {userType === 'Department' ? 'Department Name' : ' '}

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
            )}
        </div>
    );
}

export default ComplaintForm;
