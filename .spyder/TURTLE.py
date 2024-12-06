import turtle
turtle.tracer(0)
Width=8
code=0
LED_ARRAY=[]
for i in range(Width):
    LED_ARRAY.append([])
for i in range(Width):
    for j in range(Width):
        LED_ARRAY[i].append(0)
def setcuror(x,y):
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
def draw(x,y):
    setcuror(-150,0)
    turtle.circle(50)
    global LEDA
    global LED_ARRAY
    global code
    global arrcode
    if x>0 and y>0 and x<Width*20 and y<Width*20:
        setcuror((x//20)*20+10,(y//20)*20)
        if  LED_ARRAY[int(x//20)][int(y//20)]:
            turtle.color('white')
            LED_ARRAY[int(x//20)][int(y//20)]=0
        else:
            turtle.color('black')
            LED_ARRAY[int(x//20)][int(y//20)]=1
        turtle.begin_fill()
        turtle.circle(10)
        turtle.end_fill()
    elif x<-100 and x>-200 and y>0 and y<100:
        setcuror(-500,-100)
        turtle.clear()
        for i in range(8):
            arrcode=0
            for j in range(2):
                for b in range(4):
                    if LED_ARRAY[i][b+4*j]:
                        code+=1<<((b+j*4)+i*8)
                        arrcode+=1<<(b+j*4)
            print("%#04X"%arrcode,end=',')
        setcuror(-500,-150)
        print()
        print("%#018X"%code)
        for i in range(Width):
            for j in range(Width):
                LED_ARRAY[i][j]=0
        code=0
        drawArray(Width)
def drawArray(width):
    for i in range(width+1):
        setcuror(0,i*20)
        turtle.goto(width*20,i*20)
        for i in range(width+1):
            setcuror(i*20,0)
            turtle.goto(i*20,width*20)
    for i in range(width):
        for j in range(width):
            setcuror(i*20+10,j*20)
            turtle.circle(10)
drawArray(Width)
wn=turtle.Screen()
wn.onclick(draw)
turtle.listen()
turtle.mainloop()