import React from "react";
import "./categories.css";
import ThaiCat from "./images/cat_Thai.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config";

export default function Categories() {
   const [cats, setCats] = useState([]);

   useEffect(() => {
      const fetchCats = async () => {
         const res = await axiosInstance.get("/categories");
         setCats(res.data);
      };
      fetchCats();
   }, []);

   return (
      <div className="categories">
         <div className="categories-container">
            <div className="category-container">
               {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                     <p key={c} className="category thai_cat">
                        {c.name}
                     </p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
