# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 3.等速度直線運動
 日期: 2018/2/18
 作者: 王一哲
"""

"""
 1. 參數設定, 設定變數及初始值
"""
L = 10       # 地板長度
m = 2		 # 木塊質量
size = 1     # 木塊邊長
v = 10       # 木塊速度(m/s)
a = 0 		 # 木塊加速度
t = 0        # 時間
dt = 0.01    # 時間間隔
Uk	= 0.4	 #  動磨擦係數
g = -9.8	 # 重力加速度

"""
 2. 畫面設定
    (1) 用 display 物件作為顯示動畫用的視窗 http://www.glowscript.org/docs/VPythonDocs/canvas.html
    (2) 用 box 物件產生木塊及地板 http://www.glowscript.org/docs/VPythonDocs/box.html
    (3) 顏色選項說明 http://www.glowscript.org/docs/VPythonDocs/color.html
    (4) 用 gdisplay 產生繪圖視窗 http://www.glowscript.org/docs/VPythonDocs/graph.html
"""
scene = display(title = "1D Motion", width = 800, height = 600, x = 0, y = 0,
	center = (L/2.0, 0.1, 0),background = (0, 0.6, 0.6))
floor = box(pos = (L/2.0, 0, 0), length = L, height = size*0.1, width = L*0.5, color = color.blue)
#floor = box(pos = (0, 0, 0), size = (L, size*0.1, L*0.5), color = color.blue)
cube = box(pos = vector( 0, size*0.55, 0), length = size, height = size, width = size, 
			color = color.red)
cube.v = vector(v, 0, 0)
gd = gdisplay(title = "x-t(Red), v-t(Green) plot", width = 600, height = 450, 
	x = 800, y = 100, xtitle = "t(s)", ytitle = "x(m)Red, v(m/s)Green")
xt = gcurve(graph = gd, color = color.red)
vt = gcurve(graph = gd, color = color.green)

while cube.v.x>0:
    rate(100)
    if v>0: 
        a = Uk * m * g
    else:
        a=0;    
    cube.v.x += a*dt
    cube.pos.x += cube.v.x*dt
    xt.plot(pos = (t, cube.pos.x))
    vt.plot(pos = (t, cube.v.x))
    
    t += dt

print("t = ", t)
