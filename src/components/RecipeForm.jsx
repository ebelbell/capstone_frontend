// RecipeForm.jsx
import React from 'react';

const RecipeForm = () => {
  return (
    <div>
      <h2>Create or Update A Recipe</h2>
      
    </div>
  );
};

export default RecipeForm;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const RecipeForm = () => {
//   const [name, setName] = useState('');
//   const [allergens, setAllergens] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       // Fetch the recipe details if an id is present (for editing)
//       axios.get(`/api/recipe/${id}`)
//         .then(response => {
//           setName(response.data.name);
//           setAllergens(response.data.allergens.join(', ')); // Join allergens into a comma-separated string
//         })
//         .catch(error => console.error(error));
//     }
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const recipe = { name, allergens: allergens.split(',').map(allergen => allergen.trim()) };

//     if (id) {
//       // Update an existing recipe
//       axios.put(`/api/recipe/${id}`, recipe)
//         .then(() => navigate('/'))
//         .catch(err => console.error(err));
//     } else {
//       // Create a new recipe
//       axios.post('/api/recipe', recipe)
//         .then(() => navigate('/'))
//         .catch(err => console.error(err));
//     }
//   };

//   return (
//     <div>
//       <h1>{id ? 'Edit' : 'Create'} Recipe</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Allergens:
//           <input type="text" value={allergens} onChange={(e) => setAllergens(e.target.value)} />
//         </label>
//         <button type="submit">{id ? 'Update' : 'Create'}</button>
//       </form>
//     </div>
//   );
// };

// export default RecipeForm;
