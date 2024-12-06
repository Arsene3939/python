# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

m = 1               # 小球質量
R = 0.5             # 小球半徑
L = 5               # 擺長
theta0 = radians(45)# 起始擺角, 用 radians 將單位換成 rad
theta = theta0      # 擺角
g = 9.8             # 重力加速度
alpha = 0           # 角加速度, 初始值為 0
omega = 0           # 角速度, 初始值為 0
dt = 0.001

# 產生動畫視窗、天花板、小球、繩子
scene = display(title = "BouncingBall", width = 800, height = 600, background = vector(0, 0.6, 0.6), center=(0,L*0.55,0))
scene.range = L*0.9
roof = cylinder(pos = vector(-L/2.0, L+0.5*R, 0), length = L, radius = 0.5*R, material=materials.wood)
ball = sphere(pos = vector(L*sin(theta0), L - L*cos(theta0), 0), radius = R, material=materials.plastic, color=(0.8,0.2,0), make_trail = True, retain = 100)
ball.v = vector(0, 0, 0)
rope = cylinder(pos = vector(0, L, 0), axis = ball.pos - vector(0, L, 0), radius = 0.1*R, color = color.yellow)


run = False

while(i < 5):
    rate(1000)
    if run:
        r = ball.pos - vector(0, L, 0)
        alpha = - g*sin(theta)/L
        omega += alpha*dt
        theta += omega*dt
        ball.pos = vector(L*sin(theta), L - L*cos(theta), 0)    
        rope.axis = r
		
    if scene.mouse.events:
        m = scene.mouse.getevent()
        if m.click == 'left':
            run = not run
    