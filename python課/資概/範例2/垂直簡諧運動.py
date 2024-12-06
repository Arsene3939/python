# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

# 1. 參數設定
# 重力加速度
g = vector(0, -9.8, 0)
# 木塊質量 0.5 kg
m = 0.5
# 彈簧的彈性性數 10 N/m
k = 10.0
# 時間間隔
dt = 0.001
# 經過時間
t = 0

# 2. 畫面設定
# 畫布
scene = display(width=1000, height=1000, background=(0.5,0.6,0.5))
# 位置圖
gd1 = gdisplay(x=800, y=0, xtitle='t(s)', ytitle='x(m)', ymax=1, xmax=10, ymin=-1.5)
tx = gcurve(gdisplay=gd1, color=color.yellow)
# x軸箭頭
x_axis = arrow(axis=(1, 0, 0), shaftwidth=0.01)
# y軸箭頭
y_axis = arrow(axis=(0, 1, 0), shaftwidth=0.01)
# z軸箭頭
z_axis = arrow(axis=(0, 0, 1), shaftwidth=0.01)
# 天花板
ceiling = box(length=3, height=0.01, width=1, material=materials.silver)
# 木塊
square = box(length=0.2, height=0.2, width=0.2, material=materials.wood)
# 彈簧
spring = helix(radius=0.06, coils=15, thickness = 0.03)

# 設定天花板位置
ceiling.pos = (0, 1, 0)
# 設定木塊位置
square.pos = (0,0,0)
# 設定木塊初速
square.v = vector(0, -2, 0)
# 設定彈簧位置
spring.pos = ceiling.pos
# 設定彈簧軸線(長度)
spring.axis = square.pos - spring.pos
# 設定彈簧原長
spring.L = spring.length

# 3. 運動部分
while True:
        rate(1000)
        #彈簧的加速度 a= ( k / m ) * 彈簧的伸長量 * 彈簧的反方向 + 重力加速度
        square.a = -(k/m)*(spring.length-spring.L) * spring.axis.norm() + g
        square.v += square.a*dt
        square.pos += square.v*dt
        #更新彈簧的長度
        spring.axis = square.pos-spring.pos

        # 畫出y軸位置圖
        t = t + dt
        tx.plot(pos=(t, square.pos.y))
