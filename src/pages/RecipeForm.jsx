// RecipeForm.jsx
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from 'react';

const RecipeForm = () => {
  // FORM FIELDS
  const [recipe, setRecipe] = useState({
    recipeTitle: '',
    description: '',
    allergens: []
  });

  // Form Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const history = useHistory();
  // const { id } = useParams(); // Get recipe ID from URL params if editing an existing recipe
  

  // Fetch the recipe data if editing an existing recipe
  // useEffect(() => {
  //   if (id) {
  //     const fetchRecipe = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3000/recipe/${id}`);
  //         // test fetched data
  //         // console.log('Fetched recipe data: ', response.data);
  //         setRecipe(response.data);
  //       } catch (err) {
  //         console.error('Error fetching recipe:', err);
  //       }
  //     };
  //     fetchRecipe();
  //   }
  // }, [id]);

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
    console.log('Submitting recipe data:', recipe);

    // try {
    //   if (id) {
    //     // UPDATE RECIPE
    //     await axios.put(`http://localhost:3000/recipe/${id}`, recipe);
    //     // console.log('Recipe updated successfully');
    //   } else {
    //     // CREATE NEW RECIPE 
    //     await axios.post('http://localhost:3000/recipe', recipe);
    //     // console.log('Recipe created successfully');
    //   }
    //   history.push('/'); // Redirect to home or recipes list
    // } catch (err) {
    //   console.error('Error submitting form:', err);
    // } finally {
    //   setIsSubmitting(false);
    // }

    // Reset form
    setRecipe({
      recipeTitle: '',
      description: '',
      allergens: []
    });
    setIsSubmitting(false);
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





