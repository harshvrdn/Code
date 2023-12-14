# Program to count the number of week or years left in the user's life.

Age_input = input("Please enter your current age:\n")
# This will store the user's age as an int value
Age = int(Age_input)

# Printing basic info about average human lifespan
print("According to WorldData.info an average male lives for about 69 Years and an average female lives for about 74 Years.\n")

# Asking for Genders!
Sex_input = input("Please enter your Gender: M or F \n")

# IF statement for more clarity gender wise
if Sex_input == "M":
    ageleft_Male = 69 - Age
    print(f"Your age left in Years is {ageleft_Male}\n")
    ageLeftInWKs_Male = ageleft_Male*52
    print(f"Your age left in Weeks is {ageLeftInWKs_Male}\n")
    

elif Sex_input == "F":
    ageleft_Female = 74 - Age
    print(f"Your age left in Years is {ageleft_Female}\n")
    ageLeftInWKs_Female = ageleft_Female*52
    print(f"Your age left in Weeks is {ageLeftInWKs_Female}\n")


else:
    print("Error: Please Enter correct value\n")
    
   

