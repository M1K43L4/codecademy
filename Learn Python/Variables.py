#Variables are defined by what you set them equal to

my_number = 7 #an int
my_string = "my string " #a string

print(my_string)
print(my_number)

my_number = my_number + 3
print(my_number)

#you can change numbers into strings

#try to run this:

#print(my_string + my_number)

#will raise an error. can't combine a string with an int... but

print(my_string + str(my_number)) #this runs

#is my_number still an int?

my_number = my_number+5

print(my_number) #yes! if my number were a string this wouldn't work

#my_string = my_string + 5 #this raises the same concatenate error


#to change my_number to a string
my_number = str(my_number)
