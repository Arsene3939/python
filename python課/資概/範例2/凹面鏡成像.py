# -*- coding: utf-8 -*-
from visual import *
# 造鏡者公式、一條線直接穿過焦點、一條線案反射定律反射
#  1.  參數設定
R = 5.
f = R/2.
obj_pos = vector(0.,0,0)
obj_height = 2.
dt = 0.001

#  2.  畫面背景、物體的設定
scene = display(width=1000, height=1000, center=obj_pos, autoscale = False)
origin = sphere(pos=(f,0,0), radius=0.05)
mirrorsurface_pos = [vector((R**2-(5-0.1*i)**2)**0.5,5-0.1*i,0) for i in range(101)]  #畫面鏡表面
mirrorsurface = curve(pos=mirrorsurface_pos, material=materials.glass)  #畫面鏡表面
x_axis = curve(pos=[(5,0,0),(-10,0,0)])
label(pos=(5,0,0), text='5')
label(pos=(-10,0,0), text='-10')
label(pos=(0,0,0), text='0')

obj = arrow(pos=obj_pos, axis=(0,obj_height,0), shaftwidth=0.05)

#  3.  光線設定
light = []
for i in range(2):
    light.append(sphere(pos=(obj.pos+obj.axis), radius=0.001, make_trail=True, 
                        color = color.yellow))
light.append(sphere(pos=(obj.pos+obj.axis), radius=0.001, make_trail=True, 
                    color = color.red))
light[0].v = norm(vector(5,0,0)-light[0].pos)
light[1].v = vector(1,0,0)
light[2].v = vector(1,0,0)

#  4.  印出放大率、光反射的結果
if obj_pos.x < f :
    m = abs( f/((R - obj_pos.x) -f ) )
    print m
while True:
    rate(2000)
    for i in range(3):
        light[i].pos += light[i].v*dt
    if abs(abs(light[0].pos)**2 - R**2) < 10e-2 and light[0].pos.x >= 0 :
        theta = acos(dot(light[0].v, vector(1.,0.,0.))/abs(light[0].v))
        light[0].v = vector(cos(theta-pi),sin(theta-pi),0)
    if abs(abs(light[1].pos)**2 - R**2) < 10e-2 and light[1].pos.x >= 0 :
        light[1].v = norm(-light[1].pos + vector(f,0,0))
    if abs(abs(light[2].pos)**2 - R**2) < 10e-2 and light[2].pos.x >= 0 :
        theta2 = acos(dot(light[2].v, light[2].pos)/abs(light[2].pos))
        light[2].v = vector(cos(2*theta2-pi),sin(2*theta2-pi),0)
    if obj.pos.x < f and light[0].pos.y <= -m*obj.axis.y :
        img = arrow(pos=(light[0].pos.x,0,0), axis=-m*obj.axis, 
                    shaftwidth=0.05, color=color.orange)
        break
    if light[0].pos.y < -5:
        break
