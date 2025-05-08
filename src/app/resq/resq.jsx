import React, { useState, useEffect } from 'react';

// Mock services to simulate API calls for SOS List, Patient Status, and Hospital Info
const fetchSosList = async () => {
  // You can replace this with an actual API call
  return [
    { location: 'Location 1', ipAddress: '192.168.0.1', time: '10:00 AM', message: 'Help needed!' },
    { location: 'Location 2', ipAddress: '192.168.0.2', time: '10:30 AM', message: 'Emergency situation!' },
  ];
};

const fetchPatientStatus = async () => {
  // You can replace this with an actual API call
  return [
    { patient: { id: 1, name: 'John Doe' }, status: 'Injured', statusUpdatedTime: '10:15 AM', notes: 'Need urgent care' },
    { patient: { id: 2, name: 'Jane Doe' }, status: 'Critical', statusUpdatedTime: '10:45 AM', notes: 'Requires immediate transport' },
  ];
};

const fetchHospitalInfo = async () => {
  // You can replace this with an actual API call
  return [
    { hospId: 101, hospName: 'City Hospital', availability: 'Available', numberOfBeds: 50 },
    { hospId: 102, hospName: 'Central Hospital', availability: 'Full', numberOfBeds: 0 },
  ];
};

const Resq = () => {
  const [sosList, setSosList] = useState([]);
  const [patientStatus, setPatientStatus] = useState([]);
  const [hospInfo, setHospInfo] = useState([]);
  const [showAddStatusForm, setShowAddStatusForm] = useState(false);

  useEffect(() => {
    // Fetch data on component mount
    fetchSosList().then((data) => setSosList(data));
    fetchPatientStatus().then((data) => setPatientStatus(data));
    fetchHospitalInfo().then((data) => setHospInfo(data));
  }, []);

  const openAddStatusForm = () => {
    setShowAddStatusForm(true);
  };

  const closeAddStatusForm = () => {
    setShowAddStatusForm(false);
  };

  return (
    <div>
      <h1>Rescue Team Dashboard</h1>
      
      <div className="card1">
        <div className="small-card">
          <h3>Victim Dashboard</h3>
        </div>

        <div className="inner-card">
          <h4>SOS List</h4>
          <table id="sosList" border="1">
            <thead>
              <tr>
                <th>Location</th>
                <th>IP Address</th>
                <th>Time</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {sosList.map((li, index) => (
                <tr key={index}>
                  <td>{li.location}</td>
                  <td>{li.ipAddress}</td>
                  <td>{li.time}</td>
                  <td>{li.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <br />
        <div className="inner-card">
          <h4>Victim Status</h4>
          <table id="sosList" border="1">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient</th>
                <th>Status</th>
                <th>Updated Time</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {patientStatus.map((status, index) => (
                <tr key={index}>
                  <td>{status.patient.id}</td>
                  <td>{status.patient.name}</td>
                  <td>{status.status}</td>
                  <td>{status.statusUpdatedTime}</td>
                  <td>{status.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <button className="add-btn" onClick={openAddStatusForm}>+</button>
      </div>

      {showAddStatusForm && (
        <div className="add-status-form">
          {/* Form to add new status, can be expanded */}
          <h2>Add Patient Status</h2>
          <button onClick={closeAddStatusForm}>Close</button>
        </div>
      )}

      <div className="card2">
        <div className="small-card">
          <h3>Hospital Status</h3>
        </div>

        <div className="inner-card">
          <h4>Hospital Status</h4>
          <table id="hospList" border="1">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Availability</th>
                <th>Number Of Beds</th>
              </tr>
            </thead>
            <tbody>
              {hospInfo.map((h, index) => (
                <tr key={index}>
                  <td>{h.hospId}</td>
                  <td>{h.hospName}</td>
                  <td>{h.availability}</td>
                  <td>{h.numberOfBeds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resq;
