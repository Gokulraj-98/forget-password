import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function ChangePassword() {
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state.email;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/change-password', { email, password })
            .then(result => {
                if (result.status === 200) {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
                    <div className="form-2-wrapper">
                        <h2 className="text-center mb-4">Change Password</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 form-box">
                                <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your New Password" required />
                            </div>
                            <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
