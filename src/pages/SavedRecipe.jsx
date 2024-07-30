import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SavedRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/recipe');
        setRecipes(response.data);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      }
    };
    fetchRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/recipe/${id}`)
      console.log(res.data);
      alert('Deleted!');
      window.location.reload(); //reload when the alert is clicked
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Saved Recipes</h1>
      <Link to="/recipe/create">Create New Recipe</Link>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <h3>{recipe.recipeTitle}</h3>
            <p>{recipe.description}</p>
            <p>Allergens: {recipe.allergens.map(a => a.name).join(', ')}</p>
            <Link to={`/recipe/edit/${recipe._id}`}>Edit</Link>
            
            {/* use the anon function so that that the function isn't called upon rendering */}
            <button onClick={() => {
              deleteRecipe(recipe._id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipe;
