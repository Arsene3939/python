# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 9-2.單擺, 有空氣阻力
 日期: 2018/2/25
 作者: 王一哲
"""

"""
 1. 參數設定, 設定變數及初始值
"""
m = 1                    # 小球質量
size = 0.2               # 小球半徑
L = 5                    # 擺長
theta0 = radians(30)     # 起始擺角, 用 radians 將單位換成 rad
theta = theta0           # 擺角
g = 9.8                  # 重力加速度
b = 0.0                  # 空氣阻力 f = -bv
T = 2*pi*sqrt(L/g)       # 單擺週期理論值, L = 5, g = 9.8, T = 4.48798950512828
alpha = 0                # 角加速度, 初始值為 0
omega = 0                # 角速度, 初始值為 0
i = 0                    # 小球經過週期次數
t = 0                    # 時間
dt = 0.001               # 時間間隔

"""
 2. 畫面設定
    (1) 用 canvas 物件作為顯示動畫用的視窗 http://www.glowscript.org/docs/VPythonDocs/canvas.html
    (2) 用 box 物件產生天花板 http://www.glowscript.org/docs/VPythonDocs/box.html
    (3) 用 sphere 物件產生小球 http://www.glowscript.org/docs/VPythonDocs/sphere.html
    (3) 用 cylinder 物件產生繩子 http://www.glowscript.org/docs/VPythonDocs/cylinder.html
    (4) 用 arrow 物件產生表示速度、加速度用的箭頭 http://www.glowscript.org/docs/VPythonDocs/arrow.html
    (5) 用 graph 產生繪圖視窗 http://www.glowscript.org/docs/VPythonDocs/graph.html
"""
# 產生動畫視窗、天花板、小球、繩子
scene = display(title = "Pendulum", width = 600, height = 600, x = 0, y = 0, background = vector(0, 0.6, 0.6))
roof = box(pos = vector(0, L/2 + 0.05, 0), length = L, height = 0.1, width = L/2, color = color.blue)
ball = sphere(pos = vector(L*sin(theta0), L/2 - L*cos(theta0), 0), radius = size, color = color.red, make_trail = True, retain = 20)
ball.v = vector(0, 0, 0)
rope = cylinder(pos = vector(0, L/2, 0), axis = ball.pos - vector(0, L/2, 0), radius = 0.1*size, color = color.yellow)
# 產生表示速度的箭頭
#arrow_v = arrow(pos = ball.pos, axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.green)
#arrow_vx = arrow(pos = ball.pos, axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.magenta)
#arrow_vy = arrow(pos = ball.pos, axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.orange)
# 繪圖部分
gd = gdisplay(title = "plot", width = 600, height = 450, x = 0, y = 600, xtitle = "t(s)", \
           ytitle = "blue: theta(rad), green: omega(rad/s), red: alpha(rad/s^2)")
theta_t = gcurve(graph = gd, color = color.blue)
omega_t = gcurve(graph = gd, color = color.green)
alpha_t = gcurve(graph = gd, color = color.red)

"""
 3. 物體運動部分, 重覆5個週期
"""
omega_p = omega
while(i < 5):
    rate(1000)
# 計算小球所受力矩、角加速度、角速度、角位移
    r = ball.pos - vector(0, L/2, 0)
    F = vector(0, -m*g, 0) - b*ball.v
    torque = cross(r, F)
    alpha = torque.z/(m*L*L)
    omega += alpha*dt
    theta += omega*dt
# 更新小球的位置、速度, 繩子的軸方向及長度
    ball.pos = vector(L*sin(theta), L/2 - L*cos(theta), 0)
    v = L*omega
    vx = v*cos(theta)
    vy = v*sin(theta)
    rope.axis = r
# 更新代表速度的箭頭位置、方向、長度
    #arrow_v.pos = ball.pos
    #arrow_vx.pos = ball.pos
    #arrow_vy.pos = ball.pos
    #arrow_v.axis = vector(vx, vy, 0)
    #arrow_vx.axis = vector(vx, 0, 0)
    #arrow_vy.axis = vector(0, vy, 0)
# 畫出 theta-t, omega-t, alpha-t 圖
    theta_t.plot(pos = (t, theta))
    omega_t.plot(pos = (t, omega))
    alpha_t.plot(pos = (t, alpha))
# 檢驗小球是否經過一個週期
    omega_c = omega
    if(omega_p > 0 and omega_c < 0):
        i += 1
        print(i, t)
    omega_p = omega_c
# 更新時間
    t += dt
