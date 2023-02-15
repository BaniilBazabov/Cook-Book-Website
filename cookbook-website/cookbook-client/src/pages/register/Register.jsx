import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
import { axiosInstance } from "../../config";

export default function Register() {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
         const res = await axiosInstance.post("/authentication/register", {
            username,
            email,
            password
         });
         res.data && window.location.replace("/login");
      } catch (err) {
         setError(true);
      }
   };

   return (
      <div className="login">
         <div className="login-container">
            <div className="login-form">
               <div className="form-header">
                  <h1>Register Account</h1>
               </div>
               <div className="form-content">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label className="reg-log-label" htmlFor="username">
                           Username
                        </label>
                        <input
                           type="text"
                           id="username"
                           name="username"
                           required="required"
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>

                     <div className="form-group">
                        <label className="reg-log-label" htmlFor="email">
                           Email Address
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           required="required"
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>

                     <div className="form-group">
                        <label className="reg-log-label" htmlFor="password">
                           Password
                        </label>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           required="required"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     {/* <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input
                           type="password"
                           id="cpassword"
                           name="cpassword"
                           required="required"
                           onChange={(e) => setcPassword(e.target.value)}
                        />
                     </div> */}

                     <div className="form-group">
                        <button className="login-btn" type="submit">
                           Register
                        </button>
                     </div>

                     <div className="acc-reg-log">
                        <p> Already have an account?</p>
                        <Link className="link reg-log-option" to="/login">
                           Login
                        </Link>
                     </div>
                     {error && (
                        <p className="register-error">
                           Username or email already in use! Try again
                        </p>
                     )}
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
