# -*- coding: utf-8 -*-
from visual import *

#  1.  參數設定
B = vector(0.,1.,0.) # T
dt = 0.0005
particle_q = -1
particle_m = 0.5
particle_v = vector(0.5,0.1,0.)

#  2.  畫面背景、粒子的設定
scene = display(width=800, height=800, background=(0.5,0.6,0.5))
xaxis = arrow(axis=(0.5,0,0), shaftwidth=0.01, opacity=0.3, color=(0.5,0.5,0.5))
yaxis = arrow(axis=(0,0.5,0), shaftwidth=0.01, opacity=0.3, color=(0.5,0.5,0.5))
zaxis = arrow(axis=(0,0,0.5), shaftwidth=0.01, opacity=0.3, color=(0.5,0.5,0.5))
label(pos=xaxis.axis, text='xaxis')
label(pos=yaxis.axis, text='yaxis')
label(pos=zaxis.axis, text='zaxis')
v_F = arrow(shaftwidth=0.005, color=(0.5,1,0.5))
v_B = arrow(axis=0.1*B, shaftwidth=0.005, color=color.black)
v_v = arrow(shaftwidth=0.005, color=(1,0.5,0.5))
l_F = label(text='F')
l_B = label(text='B')
l_v = label(text='v')

particle = sphere(make_trail=True, q=particle_q, m=particle_m, v=particle_v, 
                  radius=0.01, color=color.orange, retain=8000)

#  3.  粒子運動
while True:
    rate(2000)
    particle.a = particle.q*cross(particle.v, B)/particle.m
    particle.v += particle.a*dt
    particle.pos += particle.v*dt
    v_F.axis = 0.1*norm(particle.m*particle.a)
    v_v.axis = 0.1*norm(particle.v)
    v_F.pos = particle.pos
    v_B.pos = particle.pos
    v_v.pos = particle.pos
    l_B.pos = vector(particle.pos + v_B.axis)
    l_F.pos = vector(particle.pos + v_F.axis)
    l_v.pos = vector(particle.pos + v_v.axis)
    scene.center = particle.pos
