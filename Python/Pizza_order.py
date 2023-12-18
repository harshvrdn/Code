# A program to receive Pizza Orders from the users.

print("Thank you for choosing our services\n")

# Taking the size of the pizza.
size = input("Please enter the size of the pizza that you would like to have: Small(S), Medium(M), or Large(L)\n")

#Initial price for the pizza
price = 0

if size == "S":
    print("The price for a Small Pizza is 70 Rupees\n")
    price = 70
    extra_peproni = input("Would you like to have extra peproni on your pizza: Y or N\n")
    if extra_peproni == "Y":
        price += 30
        print(f"The updated price for you Pizza is {price} Rupees\n")
        extra_cheese = input("Would you like to have extra cheese on your Pizza: Y or N\n")
        if extra_cheese == "Y":
            price += 20
            print(f"The updated price for your Pizza is {price} Rupees\n")
        else:
            print(f"The updated price for your Pizza is {price} Rupees\n")
    else:
        print(f"The price for your Pizza is {price} Rupees\n")
elif size == "M":
     price = 150
     print(f"The price for your Pizza is {price} Rupees\n")
     extra_peproni = input("Would you like to have extra peproni on you pizza: Y or N\n")
     if extra_peproni == "Y":
         price += 30
         print(f"The updated price for your pizza is {price} Rupees\n")
         extra_cheese = input("Would you like to have extra cheese on your pizza: Y or N\n")
         if extra_cheese == "Y":
             price += 20
             print(f"The updated price for your pizza is {price} Rupees\n")
         else:
             print(f"The updated price for your pizza is {price} Rupees\n")
     else:
         print(f"The updated price for your pizza is {price} Rupees\n")
elif size == "L":
     price = 300
     print(f"The updated price for your pizza is {price} Rupees\n")
     extra_peproni = input("Would you like to have some extra peproni on your pizza: Y or N\n")
     if extra_peproni == "Y":
         price += 30
         print(f"The updated price for your pizza is {price} Rupees\n")
         extra_cheese = input("Would you like to have some extra cheese: Y or N\n")
         if extra_cheese == "Y":
             price += 20
             print(f"The updated price for your pizza is {price} Rupees\n")
         else:
             print(f"The updated price for your pizza is {price} Rupees\n")
     else:
         print(f"The updated price for your pizza is {price} Rupees\n")
else:
    print("Sorry! Please enter a valid response\n")

end = print("Thank you for your patience! Hope you have a great day\n")


