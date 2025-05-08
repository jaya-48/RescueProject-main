import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './patient-status.css'; // Optional, for styling
 


const PatientStatus = ({ patientId = null, onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    status: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting form...');
    console.log('Patient ID:', patientId || formData.id);
    console.log('Status:', formData.status);
    console.log('Notes:', formData.notes);
    console.log('Timestamp:', new Date().toISOString());

    // ✅ Later, you will replace this log with axios POST/PUT request

    navigate('/hosp');
  };

  const handleCancel = () => {
    setFormData({ id: '', status: '', notes: '' });
    if (onClose) onClose();
    navigate('/hosp');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Patient Status Update</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input
              name="id"
              type="text"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder="Enter ID"
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select status</option>
              <option value="Admitted">Admitted</option>
              <option value="Not-Admitted">Not-Admitted</option>
              <option value="Under Observation">Under Observation</option>
              <option value="Discharged">Discharged</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any additional notes"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
  

export default PatientStatus;
