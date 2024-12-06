# -*- coding: utf8 -*-
# 匯入視覺化套件
from visual import *
from visual.graph import *
"""
 VPython教學: 18-1. 用 for 迴圈產生箭頭
 日期: 2018/3/2
 作者: 王一哲
"""

N, L = 4, 20

scene = display(title = "Arrows", width = 600, height = 600, x = 0, y = 0, background = color.black)

fields = []
for i in range(N):
    for j in range(N):
        for k in range(N):
            fields.append(arrow(pos = vector(L/N*i - L/2, L/N*j - L/2, L/N*k - L/2), axis = vector(4, 0, 0), radius = 1, color = color.green))
