import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About This App</h2>
      <p>Recipe API manages recipes using CRUD operations. 
        This app is intended for users 
        <br/>who may have or know someone with allergies. 
        <br/>They can use this app to search a recipe and find a food item's description and allergy information. 
      </p>

      <p> The creator was born with multiple allergies: dairy, peanuts, and all seafood. Yes, all.
          <br/> Growing up, I had to not only avoid many foods, but this also forced me to be cautious of what to eat
          <br/> when going out with friends or family. Instead of having to always ask servers about a 
          <br/> meal and the allergen info they may not know, this app will help eliminate any confusion.
          <br/> This could also be helpful when traveling to foreign countries!
      </p>

      * Imports: MongoDB, Express, Node.js, axios
      <br/> * I used Schemas to define my Recipe models. This allowed me to interact <br/>with the Recipe collection in MongoDB. 
      <p>
      <br/>
      </p>

    </div>
  );
};

export default About;
