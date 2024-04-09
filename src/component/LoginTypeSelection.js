import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../css/LoginTypeSelection.css';

function LoginTypeSelection() {
    const navigate = useNavigate();
    const items = [
        { icon: faBuilding, text: 'Superadmin', path: '/login/superadmin' },
        { icon: faBriefcase, text: 'Admin', path: '/login/admin' },
        { icon: faGraduationCap, text: 'Department', path: '/login/department' },
        // { icon: faBuilding, text: 'Ledger', path: '/login/ledger' },
        // { icon: faBriefcase, text: 'Staff', path: '/complaint/staff' },
        // { icon: faGraduationCap, text: 'Student', path: '/complaint/student' }
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
