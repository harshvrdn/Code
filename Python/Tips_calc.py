# Simple Tips Calculator

# Asking user for the total bill and storing the value as an integer.
Bill_total = input("What is the total bill acquired ?\n")
Bill = int(Bill_total)

# Asking the user for the total number fo people so as to divide the bill equally
Person_count = int(input("How many people to divide the bill into ?\n"))

# Asking the user for the Tip Percentage
Tip_Perc = int(input("What percentage of tips would you like to give ?\n"))

tipperc_actual = Tip_Perc/100
Tips = Bill*tipperc_actual
print(f"The total Tip calculated on the bill is {Tips}.\n")

Tip_PerPerson = Tips/Person_count
print(f"The tip for each person to pay is {Tip_PerPerson}.\n")

Bill_PerPerson = Bill/Person_count
print(f"The bill for each person to pay is {Bill_PerPerson}.\n")

TotalBill_perPerson = Tip_PerPerson + Bill_PerPerson
print(f"Total Bill per person after including Tips wll be {TotalBill_perPerson}\n")

Total_bill = Tips + Bill
print(f"Total Bill after including tips wll be {Total_bill}\n")
