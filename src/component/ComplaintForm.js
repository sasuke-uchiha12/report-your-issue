import React, { useState } from 'react';
import { Document, Page, Text, StyleSheet, View, Image, BlobProvider } from '@react-pdf/renderer';
import '../css/ComplaintsForm.css';
import logo from '../img/home/image1.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      fontSize: 12,
      padding: 30,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    logo: {
      width: 100,
      height: 70,
    },
    universityName: {
      fontSize: 45,
      fontWeight: 'bold',
    },
    address: {
      fontSize: 12,
      marginLeft: 125,
      marginBottom: 10,
      marginTop: -40
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
    },
    table: {
      display: 'table',
      width: 'auto',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
    },
    fieldContainer:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    labelCell: {
      width: '40%',
    },
    inputCell: {
      width: '60%',
    },
    label: {
      fontWeight: 'Bold',

    },
    input: {
      borderBottomWidth: 1,
      padding: 4,
      marginBottom: 5,
      width: '100%',
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 10,
      fontStyle: 'italic',
    },
  });

  function ComplaintForm({ onSubmit }) {
    const navigate = useNavigate();
  
    // State variables for form fields and initial values
    const [formData, setFormData] = useState({
      description: '',
      location: '',
      departmentPhoneNumber: '',
      severity: 'low', // Default value
    });
  
    const [showPreview, setShowPreview] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowPreview(true);
    };
  
    const handleEdit = () => {
      setShowPreview(false);
    };
  
    const handleFinalSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:3001/complaints', formData);
        console.log('Final Submission', response.data);
        setFormData((prevData) => ({
          ...prevData,
          complaintId: prevData.complaintId + 1,
        }));
        navigate('/');
      } catch (error) {
        setError('Error submitting complaint');
        console.error('Error submitting complaint:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const ComplaintDocument = (
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                  <Image style={styles.logo} src={logo} />
                  <Text style={styles.universityName}>ANNA UNIVERSITY</Text>
                </View>
                <View style={styles.header}>
                  <Text style={styles.address}>
                  12, Sardar Patel Rd, Anna University, Guindy, Chennai, Tamil Nadu 600025
                  </Text>
                </View>
          
                <Text style={styles.title}>Complaint Form</Text>
          
                <View style={styles.table}>
                  <View style={[styles.row, styles.fieldContainer]}>
                    <Text style={[styles.label, styles.labelCell]}>Description:</Text>
                    <Text style={[styles.input, styles.inputCell]}>{formData.description}</Text>
                  </View>
                  <View style={[styles.row, styles.fieldContainer]}>
                    <Text style={[styles.label, styles.labelCell]}>Location:</Text>
                    <Text style={[styles.input, styles.inputCell]}>{formData.location}</Text>
                  </View>
                  <View style={[styles.row, styles.fieldContainer]}>
                    <Text style={[styles.label, styles.labelCell]}>Department Phone Number:</Text>
                    <Text style={[styles.input, styles.inputCell]}>{formData.departmentPhoneNumber}</Text>
                  </View>
                  <View style={[styles.row, styles.fieldContainer]}>
                    <Text style={[styles.label, styles.labelCell]}>Severity:</Text>
                    <Text style={[styles.input, styles.inputCell]}>{formData.severity}</Text>
                  </View>
                </View>
          
                <Text style={styles.footer}>
                  This is an electronic copy of the official complaint form.
                </Text>
              </Page>
            </Document>
          );
    
          return (
            <div className="complaint-form-container" onClick={(e) => e.stopPropagation()}>
              {!showPreview ? (
                <form onSubmit={handleSubmit}>
                  <h1>Complaint Form</h1>
                  <div className="input-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
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
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="departmentPhoneNumber">Department Phone Number</label>
                    <input
                      type="tel"
                      id="departmentPhoneNumber"
                      name="departmentPhoneNumber"
                      value={formData.departmentPhoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="severity">Severity</label>
                    <select
                      id="severity"
                      name="severity"
                      value={formData.severity}
                      onChange={handleChange}
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <button type="submit">Preview Complaint</button>
                </form>
              ) : (
                <BlobProvider document={ComplaintDocument}>
                  {({ url, loading }) => {
                    if (loading) {
                      return <div>Loading preview...</div>;
                    }
                    return (
                      <div>
                        <iframe src={url} style={{ width: '100%', height: '580px' }} title="Preview" />
                        <div>
                          <button onClick={handleEdit}>Edit</button>
                          <button onClick={handleFinalSubmit} disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Confirm & Submit'}
                          </button>
                          {error && <p>{error}</p>}
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
