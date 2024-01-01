# A program that calculates the average height of people from any given list

print("Hello and Welcome to this program !\n")

student_height = input("Please enter the heights:\n")
student_height = student_height.split()

for n in range(0, len(student_height)):
    student_height[n] = int(student_height[n])
    
total_height = 0
for height in student_height:
    total_height += height
print(f"The total height is {total_height}\n")

total_no_of_student = 0
for student in student_height:
    total_no_of_student += 1
print(f"The total number of children is {total_no_of_student}\n")

aver_height = round(total_height/total_no_of_student)
print(f"The average height from the given data is {aver_height}\n")
