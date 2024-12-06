# -*- coding: utf-8 -*-
#同步衛星與繞極衛星(衛星的大小不符實際比例)
from visual import *


scene = display(width=800, height=800)
scene.range=10000
earth = sphere(radius=6378.1, material=materials.BlueMarble)
#Materials: earth, rough, emissive, BlueMarble
while True:
    rate(100)
    earth.rotate(axis=(0,1,0), angle=0.002)
