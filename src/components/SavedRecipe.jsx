// RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const SavedRecipe = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Recipe Details: {id}</h2>
      
    </div>
  );
};

export default SavedRecipe;
