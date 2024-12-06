# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *


handle = cylinder( pos=(-1,0,0),radius=0.1, length=1,  color=(0.72,0.42,0) )
head = box( size=(1,.5,1),pos=(1,0,0),color=color.gray(.9) )
moon = sphere(radius=1, pos=(3,0,0), material=materials.rough)

while True:
	rate(100)
	handle.rotate(angle=0.02,axis=(0,0,1))
	head.rotate(angle=0.02)
	moon.rotate(angle=0.02,axis=(0,1,0),origin=(0,0,0))
	