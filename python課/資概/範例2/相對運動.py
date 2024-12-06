
# -*- coding: utf-8 -*-
from visual import *
scene = display(width=1000, height=1000, center=(0,0.15,0))

f1 = frame()
table = cylinder(radius=0.3, material=materials.wood, axis=(0,0.01,0), pos=(0,-0.01-0.02,0))
cube1 = box(length=0.06, height=0.04, width=0.01, material=materials.wood, pos=(0,0,0.2))
cube2 = box(length=0.06, height=0.04, width=0.01, material=materials.wood, pos=(0,0,-0.2))
ball1 = sphere(radius=0.02, pos=(0.2,0,-0.15), color=color.blue)
ball2 = sphere(radius=0.02, pos=(0.02,0,0), color=color.orange, material=materials.marble)
ball3 = sphere(radius=0.02, pos=(-0.02,0,-0.15), color=color.green, material=materials.marble)
ceiling = cylinder(radius=0.05, material=materials.wood, axis=(0,0.01,0), pos=(0,0.4,0))
bulb = sphere(radius=0.005, material=materials.emissive, pos=(0,0.2,0))
line = curve(pos=[ceiling.pos, bulb.pos])
light = local_light(pos=bulb.pos)
ball1.w = 2*pi/1
ball1.axis = -ball1.pos
ball2.v = 0.5
ball2.axis = (0,1,0)
ball3.v = 0.2
ball3.axis = (0,1,0)
a = arrow(opacity=0)
b = arrow(opacity=0)
dt = 0.0001
t = 0

def Perspective(x):
    if x == 'a':
        scene.center = bulb.pos
        scene.forward = (-1,0,0)
    if x == 'b':
        scene.center = ball2.pos
        scene.forward = (-1,0,0)
    if x == 'c':
        scene.center = ball3.pos
        scene.forward = (-1,0,0)
    if x == 'd':
        scene.center = ball1.pos
        scene.forward = ball1.pos.rotate(angle=90, axis=(0,1,0))

x = ' '

while True:
    rate(1000)
    t += dt
    ball1.pos = rotate(ball1.pos, ball1.w*dt, (0,1,0))
#    ball1.axis = rotate(ball1.axis,(0.25*ball1.w/ball1.radius)*dt,-ball1.pos)
    ball1.axis = -ball1.pos
    ball2.pos.z += ball2.v*dt
    ball2.axis = rotate(ball2.axis,(ball2.v/ball2.radius)*dt,(1,0,0))
    ball3.pos.z += ball3.v*dt
    ball3.axis = rotate(ball3.axis,(ball3.v/ball3.radius)*dt,(1,0,0))
    a.axis = ball2.axis*0.1
    a.pos = ball2.pos
    b.axis = ball1.axis
    b.pos = ball1.pos
    if ball2.pos.z > cube1.pos.z-cube1.width/2-ball2.radius or ball2.pos.z < cube2.pos.z+cube2.width/2+ball2.radius:
        ball2.v = -ball2.v
    if ball3.pos.z > cube1.pos.z-cube1.width/2-ball3.radius or ball3.pos.z < cube2.pos.z+cube2.width/2+ball3.radius:
        ball3.v = -ball3.v
    if scene.kb.keys: # event waiting to be processed?
        s = scene.kb.getkey() # get keyboard info
        if s == 'a':
            x = s
        if s == 'b':
            x = s
        if s == 'c':
            x = s
        if s == 'd':
            x = s
    Perspective(x)

#    scene.center = bulb.pos
#    scene.forward = (-1,0,0)

#    scene.up = ball2.axis
#    scene.center = ball2.pos
#    scene.forward = (-1,0,0)
        
#    scene.up = ball3.axis
#    scene.center = ball3.pos
#    scene.forward = (-1,0,0)

#    scene.center = ball1.pos
#    scene.forward = ball1.pos.rotate(angle=90, axis=(0,1,0))

