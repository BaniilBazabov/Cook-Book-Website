import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Recipes from "../../components/recipes/Recipes";
import Categories from "../../components/categories/Categories";
import "./index.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Index() {
   const [recipes, setRecipes] = useState([]);
   const { search } = useLocation();

   useEffect(() => {
      const fetchRecipes = async () => {
         const res = await axiosInstance.get("/recipes" + search);
         setRecipes(res.data);
         console.log(res);
      };
      fetchRecipes();
   }, [search]);

   return (
      <React.Fragment>
         <Header />
         <Categories />

         <div className="home-page">
            <Recipes recipes={recipes} />
         </div>
      </React.Fragment>
   );
}
