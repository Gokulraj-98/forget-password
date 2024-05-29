import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Login from "./Login"

export function ResetPassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // const history = useHistory();
  const handleSubmit = (e) => {
    axios.post('https://forget-password-index.onrender.com/reset', { email })
      .then(result => {
        console.log(result.status);
        if (result.status === 200) {
          navigate('/verify-code', { state: { email: email } });
        }
      })
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
              <h2 class="text-center mb-4">Reset Account Password</h2>
              <form action="#">
                <div class="mb-3 form-box">
                  <input type="email" class="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" required />
                </div>
                <div class="mb-3">
                  <div>
                    <p>A verifcation code will be sent to the email address</p>
                  </div>

                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-outline-secondary login-btn w-100 mb-3">verify</button>
                <div class="social-login mb-3 type--A">
                  <h5 class="text-center mb-3">Social Login</h5>
                  <button class="btn btn-outline-secondary  mb-3"><i class="fa-brands fa-google text-danger"></i> Sign With Google</button>
                  <button class="btn btn-outline-secondary mb-3"><i class="fa-brands fa-facebook-f text-primary"></i> Sign With Facebook</button>
                </div>
              </form>

              {/* <!-- Register Link --> */}
              <p class="text-center register-test mt-3">Don't have an account? <Link to="/register" href="register-3.html" class="text-decoration-none">Register here</Link></p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
