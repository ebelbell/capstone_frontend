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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipe;
