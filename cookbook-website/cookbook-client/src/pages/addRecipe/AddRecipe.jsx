import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { axiosInstance } from "../../config";
import { ContextAPI } from "../../contextAPI/ContextAPI";
import "./addRecipe.css";

export default function AddRecipe() {
   const [recipe, setRecipe] = useState({});
   const [image_url, setImage_url] = useState("");
   const [title, setTitle] = useState("");
   const [categories, setCategories] = useState([]);
   const [description, setDescription] = useState("");
   const [ingredients, setIngredients] = useState([]);
   const [preparation_steps, setPreparation_steps] = useState([]);
   const { user } = useContext(ContextAPI);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newRecipe = {
         username: user.username,
         image_url,
         title,
         categories,
         description,
         ingredients,
         preparation_steps
      };

      try {
         const res = await axiosInstance.post("/recipes", newRecipe);
         window.location.replace("/recipes/" + res.data._id);
      } catch (error) {}
   };

   // Creating dynamically input field or Ingredients
   const addIngredient = (e) => {
      e.preventDefault();
      setIngredients([...ingredients, ""]);
   };

   // Set the changed state
   const handleChangeIng = (e, index) => {
      ingredients[index] = e.target.value;
      setIngredients([...ingredients]);
   };

   // Creating dynamically input field or Preparation steps
   const addStep = (e) => {
      e.preventDefault();
      setPreparation_steps([...preparation_steps, ""]);
   };

   // Set the changed state
   const handleChangeStep = (e, index) => {
      preparation_steps[index] = e.target.value;
      setPreparation_steps([...preparation_steps]);
   };

   return (
      <div className="add-recipe">
         <form className="addForm" onSubmit={handleSubmit}>
            <div className="addFormGroup">
               <input
                  type="text"
                  placeholder="Image URL address"
                  className="addInput"
                  autoFocus={true}
                  onChange={(e) => setImage_url(e.target.value)}
               />
            </div>

            <div className="addFormGroup">
               <input
                  type="text"
                  placeholder="Title"
                  className="addInput"
                  autoFocus={true}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="addFormGroup">
               <input
                  type="text"
                  placeholder="Category"
                  className="addInput"
                  autoFocus={true}
                  onChange={(e) => setCategories(e.target.value)}
               />
            </div>

            <div className="addFormGroup">
               <textarea
                  type="text"
                  className="addInput"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your recipe description..."
                  onChange={(e) => setDescription(e.target.value)}
               ></textarea>
            </div>

            <div className="addFormGroup">
               {ingredients.map((ingredient, index) => {
                  return (
                     <input
                        key={index.ingredients}
                        className="addInput"
                        onChange={(e) => handleChangeIng(e, index)}
                        value={ingredient}
                     />
                  );
               })}
               <button
                  className="recipeAddBtn"
                  id="addRecipeSteps"
                  onClick={(e) => addIngredient(e)}
               >
                  Add Ingredient
               </button>
            </div>

            <div className="addFormGroup">
               {preparation_steps.map((step, index) => {
                  return (
                     <textarea
                        key={index.preparation_steps}
                        rows={4}
                        className="addInput"
                        onChange={(e) => handleChangeStep(e, index)}
                        value={step}
                     />
                  );
               })}
               <button
                  className="recipeAddBtn"
                  id="addRecipeSteps"
                  onClick={(e) => addStep(e)}
               >
                  Add New Preparation Step
               </button>

               <button className="addSubmit" type="submit">
                  Submit Recipe
               </button>
            </div>
         </form>
      </div>
   );
}
