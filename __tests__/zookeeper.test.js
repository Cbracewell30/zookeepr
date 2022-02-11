const fs =require("fs");

const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
  } = require("../lib/zookeepers.js");

  const { zookeepers } = require("../data/zookeepers");
const { TestWatcher } = require("jest");

jest.mock('fs');

test(' Test for zookeeper creation', () => {
    const keeper = createNewZookeeper({name:"chris", id:"85"},zookeepers );

    expect(keeper.name).toBe("chris");
    expect(keeper.id).toBe("85");
});

test ('filter by query', () => {
    const startingKeepers = [
        {
        id: "0",
      name: "Kim",
      age: 28,
      favoriteAnimal: "dolphin"
    },
    {
      id: "1",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin"
    },
    ]

const result = filterByQuery({age:28},startingKeepers);

expect(result.length).toBe(1);

});

test('Find keeper by ID', () => {
    const startingKeepers = [
        {
        id: "0",
      name: "Kim",
      age: 28,
      favoriteAnimal: "dolphin"
    },
    {
      id: "1",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin"
    },
    ]

    const result = findById("1",startingKeepers);

    expect(result.name).toBe("Raksha");
});

test('Validating the info entered.', () => {
    const startingKeepers =  {

      name: "Kim",
     
      favoriteAnimal: "dolphin"
    };
    

    const startingKeepers2 =  {
      id: "1",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin"
    };
    

const result = validateZookeeper(startingKeepers);
const result2 =validateZookeeper(startingKeepers2)


expect(result).toBe(false);
expect(result2).toBe(true);

});