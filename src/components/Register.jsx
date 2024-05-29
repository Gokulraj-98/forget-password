import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Login from "./Login"

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    axios.post('https://forget-password-index.onrender.com/register', { name, email, password })
      .then(result => console.log(result))
    navigate('/login')
      .catch(err => console.log(err))
  }

  return (

    <>
      <div class="container">
        <div class="row">
          {/* <!-- Left Blank Side --> */}
          <div class="col-lg-3"></div>

          {/* <!-- Right Side Form --> */}
          <div class="col-lg-6 d-flex align-items-center justify-content-center right-side">
            <div class="form-2-wrapper">
              <div class="logo text-center">
                <h2>Logo</h2>
              </div>
              <h2 class="text-center mb-4">Sign Into Your Account</h2>
              <form action="#">
                <div class="mb-3 form-box">
                  <input type="name" class="form-control" id="name" name="firstname" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required />
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" required />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required />
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe" />
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                    <Link to="/reset" href="forget-3.html" class="text-decoration-none float-end">Forget Password</Link>
                  </div>

                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-outline-secondary login-btn w-100 mb-3">Register</button>
                <Link to="/login" type="submit" class="btn btn-outline-secondary login-btn w-100 mb-3">
                  Login
                </Link>
                <div class="social-login mb-3 type--A">
                  <h5 class="text-center mb-3">Social Login</h5>
                  <button class="btn btn-outline-secondary  mb-3"><i class="fa-brands fa-google text-danger"></i> Sign With Google</button>
                  <button class="btn btn-outline-secondary mb-3"><i class="fa-brands fa-facebook-f text-primary"></i> Sign With Facebook</button>
                </div>
              </form>

              {/* <!-- Register Link --> */}
              <p class="text-center register-test mt-3">Don't have an account? <a href="register-3.html" class="text-decoration-none">Register here</a></p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
