# -*- coding: utf8 -*-
from visual import *


ball = sphere(pos=vector(-0,0,0), radius=0.5,color=color.cyan)
wallR = box(pos=vector(6,0,0), size=vector(0.2,12,12), color=color.green)
wallR = box(pos=vector(-6,0,0), size=vector(0.2,12,12), color=color.green)
ball.velocity = vector(5,0,0)
deltat = 0.005
t = 0
ball.pos = ball.pos + ball.velocity*deltat
while t < 3:
 rate(10)
 if ball.pos.x > wallR.pos.x:
     ball.velocity.x = -ball.velocity.x
 ball.pos = ball.pos + ball.velocity*deltat 
 t = t + deltat 
