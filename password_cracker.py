# Import the random module for generating random characters
from random import *

# Import the os module for clearing the screen
import os

# Prompt the user to enter a password
u_pwd = input('Enter password: ')

# Define a list of characters to generate the password
pwd = ['a', 'b', 'c']

# Initialize a variable to store the generated password
pw = ''

# Continue the loop until the generated password matches the user's input
while pw != u_pwd:
    # Reset the generated password
    pw = ''
    
    # Generate a password character for each character in the user's input
    for letter in range(len(u_pwd)):
        gues_pwd = pwd[randint(0, 2)]  # Generate a random character from the 'pwd' list
        pw = str(gues_pwd) + str(pw)  # Add the generated character to the password
        print(pw)  # Print the current progress of the generated password
        print('Cracking Password... Please wait')  # Display a message indicating password cracking progress

# When the loop exits, the generated password matches the user's input
print("Your Password is : ", pw)  # Display the generated password
