height_inCM = input(" Please enter your Height :")
weight_inKG = input(" Please enter your Weight :")

H_inM = int(height_inCM)/100
W = int(weight_inKG)
print(H_inM)
print(W)

formula = print("BMI is calculated using the formula - Weight/Height^2")

BMI = W/(H_inM ** 2)
print(BMI)

print("Thanks for checking in ;)")