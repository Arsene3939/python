# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *

scene = display(width=1000, height=1000, background=(0.5,0.5,0))
scene.forward = vector(0, -1, 0)

G=6.673E-11

def G_force(mass, pos_vector):
        return -G * sun.mass * mass / mag2(pos_vector) * norm(pos_vector)

sun = sphere(radius = 2.1E10, color = color.orange, material = materials.emissive)
sun.mass = 1.989E30
sum.pos = vector(0,0,0)

earth = sphere(radius = 9.56E9, color= color.blue, material = materials.earth, make_trail = True)
earth.mass = 5.972E24 #24
earth.distance = 1.495E11 #1.495e11
earth.v = vector(0,0,2.9783E4)#2.9783E3
earth.pos = vector(earth.distance, 0, 0)

dt = 60*60
while True:
        rate(6*24*10)
        earth.a = G_force(earth.mass, earth.pos) / earth.mass
        earth.v = earth.v + earth.a * dt
        earth.pos = earth.pos + earth.v * dt
