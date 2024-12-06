# -*- coding: utf-8 -*-
#水波的干涉
from visual import *

display(width=1000, height=1000, background=(0.2,0.2,1), autoscale=False)

waves_l = []
waves_r = []

D = 4
v = 4.
wavelength = 8/11.
dt = 0.001
t = 0
const = (wavelength/v)/dt
count = 0

sphere(pos=(D/2,0,0), radius=0.1, color=(0.5,0.5,1))
sphere(pos=(-D/2,0,0), radius=0.1, color=(0.5,0.5,1))

while(True):
    rate(200)
    t += dt
    if int (t/dt % const) == 0:
        count += 1
        if count % 2 == 0:
            waves_l.append(ring(pos=(-D/2,0,0), axis=(0,0,1), thickness=0.05, 
                                color=(0.5,0.5,1), radius=1e-5))
            waves_r.append(ring(pos=(D/2,0,0), axis=(0,0,1), thickness=0.05, 
                                color=(0.5,0.5,1), radius=1e-5))
        if count % 2 == 1:
            waves_l.append(ring(pos=(-D/2,0,0), axis=(0,0,1), thickness=0.05, 
                                color=(0.7,0.5,0.5), radius=1e-5))
            waves_r.append(ring(pos=(D/2,0,0), axis=(0,0,1), thickness=0.05, 
                                color=(0.7,0.5,0.5), radius=1e-5))
    for wave in waves_l:
        wave.radius += v*dt
        if wave.radius >= 15:
            wave.visible = False
            del(wave)
    for wave in waves_r:
        wave.radius += v*dt
        if wave.radius >= 15:
            wave.visible = False
            del(wave)
