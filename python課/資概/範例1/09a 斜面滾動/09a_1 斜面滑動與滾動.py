# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 4a-1.斜面滑動
 日期: 2018/2/18
 
"""


"""
 1. 參數設定, 設定變數及初始值
"""
size = 1.0     			# 方塊邊長
L = 30.0		 		# 地板長度
thick = 0.2				# 地板厚度
theta = radians(30) 	# 傾斜角
h = L * tan(theta)      # 方塊離地高度
slopeL = 1.1*L / cos(theta) # 斜面長度
g = 9.8      			# 重力加速度 9.8 m/s^2
t = 0        			# 時間
dt = 0.001   			# 時間間隔

scene = display(title = "Free Slope Fall", width = 800, height = 600, x = 0, y = 0, \
	center = vector(0.4*L, h/2, 0), forward=vector(-1,0,-1),background = vector(0, 0.6, 0.6))
scene.range = 0.8*L
floor = box(pos = vector(0.5*L, -size/2 - thick/2, 0), length = L, height = thick, width = L, matetial=materials.plastic)
slope = box(pos = vector(L/2, h/2 - size/2 - thick/2, 0), axis=(-cos(theta),sin(theta),0),length = slopeL, \
	height = thick, width = 10, matetial=materials.silver)

cube = box(pos = vector(0, h, -2), size=(0.9,0.9,0.9), color = color.red)
cube.v = vector(0, 0, 0)

ball = sphere(pos = vector(0, h, 0), radius = size/2, color = color.blue)
ball.v = vector(0, 0, 0)

ring = cylinder(pos = vector(0, h, 2), radius = 0.45, axis=(0,0,1), length=0.9, color = color.orange)
ring.v = vector(0, 0, 0)

gBox = g * sin(theta)
cube.axis=(-cos(theta),sin(theta),0)

gRing = g * sin(theta) * 2 / 3
gBall = g * sin(theta) * 5 / 7

run = False
dt = 0.001
while True:
    rate(1000)
    cube.a = vector(gBox*cos(theta),-gBox*sin(theta) , 0)
    cube.v += cube.a*dt
    cube.pos += cube.v*dt
	
    ring.a = vector(gRing*cos(theta),-gRing*sin(theta) , 0)
    ring.v += ring.a*dt
    ring.pos += ring.v*dt
	
    ball.a = vector(gBall*cos(theta),-gBall*sin(theta) , 0)
    ball.v += ball.a*dt
    ball.pos += ball.v*dt
    
    
    if run:
        dt = 0.001
    else:
        dt = 0
    #t += dt
	
    if scene.mouse.events:
        m = scene.mouse.getevent()
        if m.click == 'left':
            run = not run
	   
