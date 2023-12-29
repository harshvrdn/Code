# Importing the Random module
import random

# Asking the user for the names
names_string = input("Please enter your names separated by commas:\n")

# Splitting the values provided by the user and adding them in a list Names
names = names_string.split(", ")
#print(names)

# Counting the number of elements in the list Names
num_items = len(names)
#print(num_items)

# Generating random numbers between 0 and the last index number
rand_output = random.randint(0, num_items - 1)
#print(rand_output)

# choosing any random persons name with the help of rand_output
ran_value = names[rand_output]
#print(ran_value)

print(f"{ran_value} is the person who will be selected\n")
