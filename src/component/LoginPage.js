import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const { userType } = useParams();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate(`/${userType}/dashboard`);
    };

    const title = userType ? `Login (${userType.charAt(0).toUpperCase() + userType.slice(1)})` : 'Login';

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>{title}</h2>
                <div className="input-group">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;
