import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ContextAPI } from "../../contextAPI/ContextAPI";

import "./singlerecipe.css";
import { axiosInstance } from "../../config";

export default function SingleRecipe() {
   const location = useLocation();
   const singleRecipePath = location.pathname.split("/")[2];
   const [recipe, setRecipe] = useState({});
   const { user } = useContext(ContextAPI);
   const [image_url, setImage_url] = useState("");
   const [title, setTitle] = useState("");
   const [categories, setCategories] = useState([]);
   const [description, setDescription] = useState("");
   const [ingredients, setIngredients] = useState([]);
   const [preparation_steps, setPreparation_steps] = useState([]);
   const [updateMode, setUpdateMode] = useState(false);

   useEffect(() => {
      const fetchRecipe = async () => {
         const res = await axiosInstance.get("/recipes/" + singleRecipePath);
         console.log(res);
         setRecipe(res.data);
         setImage_url(res.data.image_url);
         setTitle(res.data.title);
         setCategories(res.data.categories);
         setDescription(res.data.description);
         setIngredients(res.data.ingredients);
         setPreparation_steps(res.data.preparation_steps);
         setUpdateMode(res.data.updateMode);
      };
      fetchRecipe();
   }, [singleRecipePath]);

   const handleDelete = async () => {
      try {
         // await axios.delete("/recipes/" + singleRecipePath,
         await axiosInstance.delete(`/recipes/${recipe._id}`, {
            data: { username: user.username }
         });
         window.location.replace("/");
      } catch (error) {}
   };

   // Set the changed state when updating ingredient input
   const handleChangeIng = (e, index) => {
      ingredients[index] = e.target.value;
      setIngredients([...ingredients]);
   };

   // Set the changed state when updating preparation steps input
   const handleChangeStep = (e, index) => {
      preparation_steps[index] = e.target.value;
      setPreparation_steps([...preparation_steps]);
   };

   const handleUpdate = async () => {
      try {
         await axiosInstance.put(`/recipes/${recipe._id}`, {
            username: user.username,
            image_url,
            title,
            description,
            ingredients,
            preparation_steps
         });
         // window.location.reload();
         setUpdateMode(false);
      } catch (err) {}
   };

   return (
      <div className="single-recipe">
         <div className="single-recipe-wrapper">
            <div className="single-recipe-main-wrapper">
               {updateMode ? (
                  <div className="updatemMode-singleRecipe">
                     <textarea
                        type="text"
                        className="addInput-updateMode"
                        value={image_url}
                        onChange={(e) => setImage_url(e.target.value)}
                     />
                  </div>
               ) : (
                  <div className="single-recipe-left-content">
                     {image_url && (
                        <img src={image_url} className="single-recipe-img" />
                     )}
                  </div>
               )}

               <div className="single-recipe-right-content">
                  {updateMode ? (
                     <textarea
                        type="text"
                        className="addInput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                     />
                  ) : (
                     <h1 className="single-recipe-title">
                        {title}
                        {recipe.username === user?.username && (
                           <div className="edit-delete-icons">
                              <div className="single-recipe-edit">
                                 <i
                                    className="fa-solid fa-pen-to-square single-recipe-icon"
                                    onClick={() => {
                                       setUpdateMode(true);
                                    }}
                                 ></i>
                              </div>
                              <div className="single-recipe-delete">
                                 <i
                                    className="fa-solid fa-trash single-recipe-icon"
                                    onClick={handleDelete}
                                 ></i>
                              </div>
                           </div>
                        )}
                     </h1>
                  )}

                  <div className="single-recipe-info">
                     <span className="single-recipe-author">
                        Author:
                        <span className="single-recipe-author-name">
                           <Link
                              to={`/?user=${recipe.username}`}
                              className="link"
                           >
                              {recipe.username}
                           </Link>
                        </span>
                     </span>

                     {updateMode ? (
                        <textarea
                           type="text"
                           className="addInput"
                           value={categories}
                           onChange={(e) => setCategories(e.target.value)}
                        ></textarea>
                     ) : (
                        <span className="single-recipe-author">
                           Category:
                           <span className="single-recipe-author-name">
                              <Link
                                 to={`/?cat=${recipe.categories}`}
                                 className="link"
                              >
                                 {recipe.categories}
                              </Link>
                           </span>
                        </span>
                     )}
                     <span className="single-recipe-date">
                        <span className="single-recipe-date">
                           {new Date(recipe.createdAt).toDateString()}
                        </span>
                     </span>
                  </div>

                  {updateMode ? (
                     <textarea
                        type="text"
                        className="addInput"
                        value={description}
                        cols="30"
                        rows="10"
                        onChange={(e) => setDescription(e.target.value)}
                     ></textarea>
                  ) : (
                     <p className="single-recipe-description">
                        {recipe.description}
                     </p>
                  )}
               </div>
            </div>

            {/* Ingredients and Preparation method */}
            <div className="single-recipe-secondary-wrapper">
               <div className="single-recipe-ingredients">
                  <h3 className="single-recipe-secondary-wrapper-title">
                     Ingredients
                  </h3>

                  {updateMode ? (
                     ingredients.map((ingredient, index) => {
                        return (
                           <textarea
                              key={index.ingredients}
                              type="text"
                              className="addInput "
                              onChange={(e) => handleChangeIng(e, index)}
                              value={ingredients[index]}
                           />
                        );
                     })
                  ) : (
                     <ol>
                        {ingredients?.map((ingredient) => (
                           <li className="ingredient">{ingredient}</li>
                        ))}
                     </ol>
                  )}
               </div>

               <div className="single-recipe-preparation-steps">
                  <h3 className="single-recipe-secondary-wrapper-title">
                     Method
                  </h3>

                  {updateMode ? (
                     preparation_steps.map((step, index) => {
                        return (
                           <textarea
                              key={index.preparation_steps}
                              type="text"
                              className="addInput "
                              onChange={(e) => handleChangeStep(e, index)}
                              value={preparation_steps[[index]]}
                           />
                        );
                     })
                  ) : (
                     <ol>
                        {preparation_steps?.map((step) => (
                           <li className="preparation-step">{step}</li>
                        ))}
                     </ol>
                  )}
               </div>
            </div>

            {updateMode && (
               <div className="button-edit-center">
                  <button className="update-btn" onClick={handleUpdate}>
                     Update
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}
