//imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import SavedRecipe from './components/SavedRecipe'; 
import About from './components/About';


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
          <Route path='/' element={<Home />} />
          <Route path="/recipe-form" element={<RecipeForm />} />
          <Route path="/recipe/:id" element={<SavedRecipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

// testing the paths
//console.log('About import:', About);


export default App;
