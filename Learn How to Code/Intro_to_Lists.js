//To keep our data tidy, we’ll want to use data structures. 
//Data structures are formats that we can use to keep track of our data in an organized fashion.

// Programmers use lists as a container to store multiple pieces of information that relate to each other in some way. 
//they order our data in a specific, linear sequence.

//sequence is important because it tells us that each value has a specific position in the list.
// The position of value in a list is known as its index. 
//lists will start their index at 0 and then add one for each value.

//adding to the end of a list
myList = ['apple', 'banana', 'pear']

myList.append('orange')

// now, myList == ['apple', 'banana', 'pear', 'orange']

//inserting inside a list
myList = ['apple', 'banana', 'pear']

myList.splice(1, 0, 'mango') // make 'mango' the second item in the list

// now, myList = ['apple', 'mango', 'banana', 'pear']

//removing form the end of a list
myList = ['apple', 'banana', 'pear']

myList.pop() // returns 'pear'

// now, myList == ['apple', 'banana']

//removing from inside a list
myList = ['apple', 'banana', 'pear']

myList.splice(1, 1) // returns 'banana'

// now, myList == ['apple', 'pear']


//syntax of a list
myList = ['apple', 'banana', 'pear']
// defining a name for the list (such as myList), then setting it equal to a set of brackets []
//If there’s nothing in between the brackets, the list is empty
//myList has three items in between brackets [], each separated by a comma 

// those were all strings. We can also put other data types in a list, 
//including numbers and boolean values, or other lists

// the following line will return 'apple'
myList[0]
//myList is the name of the list we are selecting from and [0] is the first item in the list

colors = ['red', 'yellow', 'green', 'blue']
// now myFavoriteColor is equal to 'green'
myFavoriteColor = colors[2]