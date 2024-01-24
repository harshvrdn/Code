# Program to fin whether the user's input number is odd or even

print("\nWelcome to the program ! ;)\n")

num_raw = input("Please enter the number that you want to check for:\n")
num = int(num_raw)

oddOReven = num%2

if oddOReven == 0:
        print("This number is even.")
else:
        print("This number is odd")
    
    