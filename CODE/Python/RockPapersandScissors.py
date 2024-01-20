import random

# ASCII Arts for rock, paper, and scissors by Veronica Karlsson

rock = '''  
    _______
---'   ____)  
      (______)  
      (________)  
      (_______)
---.--(___)  
'''

paper = '''  
    _______
---'   ____)____  
          ______)  
          _______)  
         _______)
---.__________)  
'''

scissors = '''  
    _______
---'   ____)____  
          ______)  
       __________)  
      (____)
---.__(___)  
'''

print("Hello and Welcome to the game !\n")
print("Game rules are as follows:\n"
      "1. Rock cuts scissors.\n"
      "2. paper cuts rock.\n"
      "3. scissors cuts paper.\n")

player_name = input("Please enter your name:\n")

outcome = [rock, paper, scissors]

player_input = input("Please make your choice: R for Rock, P for Paper and S for Scissors\n")
player_input = player_input.upper()
if player_input == "R":
    print(rock)
    comp_choice = random.choice(outcome)
    if comp_choice == rock:
        print(rock)
        print("The match is Draw.\n")
    elif comp_choice == paper:
        print(paper)
        print(f"{player_name} has lost the game.\n")
    else:
        print(scissors)
        print(f"{player_name} has won the game.\n")
elif player_input == "P":
    print(paper)
    comp_choice = random.choice(outcome)
    if comp_choice == rock:
        print(rock)
        print(f"{player_name} has won the game.\n")
    elif comp_choice == paper:
        print(paper)
        print("The match is Draw.\n")
    else:
        print(scissors)
        print(f"{player_name} has lost the game.\n")
elif player_input == "S":
    print(scissors)
    comp_choice = random.choice(outcome)
    if comp_choice == rock:
        print(rock)
        print(f"{player_name} has lost the game.\n")
    elif comp_choice == paper:
        print(paper)
        print(f"{player_name} has won the game.\n")
    else:
        print(scissors)
        print(f"The game is Draw.\n")
else:
    print("Wrong Input. Please try again !\n")