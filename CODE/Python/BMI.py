height_inCM = input(" Please enter your Height is CMs :\n")
weight_inKG = input(" Please enter your Weight in KGs :\n")

H_inM = int(height_inCM)/100
W = int(weight_inKG)
print(f"Your height in meters is {H_inM}\n")
print(f"Your weight is {W}\n")



formula = print("BMI is calculated using the formula - Weight/Height^2\n")

BMI = W/(H_inM ** 2)
print(f"Your BMI is {BMI}\n")

if BMI <= 18.0:
    print("Your BMI calculations suggest that you are underweight\n")
elif BMI >= 18.0 and BMI <= 20.0:
    print("Your BMI calculations suggest that you are at normal weight\n")
elif BMI >= 20.0 and BMI <=28.50:
    print("Your BMI calculations suggest that you are slightly overweight\n")
elif BMI >= 28.50 and BMI <=32.60:
    print("Your BMI calculations suggest that you are obese\n")
else:
    print("Your BMI calculations suggest that you are clinically obese\n")
    
print("Thanks for checking in ;)\n")