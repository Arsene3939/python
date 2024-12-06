# -*- coding: utf-8 -*-
#單擺的力學能守恆
from visual import *

theta = 45*pi/180
g = vector(0,-9.8,0)
dt = 0.001
t = 0

def tensor_k(r,L): #在這裡繩子是一個彈性係數很大的彈簧
    return 1E5*(r.mag-L)*(-r)/r.mag

scene = display(width=1000, height=1000, center=(0,-0.2,0), background=(0.5,0.6,0.5))
ball = sphere(pos=(-cos(theta)*0.45,-sin(theta)*0.45,0), radius=0.02, make_trail=True)
pivot1 = cylinder(pos=(0,0,0), axis=(0,0,0.01), radius=0.005)
pivot2 = cylinder(pos=(0,-0.2,0), axis=(0,0,0.01), radius=0.005)
ball.v = vector(0,0,0)
ball.a = vector(0,0,0)
ball.m = 1
line = curve()

while(True):
    rate(100)
    t += dt
    if ball.pos.x < 0:
        line.pos = [pivot1.pos, ball.pos]
        ball.a = g + tensor_k(ball.pos, 0.45)/ball.m
    if ball.pos.x > 0:
        line.pos = [pivot1.pos, pivot2.pos, ball.pos]
        ball.a = g + tensor_k(ball.pos-pivot2.pos, 0.25)/ball.m
    ball.v += ball.a*dt
    ball.pos += ball.v*dt
#    if int(t/dt) % 50 == 0: print "delta x: ", ball.pos.mag-0.45, "and the mechanical energy: ", ball.m*(9.8*(ball.pos.y+0.45) + 0.5*abs(ball.v)**2)
