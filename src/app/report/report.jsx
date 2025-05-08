import React, { useState } from 'react';

const ReportForm = () => {
  const [reportData, setReportData] = useState({
    name: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitting Report...');
    console.log('Name:', reportData.name);
    console.log('Location:', reportData.location);
    console.log('Message:', reportData.message);

    // ✅ Later, you can replace this log with an actual API call (using axios or fetch)
    // Example:
    // axios.get('http://localhost:8099/message/submitMessage', { params: reportData })
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));

    setReportData({
      name: '',
      location: '',
      message: ''
    }); // Clear form after submission
  };

  return (
    <div className="report-form">
      <h1>Generating Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reportData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={reportData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={reportData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={!reportData.name || !reportData.message}>Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;
