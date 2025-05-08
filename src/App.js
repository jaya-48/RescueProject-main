import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './app/login/login';
//import './login/login.css';
import Register from './app/register/register';
import Logout from './app/logout/logout';
import HomePage from './app/home-page/home-page';
import Sidenav from './app/sidenav/sidenav';
import Error from './app/error/error'
import HelperForm from './app/helperForm/helperForm'
import Hosp from './app/hosp/hosp';
import PatientStatus from './app/patient-status/patient-status';
import ReportForm from './app/report/report';
import Resq from './app/resq/resq';
import ServiceProvider from './app/serviceProvider/serviceProvider';
import SosPage from './app/sos/sos';
import VictimStatusForm from './app/victimStatusForm/victimStatusForm';
import Volunteer from './app/volunteer/volunteer';

function App() {
  return (
    <Router>
      <Sidenav />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add your register route here later */}
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/homePage" element={<HomePage />}/>;
        <Route path="*" element={<Error />} /> {/* fallback route */}
        <Route path="/helper-form" element={<HelperForm />} />
        <Route path='/hosp' element={<Hosp/>}/>
        <Route path='/patient-status' element={<PatientStatus/>} />
        <Route path='/reports' element={<ReportForm/>} />
        <Route path='/resq' element={<Resq/>} />
        <Route path='/register-service-provider' element={<ServiceProvider/>} />
        <Route path='/sos' element={<SosPage/>} />
        <Route path='/victimStatusForm' element={<VictimStatusForm/>} />
        <Route path='/vol' element={<Volunteer/>} />
      </Routes>
    </Router>
  );
}

export default App;
