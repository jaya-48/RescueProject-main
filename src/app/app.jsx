import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer'; // 👈 Add path
import HelperForm from './pages/HelperForm'; // 👈 Add path
import ServiceProvider from './pages/ServiceProvider'; // 👈 Add path
import Report from './pages/Report'; // 👈 If you have a report page

function App() {
  const title = 'dashboard';

  return (
    <Router>
      <div className="app">
        <SideNav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home title={title} />} />
            <Route path="/vol" element={<Volunteer />} />
            <Route path="/helper-form" element={<HelperForm />} />
            <Route path="/register-service-provider" element={<ServiceProvider />} />
            <Route path="/report" element={<Report />} /> {/* Optional if Report.js is ready */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
