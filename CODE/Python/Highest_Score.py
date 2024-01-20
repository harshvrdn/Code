# A program that calculates the highest score from any given set without using max function

print("Hello and Welcome to this program !\n")

student_scores = input("Please enter your scores:\n")
student_scores = student_scores.split()

for n in range(0, len(student_scores)):
    student_scores[n] = int(student_scores[n])

total_score = 0
for score in student_scores:
    total_score += score
print(f"total score is {total_score}\n")

max_score = 0
for max in student_scores:
    if max > max_score:
        max_score = max

print(f"The largest score from the given set is {max_score}\n")

