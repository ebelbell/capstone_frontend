// RecipeForm.jsx
import React, { useState } from 'react'; //use params to pull the id to the frontend
import { useParams } from 'react-router-dom';
//import { useEffect } from 'react';
import axios from 'axios';
import '../App.css'

const RecipeForm = () => {
  // FORM FIELDS
  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    recipeTitle: '',
    description: '',
    allergens: []
  });

  // Form Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleAllergensChange = (e) => {
    const { value } = e.target;
    setRecipe({...recipe, allergens: value.split(',').map(name => ({ name: name.trim() }))});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // test if the data has been sent 
    //console.log(id);

    try {
      let res = await axios.put(`http://localhost:3000/recipe/${id}`, recipe); //id from parameters
      //console.log(res.data);
      alert('Recipe updated!');
    } catch (err) {
        console.error(err);
    }

    // Reset form
  //   setRecipe({
  //     recipeTitle: '',
  //     description: '',
  //     allergens: []
  //   });
  //   setIsSubmitting(false);
  };

  ///////////// USER ENTRY //////////////
  return (
    <div>
      <h2>Create or Update A Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipeTitle">Recipe Title: </label>
          <input
            type="text"
            id="recipeTitle"
            name="recipeTitle"
            value={recipe.recipeTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="allergens">Allergens (comma separated):</label>
          <input
            type="text"
            id="allergens"
            name="allergens"
            value={recipe.allergens.map(a => a.name).join(',')}
            onChange={handleAllergensChange}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
          {/* CODE IF AXIOS WAS SETUP */}
          {/* {id ? 'Update Recipe' : 'Create Recipe'} */}
          
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;





