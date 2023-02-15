import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

export default function Recipe({ recipe }) {
   return (
      <div className="recipe">
         <Link to={`/recipes/${recipe._id}`} className="link">
            {recipe.image_url && (
               <img className="recipe-img" src={recipe.image_url} alt="" />
            )}
         </Link>

         <div className="recipe-info">
            <div className="recipe-categories">
               {recipe.categories.map((c) => (
                  <span className="recipe-categories">{c.name}</span>
               ))}
            </div>

            <span className="recipe-title">{recipe.title}</span>

            <hr />
            <span className="publish-date">
               {new Date(recipe.createdAt).toDateString()}
            </span>

            <p className="recipe-desc">{recipe.description}</p>
         </div>
      </div>
   );
}
