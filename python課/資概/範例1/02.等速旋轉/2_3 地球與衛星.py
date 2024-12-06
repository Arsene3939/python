# -*- coding: utf-8 -*-
"""
 VPython教學: 2_3 月球繞地球公轉
 日期: 2018/9/8
 作者: 俞安字
 待改進: 以「行星公轉」原理重做此功能
"""
from visual import *


scene = display(width=800, height=800)
earth = sphere(radius=6378.1, pos=(0,0,0), material=materials.BlueMarble)
moon = sphere(radius=1737, pos=(38000,0,0), material=materials.rough)
#Materials: earth, rough, emissive, BlueMarble
while True:
    rate(100)
    earth.rotate(axis=(0,1,0), angle=0.002)
    moon.rotate(axis=(0,1,0),origin=(0,0,0),angle=0.0001)
