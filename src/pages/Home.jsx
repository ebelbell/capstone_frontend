import React from 'react';
//import Card from '../components/cards/Card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const Home = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/recipe-form'); // Navigate to RecipeForm page
  };

  return (
    <>
      <br/>
      <h2>Welcome to the recipe app! </h2>
      <br/>
      <button style={{ color: 'white'}} className="button-style" onClick={handleButtonClick}> Create Your Recipe!</button>
      {/* <Card /> */}
    </>
  );
};

export default Home;
