import React from "react";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import "./login.css";
import axios from "axios";
import { ContextAPI } from "../../contextAPI/ContextAPI";
import { axiosInstance } from "../../config";

export default function Login() {
   const userRef = useRef();
   const passwordRef = useRef();
   const { dispatch, isFetching } = useContext(ContextAPI);

   const submitForm = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
         const res = await axiosInstance.post("/authentication/login", {
            username: userRef.current.value,
            password: passwordRef.current.value
         });

         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (error) {
         dispatch({ type: "LOGIN_FAILURE" });
      }
   };

   return (
      <div className="login">
         <div className="login-container">
            <div className="login-form" onSubmit={submitForm}>
               <div className="form-header">
                  <h1>Account Login</h1>
               </div>
               <div className="form-content">
                  <form>
                     <div className="form-group">
                        <label className="reg-log-label" htmlFor="username">
                           Username
                        </label>
                        <input
                           id="username"
                           type="text"
                           name="username"
                           required="required"
                           ref={userRef}
                        />
                     </div>
                     <div className="form-group">
                        <label className="reg-log-label" htmlFor="password">
                           Password
                        </label>
                        <input
                           id="password"
                           type="password"
                           name="password"
                           required="required"
                           ref={passwordRef}
                        />
                     </div>
                     {/* <div className='form-group'>
                <label className='form-remember'>
                  <input type='checkbox' />
                  Remember Me
                </label>
                <a className='form-recovery' href='#'>
                  Forgot Password?
                </a>
              </div> */}
                     <div className="form-group">
                        <button
                           className="login-btn"
                           type="submit"
                           disabled={isFetching}
                        >
                           Login
                        </button>
                     </div>

                     <div className="acc-reg-log">
                        <p>Don't have an account yet?</p>
                        <Link className="link reg-log-option" to="/register">
                           Register
                        </Link>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
