# -*- coding: utf-8 -*-
# 原子核半徑e-14 園子半徑e-10
from visual import *
from visual.graph import *
import random

scene = display(width=1000, height=1000, forward=(1,0,0))

class Au(sphere):
    def __init__(self, q1=79*1.6*1e-19, q2=2*1.6*1e-19, pos2=vector(0,0,0), m2=6.7*1e-27, *args, **kwargs):
        sphere.__init__(self, **kwargs)
        self.q1 = q1
        self.q2 = q2 # quantity of electric charge of alpha
        self.pos2 = pos2 # position of alpha
        self.m2 = m2 # mass of alpha
        self.radius = 2.88*1e-10
        self.color = color.yellow
        self.opacity = 0.5
    def Coulomblaw(self):
        return norm(self.pos2-self.pos)*8.987*1e+9*self.q1*self.q2/(abs(self.pos-self.pos2))**2
    def a(self):
        return self.Coulomblaw()/self.m2

Aus = []        
Aus_position = []
for i in range(5):
    for j in range(5):
        Aus.append(Au(pos=((i-2)*2.88*1e-10,(j-2)*2.88*1e-10,0)))
for A in Aus:
    Aus_position.append(A.pos)

alphas = []
al_position = []
for i in range(5000):
    alphas.append(sphere(pos=(( (random.random()*2.88)-1.44)*1e-10,((random.random()*2.88)-1.44)*1e-10,0.5*1e-8), radius=1e-14, make_trail=true, v=vector(0,0,-2*1e7)) )
    al_position.append(alphas[i].pos)
    
reflection_angle = []

gd = gdisplay(title='positions', xtitle='x-axis', ytitle='y-axis', x=1000, y=0, width=450, height=450)
Aus_position_diagram = gdots(gdisplay=gd, pos=Aus_position, color=color.yellow)
alpha_position_diagram = gdots(gdisplay=gd, pos=al_position, color=color.white)
gd2 = gdisplay(title='angle(0~180)', x=1000, y=450, height=300, xtitle='degree', ytitle='number')
reflection_angle_diagram = ghistogram(gdisplay=gd2, bins=arange(0,180,5), color=color.red) 
gd3 = gdisplay(title='angle(5~180)', x=1000, y=750, height=300, xmin=5, xmax=180, xtitle='degree', ytitle='number')
reflection_angle_diagram_2 = ghistogram(gdisplay=gd3, bins=arange(5,180,5), color=color.red)

dt = 1e-17
while True:
    rate(1e20)
    for alpha in alphas:
        total_a = vector(0,0,0)
        for Au in Aus:
            Au.pos2 = alpha.pos
            total_a += Au.a()
        alpha.v += total_a*dt
        alpha.pos += alpha.v*dt
    if alphas[0].pos.z < -0.5*1e-8 or alphas[1].pos.z < -0.5*1e-8 or alphas[2].pos.z < -0.5*1e-8:
        for alpha in alphas:
            reflection_angle.append(acos( dot(alpha.pos,vector(0,0,-1)/abs(alpha.pos)) )*180/pi)
        reflection_angle_diagram.plot(data=reflection_angle)
        reflection_angle_diagram_2.plot(data=reflection_angle)
        break
