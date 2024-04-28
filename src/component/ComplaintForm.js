import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Document, Page, Text, StyleSheet, View, Image, BlobProvider } from '@react-pdf/renderer';
import '../css/ComplaintsForm.css';
// import ComplaintsTable from './ComplaintsTable';

import logo from '../img/home/image1.jpg';
// import seal from '../img/home/image1.jpg';
// import signaturePlaceholder from '../img/home/image1.jpg';


// Styles for the PDF document
const styles = StyleSheet.create({
    page: {
        padding: 30,
        // fontFamily: 'Arial, sans-serif',
        fontSize: 12,
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 60,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        display: 'table',
        width: '100%',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        display: 'table-row',
    },
    tableCellLabel: {
        display: 'table-cell',
        width: '30%',
        fontWeight: 'bold',
        paddingRight: 10,
    },
    tableCellValue: {
        display: 'table-cell',
    },
    footer: {
        marginTop: 20,
        fontSize: 12,
        textAlign: 'center',
    },
    signaturesContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signature: {
        width: 100,
        height: 50,
        marginHorizontal: 20,
    },
});


function ComplaintForm({ onSubmit }) {
    // const { userType } = useParams();
    const [complaintData, setComplaintData] = useState({
        assignedWorker: '', // Initially empty
        status: 'Pending',
        // ... (initial form data)
    });
    const [showPreview, setShowPreview] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaintData({ ...complaintData, [name]: value });
    };

    const handleImageChange = (e) => {
        setComplaintData({ ...complaintData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPreview(true);
    };

    const handleEdit = () => {
        setShowPreview(false);
    };

    const handleFinalSubmit = (e) => {
        // Logic to submit form data to the server
        console.log('Final submission:', complaintData);
        onSubmit(complaintData);
        // Redirect or show a success message
    };

    const ComplaintDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={logo} />
                </View>

                <Text style={styles.title}>Complaint Form</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Identifier:</Text>
                    <Text style={styles.value}>{complaintData.identifier}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Title:</Text>
                    <Text style={styles.value}>{complaintData.title}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Issue:</Text>
                    <Text style={styles.value}>{complaintData.issue}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>{complaintData.location}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Nature of the Complaint:</Text>
                    <Text style={styles.value}>{complaintData.nature}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Phone Number:</Text>
                    <Text style={styles.value}>{complaintData.phone}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Priority:</Text>
                    <Text style={styles.value}>{complaintData.priority}</Text>
                </View>
                {complaintData.image && (
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Image Attached:</Text>
                        <Text style={styles.value}>{complaintData.image.name}</Text>
                    </View>
                )}

                <Text style={styles.footer}>
                    This is an electronic copy of the official complaint form.
                </Text>
            </Page>
        </Document>
    );




    return (
        <div className="complaint-form-container" onClick={(e) => e.stopPropagation()}>
            {!showPreview ? (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h1>Complaint Form</h1>
                    <div className="input-group">
                        <label htmlFor="identifier">Identifier</label>
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
                    <input type="hidden" name="assignedWorker" value={complaintData.assignedWorker} />
                    <input type="hidden" name="status" value={complaintData.status} />
                    <button type="submit">Submit Complaint</button>
                </form>
            ) : (
                <BlobProvider document={ComplaintDocument}>
                    {({ blob, url, loading, error }) => {
                        if (loading) {
                            return <div>Loading preview...</div>;
                        }
                        return (
                            <div>
                                <iframe src={url} style={{ width: '100%', height: '580px' }} title="Preview" />
                                <div>
                                    {/* <ComplaintsTable complaints={[complaintData]} /> */}
                                    <button onClick={handleEdit}>Edit</button>
                                    <button onClick={handleFinalSubmit}>Confirm and Submit</button>
                                    <a href={url} download="ComplaintDetails.pdf">
                                        <button>Download PDF</button>
                                    </a>
                                </div>
                            </div>
                        );
                    }}
                </BlobProvider>
            )}
        </div>
    );
}

export default ComplaintForm;
