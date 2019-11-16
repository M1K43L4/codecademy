//When we give instructions once and tell the computer how many times to repeat them,
// we are using a for loop, or a count-controlled loop. 

//The for loop is good to use when you know the number of times you’d like to perform a task before you begin
For 10 times:
  placeTile('pink')
  placeTile('orange')
  placeTile('mint')\
  
//When a computer receives this program it sets a counter to 0 and executes the instructions in the body of the loop. 
//After each iteration (one pass through the instructions), it advances the counter by 1.
//when the counter is 10, 10 iterations are completed.

// What if you don’t know how many tiles to place, but you know when to stop
While there are open tiles available:
  placeTile('pink')
  placeTile('orange')
  placeTile('mint')
  
 //Be careful of infinite loops! If the condition is always true, the loop will never stop.
 
 //We define a sequence of desired tile colors (a list), 
 //and tell the computer to repeat the instructions for each item in the sequence. 

festiveList = ['pink', 'green', 'red', 'pink', 'green', 'red' ]
For each color in festiveList:
  placeTile(color)0
  
 //Use this loop when you need to perform a task for every item in a list, or when the order of things must be maintained.
 
 // this for loop initializes iterations to 0, and after each iteration, increments the count by 1
 for (i = 0; i < 10; i++) {
  placeTile('mint')
  placeTile('orange')
  placeTile('mint')
}