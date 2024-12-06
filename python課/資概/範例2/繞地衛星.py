# -*- coding: utf-8 -*-
#同步衛星與繞極衛星(衛星的大小不符實際比例)
from visual import *

G = 6.7e-11
t = 0
dt = 0.0001

scene = display(width=800, height=800)

earth = sphere(radius=6378.1, material=materials.BlueMarble)
earth.mass  = 5.972e24
mu = G*earth.mass

ge_satellites=[]
for i in range(3):
    ge_satellites.append(sphere(radius=1000, material=materials.rough))
    ge_satellites[i].r = 42164
    ge_satellites[i].av = (mu/ge_satellites[i].r**3)**0.5

arrows=[]
for i in range(3):
    arrows.append(arrow(shaftwidth=100 ))

PO_satellite = sphere(radius=1000, make_trail=True, retain=1000, material=materials.rough, color=(0.7,0.7,0.7))
PO_satellite.r = 6378.1+1500
PO_satellite.av = (mu/PO_satellite.r**3)**0.5

earth.av = (mu/(ge_satellites[0].r)**3)**0.5

while True:
    rate(1000)
    t += dt
    for i in range(3):
        ge_satellites[i].x = ge_satellites[i].r*math.cos(-ge_satellites[i].av*t+i*120*pi/180)
        ge_satellites[i].z = ge_satellites[i].r*math.sin(-ge_satellites[i].av*t+i*120*pi/180)
        ge_satellites[i].pos = vector(ge_satellites[i].x, 0, ge_satellites[i].z)
        arrows[i].pos = ge_satellites[i].pos
        arrows[i].axis = -0.85*ge_satellites[i].pos
    PO_satellite.y = PO_satellite.r*math.cos(-PO_satellite.av*t)
    PO_satellite.z = PO_satellite.r*math.sin(-PO_satellite.av*t)
    PO_satellite.pos = vector(0, PO_satellite.y, PO_satellite.z)
    earth.rotate(axis=(0,1,0), angle=earth.av*dt)
