# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

#VPython 2.1
scene.background=color.white

L=1.0
body=frame(pos=vector(0,-.07,0))
head=sphere(frame=body,pos=vector(0,L/2.5,0), radius=L/8, color=color.blue)
torso=box(frame=body,pos=vector(0,0,0), size=vector(L/3.5,L/2,L/6),color=color.gray(0.4))
front=box(frame=body,pos=vector(0,0,-.09*L), size=vector(L/3,L/2,.01*L), color=color.yellow)

larm=cylinder(frame=body,pos=vector(-.59*torso.size.x,torso.size.y/2,0), axis=vector(0,-.4*L,0), radius=.04*L,color=color.gray(0.4))
larm.rotate(angle=-.09, axis=vector(0,0,1), origin=larm.pos)
rarm=cylinder(frame=body,pos=vector(.59*torso.size.x,torso.size.y/2,0), axis=vector(0,-.4*L,0), radius=.04*L,color=color.gray(0.4))
rarm.rotate(angle=0.09, axis=vector(0,0,1), origin=rarm.pos)

lleg=cylinder(frame=body,pos=vector(-.1*L,-.25*L,0), axis=vector(0,-.6*L,0), radius=0.05*L,color=color.gray(0.4))
rleg=cylinder(frame=body,pos=vector(.1*L,-.25*L,0), axis=vector(0,-.6*L,0), radius=0.05*L,color=color.gray(0.4))
com=sphere(frame=body,pos=vector(0,-.07,0), radius=0.04, color=color.red)


body.opacity=.85
#body.rotate(angle=.5, axis=vector(1,1,1), origin=vector(0,0,0))

dtheta=0.03
t=0
dt=0.01

arr1=arrow(frame=body, pos=(0,-L/8,0), axis=vector(0,1,0), color=color.red)


while t<20:
    rate(100)
    body.rotate(angle=dtheta,axis=vector(0,1,0), origin=body.pos)
    t=t+dt