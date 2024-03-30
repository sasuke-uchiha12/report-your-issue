import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../css/LoginTypeSelection.css';

function LoginTypeSelection() {
    const items = [
        { icon: faBuilding, text: 'Department' },
        { icon: faBriefcase, text: 'Staff' },
        { icon: faGraduationCap, text: 'Students' },
        { icon: faBuilding, text: 'Department' },
        { icon: faBriefcase, text: 'Staff' },
        { icon: faGraduationCap, text: 'Students' },
    ];

    return (
        <div className="login-type-grid">
            {items.map((item, index) => (
                <div key={index} className="login-type-box">
                    <FontAwesomeIcon icon={item.icon} size="3x" />
                    <div>{item.text}</div>
                </div>
            ))}
        </div>
    );
}

export default LoginTypeSelection;
