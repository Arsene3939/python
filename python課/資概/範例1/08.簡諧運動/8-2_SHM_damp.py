# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 8-2.簡諧運動, 有阻尼
 日期: 2018/2/25
 作者: 王一哲
"""


"""
 1. 參數設定, 設定變數及初始值
"""
m = 4               # 木塊質量 4 kg
size = 1            # 木塊邊長 1 m
R = 5               # 振幅 5 m
k = 1               # 彈性常數 1 N/m
L0 = R + size       # 彈簧原長
b = 1             # 阻尼 f = -bv, overdamped: b^2 > 4mk, critical damping: b^2 = 4mk, underdamped: b^2 < 4mk
T = 2*pi*sqrt(m/k)  # 週期理論值
i = 0               # 木塊運動經過的週期次數
t = 0               # 時間
dt = 0.001          # 時間間隔

"""
 2. 畫面設定
    (1) 用 canvas 物件作為顯示動畫用的視窗 http://www.glowscript.org/docs/VPythonDocs/canvas.html
    (2) 用 box 物件產生地板、牆壁、木塊 http://www.glowscript.org/docs/VPythonDocs/box.html
    (3) 用 helix 物件產生彈簧 http://www.glowscript.org/docs/VPythonDocs/helix.html
    (4) 用 arrow 物件產生表示速度、加速度用的箭頭 http://www.glowscript.org/docs/VPythonDocs/arrow.html
    (5) 用 graph 產生繪圖視窗 http://www.glowscript.org/docs/VPythonDocs/graph.html
"""
# 產生動畫視窗、地板、木塊、彈簧
scene = display(title = "Simple Harmonic Motion", width = 800, height = 400, x = 0, y = 0, background = vector(0, 0.6, 0.6))
floor = box(pos = vector(0, -(size+0.1)/2, 0), length = R+L0+2, height = 0.1, width = R, color = color.blue)
wall = box(pos = vector(-L0, 0, 0), length = 0.1, height = size, width = R, color = color.cyan)
block = box(pos = vector(R+size/2, 0, 0), length = size, height = size, width = size, color = color.yellow)
block.v = vector(0, 0, 0)
spring = helix(coils=15,pos = vector(-L0, 0, 0), radius = 0.3*size, thickness = 0.05*size, color = color.yellow)
spring.axis = block.pos - spring.pos - vector(size/2, 0, 0)
# 產生表示速度、加速度的箭頭
arrow_v = arrow(pos = block.pos + vector(0, size, 0), axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.green)
arrow_a = arrow(pos = block.pos + vector(0, 2*size, 0), axis = vector(0, 0, 0), shaftwidth = 0.3*size, color = color.magenta)
# 繪圖部分
gd = gdisplay(title = "plot", width = 600, height = 450, x = 0, y = 400, xtitle = "t(s)", \
           ytitle = "blue: x(m), green: v(m/s), magenta: a(m/s^2)")
xt = gcurve(graph = gd, color = color.blue)
vt = gcurve(graph = gd, color = color.green)
at = gcurve(graph = gd, color = color.magenta)

"""
 3. 物體運動部分, 重覆5個週期
"""
vp = block.v.x
while(i < 5 and t < 5*T):
    rate(5000)
# 計算彈簧長度、伸長量、回復力
    spring.axis = block.pos - spring.pos - vector(size/2, 0, 0)
    F = -k * (spring.axis - vector(L0, 0, 0)) - b * block.v
# 計算木塊加速度, 更新速度、位置
    block.a = F/m
    block.v += block.a*dt
    block.pos += block.v*dt
# 更新代表速度、加速度的箭頭位置、方向、長度
    arrow_v.pos = block.pos + vector(0, size, 0)
    arrow_a.pos = block.pos + vector(0, 2*size, 0)
    arrow_v.axis = block.v
    arrow_a.axis = block.a
# 畫出 x-t, v-t, a-t 圖
    xt.plot(pos = (t, block.pos.x - size/2))
    vt.plot(pos = (t, block.v.x))
    at.plot(pos = (t, block.a.x))
# 判斷木塊是否經過一個週期
    vc = block.v.x
    if(vp > 0 and vc < 0):
        i += 1
        print(i, t)
    vp = vc
# 更新時間
    t += dt
