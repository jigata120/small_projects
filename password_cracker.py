from random import *
import os
u_pwd = input('Enter password: ')
pwd = ['a','b','c']
pw = ''
while(pw!=u_pwd):
    pw = ''
    for letter in range(len(u_pwd)):
        gues_pwd = pwd[randint(0,30)]
        pw = str(gues_pwd)+str(pw)
        print(pw)
        print('Cracking Password... Please wait')
print("Your Password is : ",pw)
















''''
from collections import deque

duck1 = 0
duck2 = 0
duck3 = 0
duck4 = 0

time = deque(list(map(int, input().split())))
tasks = list(map(int, input().split()))

while time and tasks:
    pearson_time = time.popleft()
    task = tasks.pop()
    result = pearson_time * task
    if 0 <= result <= 60:
        duck1 += 1
    elif 61 <= result <= 120:
        duck2 += 1
    elif 121 <= result <= 180:
        duck3 += 1
    elif 181 <= result <= 240:
        duck4 += 1
    else:
        time.append(pearson_time)
        tasks.append(task - 2)
    if not tasks:
        print("Congratulations, all tasks have been completed! Rubber ducks rewarded:")

print(
    f"Darth Vader Ducky: {duck1}\nThor Ducky: {duck2}\nBig Blue Rubber Ducky: {duck3}\nSmall Yellow Rubber Ducky: {duck4}")

'''