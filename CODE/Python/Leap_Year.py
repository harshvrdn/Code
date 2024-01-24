# A program to check whether the input year is a leap year or not.

print("\n Hello and Welcome to the program\n")

# User's input

year_input = input("Please provide the year you want to check: \n")
Year = int(year_input)

print("\nA Leap Year is an year which has 366 days in total, i.e., 29 days in February\n")
print("\nWe can check if an year is a leap year or not by the following ways:\n" + 
      "1. Dividing the year by 4   to see if it has got any remainders\n" + 
      "2. Dividing the year by 100 to see if it has got any remainders\n" + 
      "3. Dividing the year by 400 to see if it has got any remainders\n")

year_by4 = Year%4
print(f"Dividing the year by 4 we get: {year_by4}\n")

year_by100 = Year%100
print(f"Dividing the year by 100 we get: {year_by100}\n")

year_by400 = Year%400
print(f"Dividing the year by 400 we get: {year_by400}\n")

if year_by4 == 0:
    if year_by100 == 0:
        if year_by400 == 0:
            print(f"The year {Year} is a leap year")
        else:
            print(f"The year {Year} is not a leap year\n")
    else:
        print(f"The year {Year} is a leap year\n")
else:
    print(f"The year {Year} is not a leap year\n")



    
