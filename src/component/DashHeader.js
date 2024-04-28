import React from "react";
import '../css/DashHeader.css'

const DashHeader = () => {
    return (<div className="header-container">
        <div className="header-logo">Dashboard</div>
        <ul className="header-nav">
            <li className="header-nav-item">Home</li>
            {/* <li className="header-nav-item">New Complaint</li> */}
            <li className="header-nav-item">View Complaints</li>
            {/* <li className="header-nav-item">Manage Categories</li> */}
            <li className="header-nav-item">Reports</li>
            <li className="header-nav-item">Settings</li>
        </ul>
        <div className="header-user-section">
            <div className="header-user-avatar" style={{ backgroundImage: 'url(/path-to-avatar.jpg)' }}></div>
            <div className="header-user-name">Admin</div>
            <button className="header-user-dropdown">▼</button>
        </div>
    </div>
    );
}

export default DashHeader;