import random

print("Hello and Welcome to the Coin Tosser program !\n")

player_name = input("Please enter your name:\n")

random_output = random.randint(0,1)
if random_output == 0:
    print(f"{player_name}, your Coin Toss value is Heads\n")
else:
    print(f"{player_name}, your Coin Toss value is Tails\n")
