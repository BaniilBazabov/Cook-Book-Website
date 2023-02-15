import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./navbar.css";
import logo from "./UC_logo.jpg";
import { useContext } from "react";
import { ContextAPI } from "../../contextAPI/ContextAPI";
import { useState } from "react";

export default function NavBar() {
   const navigate = useNavigate();
   const { user, dispatch } = useContext(ContextAPI);
   const [q, setQ] = useState("");

   const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
   };

   return (
      <div className="nav">
         <div className="container">
            <div className="navbar">
               <div className="logo">
                  <img className="logo-img" src={logo} alt="" />
               </div>

               <ul className="nav-list">
                  <li className="list">
                     <Link to="/">Home</Link>
                  </li>
                  <li className="list">
                     <Link to="/about">About</Link>
                  </li>
                  <li className="list">
                     <Link to="/contact">Contact</Link>
                  </li>
                  <li className="list">
                     <Link to="/addRecipe">Add recipe</Link>
                  </li>
               </ul>

               <div className="icons">
                  <div className="search-box">
                     <input
                        onChange={(e) => setQ(e.target.value)}
                        type="text"
                        className="input-search"
                        placeholder="Type to Search..."
                        onFocus="this.value=''"
                     />

                     {
                        <button
                           className="btn-search"
                           onClick={(e) => {
                              e.preventDefault();
                              navigate(`/search?q=${q}`);
                           }}
                        >
                           <i className="fas fa-search "></i>
                        </button>
                     }
                  </div>

                  <div className="user-icons">
                     {user ? (
                        <>
                           <i className="fa-solid fa-bookmark icon"></i>
                           <Link to="/userProfile">
                              <img
                                 className="profile-pic"
                                 src={user.profilePic}
                                 alt=""
                              />
                           </Link>

                           <li className="link logout" onClick={handleLogout}>
                              {user && ""}
                              <i className="fa-solid fa-right-from-bracket logout-icon">
                                 <span>Logout</span>
                              </i>
                           </li>
                        </>
                     ) : (
                        <>
                           <Link className="link list" to="/login">
                              LOGIN
                           </Link>

                           <Link className="link list" to="/register">
                              REGISTER
                           </Link>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
