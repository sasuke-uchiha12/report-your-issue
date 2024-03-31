import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate.push('/dashboard');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
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
