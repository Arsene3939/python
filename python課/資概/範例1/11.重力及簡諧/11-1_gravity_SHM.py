# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 11-1.重力造成的簡諧運動, 初速為0, 從端點出發
 Ver. 1: 2018/2/23
 Ver. 2: 2018/3/14
 作者: 王一哲
"""

"""
 1. 參數設定, 設定變數及初始值, 當 h << d 時週期理論值 3.84669 s
"""
size = 1              # 小球半徑
m = 1                 # 小球質量
M = 2E13              # 星球質量
d = 10                # 星球之間的距離*0.5倍
h = 3                 # 小球在星球連線的中垂線上的距離
G = 6.67E-11          # 重力常數
v0 = 0                # 小球初速
i = 0                 # 小球回到初位置的次數
t = 0                 # 時間
dt = 0.001            # 時間間隔

"""
 2. 畫面設定
    (1) 用 canvas 物件作為顯示動畫用的視窗 http://www.glowscript.org/docs/VPythonDocs/canvas.html
    (2) 用 sphere 物件產生小球 http://www.glowscript.org/docs/VPythonDocs/sphere.html
    (3) 用 cylinder 物件產生星球連心線 http://www.glowscript.org/docs/VPythonDocs/cylinder.html
    (4) 用 arrow 物件產生表示速度用的箭頭 http://www.glowscript.org/docs/VPythonDocs/arrow.html
    (5) 用 graph 產生繪圖視窗 http://www.glowscript.org/docs/VPythonDocs/graph.html
"""
# 產生動畫視窗
scene = display(title = "Gravity and SHM", width = 600, height = 600, x = 0, y = 0, center = vector(0, 0, 0), \
                          background = color.black)
# 產生 2 個質量為 M 的星球
s1 = sphere(pos = vector(-d, 0, 0), radius = size, color = color.blue)
s2 = sphere(pos = vector(d, 0, 0), radius = size, color = color.blue)
# 產生質量為 m 的星球並設定初速度
ball = sphere(pos = vector(0, h, 0), radius = 0.4*size, color = color.red)
ball.v = vector(0, v0, 0)
# 畫星球間的連線、上端點、下端點
line = cylinder(pos = s1.pos, axis = s2.pos - s1.pos, radius = 0.1*size, color = color.yellow)
top = cylinder(pos = vector(-2, h, 0), axis = vector(4, 0, 0), radius = 0.1*size, color = color.white)
bottom = cylinder(pos = vector(-2, -h, 0), axis = vector(4, 0, 0), radius = 0.1*size, color = color.white)
# 產生表示速度、加速度的箭頭
arrow_v = arrow(pos = ball.pos + vector(1, 0, 0), axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.green)
arrow_a = arrow(pos = ball.pos + vector(2, 0, 0), axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.magenta)
# 繪圖部分
gd = gdisplay(title = "plot", width = 600, height = 450, x = 0, y = 600, xtitle = "t(s)", \
           ytitle = "blue: y(m), green: v(m/s), magenta: a(m/s^2)")
yt = gcurve(graph = gd, color = color.blue)
vt = gcurve(graph = gd, color = color.green)
at = gcurve(graph = gd, color = color.magenta)

"""
 3. 物體運動部分, 小球來回 5 次時停止
"""
while(i < 5):
    rate(1000)
# 計算小球所受重力並存到變數 F
    r1 = ball.pos - s1.pos
    r2 = ball.pos - s2.pos
    F1 = - (G*M*m) / r1.mag2 * r1.norm()
    F2 = - (G*M*m) / r2.mag2 * r2.norm()
    F = F1 + F2
# 計算運動中小球的加速度、速度、位置, 畫出代表速度、加速度的箭頭
    ball.a = F/m
    ball.v += ball.a*dt
    ball.pos += ball.v*dt
    arrow_v.pos = ball.pos + vector(1, 0, 0)
    arrow_a.pos = ball.pos + vector(2, 0, 0)
    arrow_v.axis = ball.v
    arrow_a.axis = ball.a
# 畫出 y-t, v-t, a-t 圖
    yt.plot(pos = (t, ball.pos.y))
    vt.plot(pos = (t, ball.v.y))
    at.plot(pos = (t, ball.a.y))
# 判斷小球是否回到出發點, 計算回到出發點的次數
    if(ball.pos.y > h):
        print(t)
        i += 1
# 更新時間
    t += dt
