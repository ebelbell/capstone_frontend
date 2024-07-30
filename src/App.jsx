//imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import RecipeForm from './pages/RecipeForm';
import SavedRecipe from './pages/SavedRecipe'; 
import About from './pages/About';


function App() {
  return (
    <>
      <h1>Recipes&Allergens</h1>
      
      {/* ROUTER ------------------ PAGES & PATHS */}
      <Router>
        {/* NAVBAR Components*/}
        <Navbar />
        <Routes>
          {/* HOME Component */}
          <Route path="/" element={<Home />} />
          <Route path="/recipe/create" element={<RecipeForm />} />
          <Route path="/recipe/edit/:id" element={<RecipeForm />} />
          <Route path="/" element={SavedRecipe} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

// testing the paths
//console.log('About import:', About);


export default App;
