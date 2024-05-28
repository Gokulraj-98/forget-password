import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

export function Home() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleNewUserClick = () => {
        navigate('/register');
    };

    return (
        <div className="container">
            <div className="header d-flex justify-content-between align-items-center my-4">
                <h1>User Dashboard</h1>
                <button className="btn btn-primary" onClick={handleNewUserClick}>New User</button>
            </div>
            <div className="row">
                {users.map(user => (
                    <div key={user._id} className="col-md-4">
                        <UserCard user={user} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function UserCard({ user }) {
    return (
        <div className="card mb-4">
            <div className="card-img-top text-center user-icon">
                <FontAwesomeIcon icon={faUser} size="6x" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
            </div>
        </div>
    );
}
