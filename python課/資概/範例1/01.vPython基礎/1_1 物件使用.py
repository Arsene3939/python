# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *

"""
 1. 畫面設定
    (1) 用 display 物件作為顯示動畫用的視窗 
    (2) 用 box 物件產生木塊及地板
	(3) 用 sphere 物件產生球體
	(4) 用 cylinder 物件產生圓柱體
	(5) 用 helix 物件產生螺旋物件
	(6) 用 arrow 物件產生箭頭物件
    (7) 用 curve 物件產生繩子物件
"""
scene = display(title = "1D Motion", width = 800, height = 600,	background = (0, 0.6, 0.6))

floor = box(pos = (0, 0, 0), size = (20, 0.1, 20), color = color.blue)
#floor = box(pos = (0, 0, 0), length = 10, height = 0.1, width = 10, color = color.blue)
#ball = sphere(pos = vector(0,0,0), length = 2, height = 2, width = 2, color = color.red)
ball = sphere(pos = (0, 0, 0), radius=3, color = color.red)
cube = box(pos = vector(5,1,0), length = 2, height = 2, width = 2, color = color.green)
pole = cylinder(pos = (0, 0, 5), length=5, radius=1,axis=(1,0,0), color = color.yellow)
coil = helix(pos = (-5, 0, 5), length=5, radius=1,axis=(0,1,0),coils=10,thickness=0.2, color = color.cyan)
aro = arrow(pos = (5, 0, -5), length=5,shaftwidth=0.2,axis=(0,1,0), color = color.orange)
lines = curve(pos=[(0,5,0), (10,0,0), (2,10,0)], radius=0.2)