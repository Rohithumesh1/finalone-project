import React from 'react';
import './Navigation.css';
import { FiHome, FiFolder, FiBell, FiFile, FiDollarSign, FiUsers, FiSettings, FiLock } from 'react-icons/fi';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo-container">
        <img src={require('../../assets/logo.svg')} alt="Resollect Logo" className="logo" />
      </div>
      
      <ul className="nav-items">
        <li className="nav-item">
          <FiHome className="nav-icon" />
          <span className="nav-text">Dashboard</span>
        </li>
        <li className="nav-item active">
          <FiFolder className="nav-icon" />
          <span className="nav-text">Portfolio</span>
        </li>
        <li className="nav-item">
          <FiBell className="nav-icon" />
          <span className="nav-text">Notifications</span>
        </li>
        <li className="nav-item">
          <FiFile className="nav-icon" />
          <span className="nav-text">Notices</span>
        </li>
        <li className="nav-item">
          <FiDollarSign className="nav-icon" />
          <span className="nav-text">Auction</span>
        </li>
        <li className="nav-item">
          <FiFile className="nav-icon" />
          <span className="nav-text">Data Upload</span>
        </li>
        <li className="nav-item">
          <FiUsers className="nav-icon" />
          <span className="nav-text">Control Panel</span>
        </li>
        <li className="nav-item">
          <FiUsers className="nav-icon" />
          <span className="nav-text">User Management</span>
        </li>
        <li className="nav-item">
          <FiLock className="nav-icon" />
          <span className="nav-text">Permissions</span>
        </li>
      </ul>
      
      <div className="powered-by">
        <p>powered by</p>
        <img src={require('../../assets/logo.svg')} alt="Resollect Logo" className="logo-small" />
      </div>
    </nav>
  );
};

export default Navigation;