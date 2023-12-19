# A simple choices based game made in python.
# Importing Random function
import random 

print("Hello and Welcome to this choice based game that I made in python\n"
      "The goal here is to find the treasure by making good choices\n")

# Asking for the player's name
Player = input("Please enter your name:")

# Randomizing the games final output
game_output1 = "Game won"
game_output2 = "Game lost"

game_outputrand = [game_output1, game_output2]

choice1 = input('You are at a crossroad. Where do you wanna go? Type "Left" or "Right"\n')
if choice1 == "Left":
    choice2 = input("You come across a lake in the middle of an ocean. What do you want ot do now? You can either swim to there or wait for the boat. Type 'Swim' or 'Wait'\n")
    if choice2 == "Wait":
        choice3 = input("You arrive at the island. There are three doors here, Blue, Green and White. Which one do you choose? Type 'Blue' or 'Green' or 'White'\n")
        if choice3 == "Blue":
            print(f"Congratulations {Player}, You have won the game. . .\n")
        else:
            print("Game Over! Please try again...\n")
    else:
        print("Game Over! Please try again...\n")
else:
    print("Game Over! Please try again...\n")

