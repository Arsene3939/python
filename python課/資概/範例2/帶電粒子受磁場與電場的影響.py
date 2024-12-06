# -*- coding: utf-8 -*-
from visual import *

#  1.  參數設定
B = vector(0,-1,0)
E = vector(0,0,5)
dt = 0.01
particle_m = 0.1
particle_q = 0.01
particle_v = vector(1,0,0)

#  2.  畫面背景、粒子設定
scene = display(width=800, height=800, background=(0.5,0.6,0.5))
N = box(pos=(0,2,0), length=4, height=0.2, width=4, color=color.red)
S = box(pos=(0,-2,0), length=4, height=0.2, width=4, color=color.blue)
board = box(pos=(4,0,0), length=0.2, height=4, width=4)

particle = sphere(pos=(-2,0,0), radius=0.05, q=particle_q, v=particle_v, 
                  m=particle_m, color=color.yellow, make_trail=True)
                  
label(text='please click', pos=particle.pos+vector(0,0.5,0))

#  3.  滑鼠互動
scene.waitfor('click')

#  4.  粒子運動
while True:
    rate(100)
    particle.a = particle.q*( cross(particle.v,B) + E )/particle.m
    particle.v += particle.a*dt
    particle.pos += particle.v*dt
    if particle.pos.x >= board.pos.x:
        break
