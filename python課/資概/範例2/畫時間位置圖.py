# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

#  1. 畫面設定
# 畫布
scene = display(center=(0, 0.3, 0), width=1000, height=1000, background=(0.5,0.6,0.5))
# 位置圖
gd1 = gdisplay(x=800, y=0, xtitle='t(s)', ytitle='x(m)', ymax=1, xmax=20, ymin=-1)
tx = gcurve(gdisplay=gd1, color=color.yellow)
# 桌面
table = cylinder(pos=(0,-0.03,0), axis=(0,-0.01,0), radius=0.7, material=materials.wood)
# 圓心
center = cylinder(pos=(0, -0.03, 0), axis = (0, 0.03, 0), radius = 0.007)
# 球
ball = sphere(pos=(-0.5,0,0), radius=0.03, color=color.blue)
#  2. 設定參數、初始值
ball.v = vector(0, 0, 0.5)
r = abs(ball.pos)
print "速度 = ", abs(ball.v)
print "時間週期 = ", 2*pi*r/ abs(ball.v)
# 時間間隔
dt = 0.001
# 經過時間
t = 0

#  3. 運動部分
while True:
    rate(1000)

    # 更新球的資料
    ball.a = - (abs(ball.v)**2 / r) * (ball.pos/r)
    ball.v += ball.a*dt
    ball.pos += ball.v*dt

    # 畫出x軸位置圖
    t = t + dt
    tx.plot(pos=(t, ball.pos.x))
