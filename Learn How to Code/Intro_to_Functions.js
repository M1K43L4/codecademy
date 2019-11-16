//What if you had to say each step every time you ordered a hamburger?
//Place the bread down
//Add the burger patty
//Add the pickles
//Place the bread on top
// It’s tedious. It takes a long time, and risks mistakes.

// It would be easier to define what a hamburger is.
function makeHamburger() {
  Add bread
  Add burger patty
  Add pickles
  Add bread
}

//Not everyone wants to eat hamburgers.
//generalize the function to work with other sandwiches

function makeSandwich(topping1, topping2) {
  Add bread
  Add topping1
  Add topping2
  Add bread
}

//function makeSandwich() is given two inputs, or parameters. 
// By using functions, we made it easier to read, reusable, and modular: each set of related instructions 
// is grouped into its own function, which we can easily add, remove, and swap to make a diversity of commands


//this function is defined in main.js
// Define the 'makeSandwich()' function
function makeSandwich(topping1, topping2) { //parameters
  sandwich = 'bread' + ','
  sandwich += topping1 + ','
  sandwich += topping2 + ','
  sandwich += 'bread'
  return sandwich
}

// Call the function and store the returned value in 'result'
result = makeSandwich('peanut butter', 'jelly') //arguments

//When we define a function, its inputs are called parameters.
// Each time we call the function, we’ll give actual values for each input, called arguments.