# JS Pokemon Search Assignment

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- Constructors and Prototypes or ES6 Classes (For part two)

Hello, your assignment today is to re-create the functionality of our [Pokemon search engine](https://pokemon-search.netlify.com/).

p.s. Don't forget to include the ability to toggle the card image and reset the card image upon submission of a new search.

## Instructions

We're building out a search feature in our application (no backend persistence). A user should be able to search for a Pokemon and flip that Pokemon card to see the back side.

### Part One - Create a solution without utilizing Object Orientation(no classes) ****NO jQuery****.

1. **Create a working solution in `procedural.js`**
  **DO NOT SKIP PART ONE LEAVE THE SOLUTION FOR PART ONE IN ITS OWN FILE**

2. When a users types in the search box, pokemon should appear and be filtered by the input text. (Hint: You could use a "keyup" event bound to the Pokemon filtering input field)

### Part Two - Refactoring with Constructors and Prototypes (feel free to use either ES5 or ES6)

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

1. **Create your refactored OO Solution in a new file.(`index.js`)**
3. The Pokemon class should be able to be called like: `new Pokemon(/* some arguments */)`
4. Instances of Pokemon should have a method called 'render' that returns a string representing an `li` HTML element containing the Pokemon's name and image.
8. Implement a filter functionality for your Pokemon list.
9. Implement a flip functionality on each Pokemon.
