const fs = require('fs');
const path = require('path');


function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
      if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
      } else {
        personalityTraitsArray = query.personalityTraits;
      }
      personalityTraitsArray.forEach(trait => {
        filteredResults = filteredResults.filter(
          animal => animal.personalityTraits.indexOf(trait) !== -1
        );
      });
    }
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;                                                                                                                                                                                                                                                                                  
  };
  
  function findById(id, animalsArray) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
    return result;
  };
  
  
  function createNewAnimal(body,animalsArray) {
    const animal = body;
    // our function's main code will go here!
  animalsArray.push(animal);
  // Writes info to our file location
  fs.writeFileSync(
    path.join(__dirname, '../data/animals.json'),
    //Saving Java Script array as JSON. Null & 2 Keep data formatted. Null = no edit to exsisitng dat. 2 = creats white spaces in between data to make it more readable.
    JSON.stringify({ animals: animalsArray }, null, 2)
  );
    //return finished code to post route for response.
    return animal;
  }; 

  
  function validateAnimal(animal) {
    if (!animal.name || typeof animal.name !== 'string') {
      return false;
    }
    if (!animal.species || typeof animal.species !== 'string') {
      return false;
    }
    if (!animal.diet || typeof animal.diet !== 'string') {
      return false;
    }
    if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
      return false;
    }
    return true;
  };

  module.exports = {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal
  };