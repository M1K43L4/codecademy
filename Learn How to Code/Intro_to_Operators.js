//we work with lots of different forms of data. But the real fun comes when we can do something with this data.
//Operations enable us to process our data, to transform it into something else.
// 3 types:
// Making calculations using arithmetic operators.
// Comparing information using comparison operators.
// Creating logical expressions using logical (aka Boolean) operators.

//If we want to write a program that performs calculations, we need to use arithmetic operators. 
//They include addition (+), subtraction (-), multiplication (*), and division (/).

// problem 1: How does this work in real life? Let’s say we need to buy some apples for the fruit salad recipe. 
//The recipe calls for six apples, but we can only find bags of five. 
//If we buy just enough bags for your recipe, how many extra apples will you have?

apples_needed=6 //6 apples
1_bag_of_apples=5 // holds 5 apples
2_bag_of_apples=1_bag_of_apples*2 // 5*2=10 apples. We have enough apples here
// my 10 apples - my apples_needed = my extra apples left over
extra_apples = 2_bag_of_apples - apples_needed //extra_apples = 10 apples - 6 apples; extra_apples = 4

//Comparison operators allow us to compare values 
//Rather than evaluating to an integer, they evaluate to true or false, AKA boolean values.
// Expressions that evaluate to boolean values are known as boolean expressions.
//two main instances where we use comparison operators:
// If we have an unknown quantity.
//If we need to compare two known values.

// problem 2: What if we knew that we needed a half pound of strawberries, but we didn’t know the weight of each strawberry?

//we can't count the strawberries like we did the apples
// take the total weight and see if it is == 0.5 lbs
int total_weight = w // total weight is set to some numerical
if w >= 0.5 return true // if it is greater than 0.5, we have met our requirement. less than is the only problem
else return false

//problem 3: If we’re making a salad that’s super citrusy, then we need to make sure we have more oranges than bananas. 
//If that’s false, I’ll have to add more oranges.
int bananas=b 
int oranges = o
if o>b print "we have more oranges than bananas"
else print "you have too many bananas"

is (oranges > bananas)? => true

//Logical operators, also known as boolean operators, evaluate multiple boolean expressions. 
// looks at several relationships by connecting them with logical operators and 
//then determining the logic/validity of the overall expression.

// AND — both expressions evaluate to true, so the final result is true. else it results false (1 false makes false)
// OR - one of the expressions evalutes to true, so the final result is true. (2 false make false)
// NOT - an expression, no matter its logical value, evaluates to the opposite: (True makes false)


