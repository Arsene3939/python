from math import *
while(1):
    try:
        x=input()+' '
        eval(x)
    except Exception as e:
        if x[:-1] in ["leave","break","shutdown","close","out","over","end","exit"]:
            break
        print()
        print("wrong input")
        print("Error: ",end='')
        print(e)
        input()
        continue
    print("=>  ",end='')
    print(eval(x))