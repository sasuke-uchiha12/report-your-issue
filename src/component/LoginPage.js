import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const { userType } = useParams();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uname: username, password: password })
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.message);
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Store token in local storage
            let redirectPath = '/';
            switch (userType) {
                case 'superadmin':
                    redirectPath = '/superadmin/dashboard';
                    break;
                case 'admin':
                    redirectPath = '/admin/dashboard';
                    break;
                case 'department':
                    redirectPath = '/department/dashboard';
                    break;
                default:
                    redirectPath = '/dashboard';
            }
            navigate(redirectPath);
        } catch (error) {
            setError(error.message);
        }
    };

    const title = userType ? `Login (${userType.charAt(0).toUpperCase() + userType.slice(1)})` : 'Login';

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>{title}</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="input-group">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;
