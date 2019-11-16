//The code in the editor panel is written in a programming language known as JavaScript
// Draw some text to the screen:
drawName('Ready to Code?');

// Animate the text!
bounceBubbles();

// Change the text between the quotation marks and run your code to see your name animated!
drawName('MissMang0');

// The code below will allow you to interact with the letters
bounceBubbles();

//Variables are used to store some kind of data in a program that can be referenced elsewhere (often more than once).
// Change the value of the message variable to change the text on screen
message = 'Hello World!';

drawName(message);
bounceBubbles();

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var message = 'Change the message!';

//drawName() is a set of repeatable code that we’ve defined elsewhere called a function.
//We can call the function, or ask the program to run that code, and pass in different values to see different responses.
drawName(message, blue);
//When you call drawName with two different values, you can set the message and the display color.
bounceBubbles();

// Color variables:
red = [50, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
//Each color is represented by three numbers between [].

// Letters in the message will cycle through these colors:
letterColors = [red, orange, green, blue, purple];

message = 'Multiple colors!';

drawName(message, letterColors);
bounceBubbles();

// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// mouseResponseThreshold affects how close the mouse pointer needs to be to affect the dots that make up the letters. 
// The larger the number, the more powerful the effect of the mouse interaction
mouseResponseThreshold = 45;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.75;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.05;

message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();

