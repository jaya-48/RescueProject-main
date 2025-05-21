// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './volunteer.css'; // optional, your CSS styles go here

// const Volunteer = () => {
//   const navigate = useNavigate();

//   const navigateToHelperForm = () => {
//     navigate('/helper-form');
//   };

//   const navigateToServiceProviderForm = () => {
//     navigate('/register-service-provider');
//   };

//   return (
//     <div className="volcontainer">
//       <h1>Volunteer Service</h1>

//       <div className="cards">
//         <div className="card" onClick={navigateToServiceProviderForm}>
//           <p className="card-title">Provide Shelter/Food</p>
//         </div>

//         <div className="card" onClick={navigateToHelperForm}>
//           <p className="card-title">Provide Help</p>
//         </div>
//       </div>

//       {/* "+" Button */}
//       <button className="add-btn" onClick={() => navigate('/report')}>+</button>
//     </div>
//   );
// };

// export default Volunteer;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './volunteer.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Volunteer = () => {
  const navigate = useNavigate();

  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [searchType, setSearchType] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');

  const [editingProvider, setEditingProvider] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', serviceType: '', available: '', location: '' });

  const fetchServiceProviders = async () => {
    try {
      const response = await axios.get('/volunteer/service-providers');
      setServiceProviders(response.data);
      setFilteredProviders(response.data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  useEffect(() => {
    fetchServiceProviders();
  }, []);

  const handleSearch = () => {
    const filtered = serviceProviders.filter((provider) => {
      const matchesType = searchType ? provider.serviceType === searchType : true;
      const matchesAvailability = searchAvailability
        ? String(provider.available) === searchAvailability
        : true;
      return matchesType && matchesAvailability;
    });
    setFilteredProviders(filtered);
  };

  const handleDelete = async (name) => {
    try {
      await axios.delete(`/volunteer/service-provider/name/${name}`);
      fetchServiceProviders();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  const startEditing = (provider) => {
    setEditingProvider(provider.name);
    setEditForm({
      name: provider.name,
      serviceType: provider.serviceType,
      available: provider.available.toString(),
      location: provider.location || '',
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      await axios.put(`/volunteer/service-provider/name/${editingProvider}`, {
        ...editForm,
        available: editForm.available === 'true',
      });
      setEditingProvider(null);
      fetchServiceProviders();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const navigateToHelperForm = () => {
    navigate('/helper-form');
  };

  const navigateToServiceProviderForm = () => {
    navigate('/register-service-provider');
  };

  return (
    <div className="volunteer-container">
      <h2>Volunteer Dashboard</h2>

      <div className="button-group">
        <button className="volunteer-button" onClick={navigateToServiceProviderForm}>Service Provider</button>
        <button className="volunteer-button" onClick={navigateToHelperForm}>Helper</button>
      </div>

      <div className="filters">
        <label>Service Type:</label>
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="shelter">Shelter</option>
          <option value="logistics">Logistics</option>
          <option value="medical">Medical</option>
        </select>

        <label>Availability:</label>
        <select value={searchAvailability} onChange={(e) => setSearchAvailability(e.target.value)}>
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>

        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>

      <table className="service-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service Type</th>
            <th>Available</th>
            <th>Location</th> {/* ✅ New column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProviders.map((provider) =>
            editingProvider === provider.name ? (
              <tr key={provider.name}>
                <td>
                  <input name="name" value={editForm.name} onChange={handleEditChange} disabled />
                </td>
                <td>
                  <select name="serviceType" value={editForm.serviceType} onChange={handleEditChange}>
                    <option value="food">Food</option>
                    <option value="shelter">Shelter</option>
                    <option value="logistics">Logistics</option>
                    <option value="medical">Medical</option>
                  </select>
                </td>
                <td>
                  <select name="available" value={editForm.available} onChange={handleEditChange}>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                  </select>
                </td>
                <td>
                  <input name="location" value={editForm.location} onChange={handleEditChange} />
                </td>
                <td>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditingProvider(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={provider.name}>
                <td>{provider.name}</td>
                <td>{provider.serviceType}</td>
                <td>{provider.available ? 'Available' : 'Unavailable'}</td>
                <td>{provider.location}</td> {/* ✅ New field display */}
                <td>
                  <FaEdit className="icon edit" onClick={() => startEditing(provider)} />
                  <FaTrash className="icon delete" onClick={() => handleDelete(provider.name)} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <button className="add-btn" onClick={() => navigate('/report')}>+</button>
    </div>
  );
};

export default Volunteer;


