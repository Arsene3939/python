# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

m = 10               # 小球質量
R = 0.5             # 小球半徑
L = 5               # 擺長
g = 9.8             # 重力加速度

thetaR = radians(45)# 擺角,起始擺角, 用 radians 將單位換成 rad
alphaR = 0           # 角加速度, 初始值為 0
omegaR = 0           # 角速度, 初始值為 0

thetaL = radians(0)# 擺角,起始擺角, 用 radians 將單位換成 rad
alphaL = 0           # 角加速度, 初始值為 0
omegaL = 0           # 角速度, 初始值為 0

dt = 0.001

# 產生動畫視窗、天花板、小球、繩子
scene = display(title = "BouncingBall", width = 800, height = 600, background = vector(0, 0.6, 0.6), center=(0,L*0.55,0))
scene.range = L
roof = cylinder(pos = vector(-L/2.0, L+0.5*R, 0), length = L, radius = 0.5*R, material=materials.wood)

ballR = sphere(pos = vector(L*sin(thetaR)+4*R, L - L*cos(thetaR), 0), radius = R*1.05, material=materials.plastic, color=(0.8,0.2,0))
ballR.v = vector(0, 0, 0)
ropeR = cylinder(pos = vector(4*R, L, 0), axis = ballR.pos - vector(4*R, L, 0), radius = 0.075*R, material=materials.plastic)

ballL = sphere(pos = vector(-4*R, 0, 0), radius = R*1.05, material=materials.plastic, color=(0.8,0.2,0), make_trail = True, retain = 100)
ballL.v = vector(0, 0, 0)
ropeL = cylinder(pos = vector(-4*R, L, 0), axis = ballL.pos - vector(-4*R, L, 0), radius = 0.075*R, material=materials.plastic)
for i in range(3):
    sphere(pos = vector(2*(i-1)*R, 0, 0), radius = R*1.05, material=materials.plastic, color=(0.8,0.2,0))
    cylinder(pos = vector(2*(i-1)*R, L, 0), axis = vector(2*(i-1)*R, 0, 0) - vector(2*(i-1)*R, L, 0), radius = 0.075*R, material=materials.plastic)


run = True

while(i < 5):
    rate(1000)
    if run:
        axisR = ballR.pos - vector(4*R, L, 0)
        alphaR = - g*sin(thetaR)/L
        omegaR += alphaR*dt
        thetaR += omegaR*dt
        ballR.pos = vector(L*sin(thetaR)+4*R, L - L*cos(thetaR), 0)    
        ropeR.axis = axisR
		
        axisL = ballL.pos - vector(-4*R, L, 0)
        alphaL = - g*sin(thetaL)/L
        omegaL += alphaL*dt
        thetaL += omegaL*dt
        ballL.pos = vector(L*sin(thetaL)-4*R, L - L*cos(thetaL), 0)    
        ropeL.axis = axisL
        if thetaR < 0:
            alphaL = 0
            omegaL = omegaR
            thetaL = 0
            alphaR = 0
            omegaR = 0
            thetaR = 0
        if thetaL > 0:
            alphaR = 0
            omegaR = omegaL
            thetaR = 0
            alphaL = 0
            omegaL = 0
            thetaL = 0
		
    if scene.mouse.events:
        m = scene.mouse.getevent()
        if m.click == 'left':
            run = not run
    