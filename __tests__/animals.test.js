const fs =require("fs");

const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
  } = require("../lib/animals.js");
  const { animals } = require("../data/animals");


jest.mock('fs');

  test('Create animal object', () =>{
const animal = createNewAnimal({ name:"chris", id:"1551"}, animals);

expect(animal.name).toBe("chris");
expect(animal.id).toBe("1551");
});


test("filters by query", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];
  
    const updatedAnimals = filterByQuery({ species: "gorilla" }, startingAnimals);
  
    expect(updatedAnimals.length).toEqual(1);
  });

  
test("filters by id", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];

    const updatedAnimals = findById("3", startingAnimals);

    expect(updatedAnimals.name).toEqual("Erica");
});

test('Validate animal ', () => {
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      };

      const animal2 = {
        id: "3",
        name:"",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      };

    const result = validateAnimal(animal);
    
    expect(result).toBe(true);

    expect(validateAnimal(animal2)).toBe(false);
    
});