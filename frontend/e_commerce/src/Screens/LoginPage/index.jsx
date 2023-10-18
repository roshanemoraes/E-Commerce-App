import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

const authenticate = async () => {
    axios.post('http://localhost:5000/login', 
    {
        "email" : 'jane@example.com',
        "password" : 'asd123'
    }, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        withCredentials: true,
    })
    .then(res => console.log(res))

}

const loadCart = async () => {
    const data = await axios.get('http://localhost:5000/cart', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    )

    console.log(data.data)

} 


const LoginPage = () => {
    return (
        <div className='login-page'>
            <input placeholder='username' type="text" />
            <input placeholder='password' type="text" />
            <button onClick={authenticate}>Login</button>
            <button onClick={loadCart}>Load the Cart</button>
            <h1>This is the Login Page</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/register"}>Register</Link>
        </div>
    );
};

export default LoginPage;
