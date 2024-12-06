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
L = 10.0		 		# 地板長度
thick = 1.0				# 地板厚度
theta = radians(30) 	# 傾斜角
h = L * tan(theta)      # 方塊離地高度
slopeL = L / cos(theta) # 斜面長度
g = 9.8      			# 重力加速度 9.8 m/s^2
t = 0        			# 時間
dt = 0.001   			# 時間間隔

scene = display(title = "Free Slope Fall", width = 800, height = 600, x = 0, y = 0, \
	center = vector(2.5*L, h/2, 0), background = vector(0, 0.6, 0.6))
scene.range = 3*L
floor = box(pos = vector(2.5*L, -size/2 - thick/2, 0), length = L*5, height = thick, width = L, matetial=materials.plastic)
slope = box(pos = vector(L/2, h/2 - size/2 - thick/2, 0), axis=(-cos(theta),sin(theta),0),length = slopeL, \
	height = thick, width = 10, matetial=materials.silver)
cube = box(pos = vector(0, h, 0), size=(1,1,1), color = color.red)
cube.v = vector(0, 0, 0)

gd = gdisplay(title = "plot", width = 600, height = 450, x = 0, y = 600, xtitle = "t(s)", ytitle = "blue: y(m), red: v(m/s)")
yt = gcurve(graph = gd, color = color.blue)
Vyt = gcurve(graph = gd, color = color.red)
Vxt = gcurve(graph = gd, color = color.yellow)
gL = g * sin(theta) 

while cube.pos.x <= 5*L:
    rate(1000)
    if cube.pos.x <= L:
        cube.a = vector(gL*cos(theta),-gL*sin(theta) , 0)
        cube.axis=(-cos(theta),sin(theta),0)
    elif cube.pos.y <=0:
        cube.a = vector(0, -g, 0)
        cube.v.y *= -1
        cube.axis=(1,0,0)
    #else:
	
    cube.v += cube.a*dt
    cube.pos += cube.v*dt
    yt.plot(pos = (t, cube.pos.y))
    Vyt.plot(pos = (t, cube.v.y))
    Vxt.plot(pos = (t, cube.v.x))
    t += dt
	   
