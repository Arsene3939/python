# -*- coding: utf-8 -*-
#給物體的位置及質量，求這些球的質量中心
from visual import *

scene = display(width=1000, height=1000, center=(0,-0.2,0), background=(0.5,0.6,0.5))

def center(poslist, mlist, n):
    mtotal = 0
    total = vector(0,0,0)
    for i in range(n):
        mtotal += mlist[i]
        total += mlist[i]*poslist[i]
    return total/mtotal

n = 4 #物體的數量
poslist = [vector(1,1,1), vector(0,0,0), vector(1,2,3), vector(1,0,0)] #物體的中心
mlist = [1, 1, 2, 3] #物體的質量
ball = []
labellist=[]

for i in range(n):
    ball.append(sphere(pos=poslist[i], radius=0.1*mlist[i]**(1/3.), opacity=0.5))
    labellist.append(label(pos=(poslist[i]), text= '(%1.2f,%1.2f,%1.2f)' % (poslist[i].x, poslist[i].y, poslist[i].z)))

ball.append(sphere(pos=center(poslist, mlist, n), radius=0.01, color=color.red))
labellist.append(label(pos=center(poslist, mlist, n), text= '(%1.2f,%1.2f,%1.2f)' % (center(poslist, mlist, n).x, center(poslist, mlist, n).y, center(poslist, mlist, n).z), color=color.red))
