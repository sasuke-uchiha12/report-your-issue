import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../css/LoginTypeSelection.css';

function LoginTypeSelection() {
    const navigate = useNavigate();
    const items = [
        { icon: faBuilding, text: 'superadmin', path: '/superadmin' },
        { icon: faBriefcase, text: 'admin', path: '/admin' },
        { icon: faGraduationCap, text: 'Department', path: '/department' },
        { icon: faBuilding, text: 'Ledger', path: '/superadmin' },
        { icon: faBriefcase, text: 'Staff', path: '/admin' },
        { icon: faGraduationCap, text: 'Student', path: '/department' }
    ];

    return (
        <div className="login-type-grid">
            {items.map((item, index) => (
                <div key={index} className="login-type-box" onClick={() => navigate(item.path)}>
                    <FontAwesomeIcon icon={item.icon} size="3x" />
                    <div>{item.text}</div>
                </div>
            ))}
        </div>
    );
}

export default LoginTypeSelection;
