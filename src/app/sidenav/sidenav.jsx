import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css'; // You can copy styles from Angular's CSS file
import { navbarData } from './navData';

const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const closeSideBar = () => {
    setCollapsed(false);
  };

  return (
    <div className={`sidenav ${collapsed ? 'sidenav-collapsed' : 'sidenav-uncollapsed'}`}>
      <div className="logo-container">
        <button className="logo" onClick={toggleCollapse}>DM</button>
        {collapsed && (
          <div className="logo-text fade-in">Disaster Management</div>
        )}
        {collapsed && (
          <div
            className={`btn-close ${collapsed ? 'spin-animation' : 'spin-rev'}`}
            onClick={closeSideBar}
          >
            <i className="close-icon">X</i>
          </div>
        )}
      </div>

      <ul className="sidenav-nav">
        {navbarData.map((data, index) => (
          <li key={index} className="nav-item">
            {!collapsed && <span className="tooltip">{data.message}</span>}
            <Link className="nav-link" to={`/${data.routeLink}`}>
              <i className={`link-icon ${data.icon}`}></i>
              {collapsed && (
                <span className="link-text fade-in">{data.label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
