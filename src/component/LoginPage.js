import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css';
import axios from 'axios';
//import { useEffect } from 'react';


function LoginPage() {
    //const { userType } = useParams();  
    //const [error, setError] = useState(null); 
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { username, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    // Check the role of the user
                    const role = result.data.role;
                    if (role === 'superadmin') {
                        navigate('/superadmin_dashboard');
                    } else if (role === 'admin') {
                        navigate('/admin_dashboard');
                    } else if (role === 'department') {
                        navigate('/department_dashboard');
                    } else {
                        // Handle other roles or unknown roles
                        navigate('/default_dashboard');
                    }
                } else {
                    // Handle other status codes like 401 (Unauthorized) or 400 (Bad Request)
                    if (result.status === 401) {
                        alert("An error occurred. Please try again later.");
                    }
                }
            })
            .catch(error => {
                console.log(error);
                alert("Invalid username or password.");
            });
    }
    
    /*const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { username, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    navigate('/dashboard');
                } else {
                    // Handle other status codes like 401 (Unauthorized) or 400 (Bad Request)
                    if (result.status === 401) {
                        alert("An error occurred. Please try again later.");
                    }
                }
            })
            .catch(error => {
                console.log(error);
                alert("Invalid username or password.");
            });
    }*/
    
    //const title = userType ? `Login (${userType.charAt(0).toUpperCase() + userType.slice(1)})` : 'Login';

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" placeholder="Username" required
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-button">Sign In</button>
                <Link to="/signup/login" className="login-link">Not registered? Sign Up</Link>
            </form>
        </div>
    );
}

export default LoginPage;
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';
import { useState } from 'react';
import axios from 'axios'

function LoginPage() {
    const navigate = useNavigate();
    //const { userType } = useParams();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
            axios.post('http://localhost:3001/superadmin', {username,password})
                .then(result => {
                    console.log(result)
                    if(result.data === 200){
                        navigate('/dashboard')
                    }
                })
            }
    //const title = userType ? `Login (${userType.charAt(0).toUpperCase() + userType.slice(1)})` : 'Login';

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>SuperAdmin</h2>
                <div className="input-group">
                    <input type="text" placeholder="Username" required
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" required
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;*/