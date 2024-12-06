# -*- coding: utf-8 -*-
#電磁波
from visual import *

#  1.  參數設定
n = 40
c = 3*1e8
lambda_ = 2*pi
dt = 1*e-15
t = 0

#  2.  畫面背景
scene = display(center=(0,0,lambda_), width=1000, height=1000)
x = arrow(axis=(1,0,0), color=color.red, shaftwidth=lambda_/100)
y = arrow(axis=(0,1,0), color=color.red, shaftwidth=lambda_/100)
z = arrow(axis=(0,0,1), color=color.red, shaftwidth=lambda_/100)

#  3.  電磁場設定
z = [(2*lambda_/(n))*i for i in range(n)]
#print z, pi
cos_ = [cos( (2*pi/lambda_)*(z[i]) ) for i in range(n)]
#print cos_
#propagation = arrow(pos=(0,0,z[0]), axis=(0,0,lambda_), shaftwidth=lambda_/100)
E = [arrow(axis=(0,0,0), shaftwidth=lambda_/500, color=color.yellow) for i in range(len(z))]
B = [arrow(axis=(0,0,0), shaftwidth=lambda_/500, color=color.green) for i in range(len(z))]

#  4.  電磁場改變
while True:
    rate(100)
    t += dt
    for i in range(len(z)):
#        z[i] += c*dt
        E[i].pos.z = z[i]
        E[i].axis.x = cos( (2*pi/lambda_)*(z[i] - c*t) )
        B[i].pos.z = z[i]
        B[i].axis.y = cos( (2*pi/lambda_)*(z[i] - c*t) )
#    propagation.pos.z = z[0]
