import turtle
turtle.tracer(0)
唐=0x20022002f802a9c2a947ff4aa942a9c3a800780006000100008
豐=0x0000ff0101415541ff5d55570155ff5501555557ff5d55410141ff0100000000
def setcuror(x,y):
	turtle.penup()
	turtle.goto(x,y)
	turtle.pendown()
def light(iflight):
	if  iflight:
		turtle.color('red')
	turtle.begin_fill()
	turtle.circle(10)
	turtle.end_fill()
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
			if 豐&(1<<(j+i*16)):
				light(1)
drawArray(16)
turtle.done()