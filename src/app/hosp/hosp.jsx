import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hosp.css'; // Optional: Add styling

const Hosp = () => {
  const [patients, setPatients] = useState([]);
  const [patientStatus, setPatientStatus] = useState([]);
  const [yetToBePatients, setYetToBePatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🚀 TODO: Replace with backend call (GET /patients)
    fetchPatients();
    fetchAllPatientStatuses();
    fetchNotAdmittedPatients();
  }, []);

  const fetchPatients = () => {
    // Mock data for now
    const data = [
      { patientId: 1, patientName: 'John Doe', age: 30, damageSeverity: 'High', details: 'Head injury' },
      { patientId: 2, patientName: 'Jane Smith', age: 25, damageSeverity: 'Low', details: 'Minor bruises' }
    ];
    setPatients(data);
  };

  const fetchAllPatientStatuses = () => {
    // Mock data for now
    const data = [
      {
        patient: { id: 1, name: 'John Doe' },
        status: 'Under Treatment',
        statusUpdatedTime: '2025-04-29 14:00',
        notes: 'Stable condition'
      }
    ];
    setPatientStatus(data);
  };

  const fetchNotAdmittedPatients = () => {
    // Mock data for now
    const data = [
      {
        patient: { id: 3, name: 'Mike Taylor' },
        status: 'Pending',
        statusUpdatedTime: '2025-04-29 13:45',
        notes: 'Needs evaluation'
      }
    ];
    setYetToBePatients(data);
  };

  const openAddStatusForm = () => {
    navigate('/patient-status-form-model'); // Adjust route if needed
  };

  return (
    <div>
      <h1>Hospital Page</h1>

      <div className="card1">
        <div className="small-card">
          <h3>Dashboard</h3>
        </div>

        <div className="inner-card">
          <h4>Patient List</h4>
          <table border="1">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Damage Severity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.patientId}>
                  <td>{patient.patientId}</td>
                  <td>{patient.patientName}</td>
                  <td>{patient.age}</td>
                  <td>{patient.damageSeverity}</td>
                  <td>{patient.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><br />

        <div className="inner-card">
          <h4>Patient Status</h4>
          <table border="1">
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
              {patientStatus.map((ps, index) => (
                <tr key={index}>
                  <td>{ps.patient.id}</td>
                  <td>{ps.patient.name}</td>
                  <td>{ps.status}</td>
                  <td>{ps.statusUpdatedTime}</td>
                  <td>{ps.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="add-btn" onClick={openAddStatusForm}>+</button>
      </div><br />

      <div className="card2">
        <div className="small-card">
          <h3>Pending</h3>
        </div>

        <div className="inner-card">
          <h4>Victim Status</h4>
          <table border="1">
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
              {yetToBePatients.map((ps, index) => (
                <tr key={index}>
                  <td>{ps.patient.id}</td>
                  <td>{ps.patient.name}</td>
                  <td>{ps.status}</td>
                  <td>{ps.statusUpdatedTime}</td>
                  <td>{ps.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hosp;
