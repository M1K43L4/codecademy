#Math

# math follows the pemdas order of operations

print(5+3) #addition
print(5-3) #subtraction
print(5*3) #multiplication
print(5/3) #division

my_int = (5*3)/2 + 7**2 #7**2 means 7 raised to the power of 2

print(my_int)

sassy_combinations = 129 * 1345 + 120 / 6 - 12

print(sassy_combinations)

#modulo operater is used with %
#it returns the remainder after division is performed

print(15%2) # 2 goes into 15, 7 times (2*7=14)evenly with 1 left over,
#so should return 1

print(14%3) # 3 goes into 14, 4 times (3*4=12)evenly with 2 left over

#a % value returning 0 means it has no remainder. so the numerator is
#divisible by the denominator

#There is shorthand for updating variables holding a value

my_int = 3
my_int += 4 #takes the value my_int holds (3) and adds 4 to it
#there is also -= , *= , and /=


#there are special ints called floats. floats have decimal values
# this evaluates to 150:
float4 = 1.5e2 #this is scientific notation: 1.5 x 10**2

#in python 2, division does not show decimal places by default. so 5/3 would just be 1 instead of 1.667
#need to define one of the numbers as a float to fix this
my_float = float(5)/3 #this could work
my_float = 5.0/3 #this could also work

print(my_int)
