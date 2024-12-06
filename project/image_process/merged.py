import sys
import pygame
from pygame.locals import QUIT
import numpy as np
import time
import matplotlib.pyplot as plt
import cv2
while(1):
    try:
        name=input("file name")
        open(name)
        break
    except Exception as e:
        print(e)

pygame.init()
screen = pygame.display.set_mode((1600/2, 900/2))
bg=pygame.image.load(name)
_bg=bg
img=plt.imread(name)
screen.blit(bg,(0,0))
size=bg.get_rect()[2:]
# 更新畫面，等所有操作完成後一次更新（若沒更新，則元素不會出現）
pygame.display.update()
scale=1
base=(255,255,255)
tiem=[1.2,1/1.2]
# 事件迴圈監聽事件，進行事件處理
bgpos=np.array([0,0])
detect=0
lastpos=bgpos
while True:
    # 迭代整個事件迴圈，若有符合事件則對應處理
    if detect:
        bgpos-=lastpos-np.array(pygame.mouse.get_pos())
        lastpos=np.array(pygame.mouse.get_pos())
        screen.fill(base)
        screen.blit(_bg,bgpos)
    for event in pygame.event.get():
        # 當使用者結束視窗，程式也結束
        if event.type == QUIT:
            pygame.quit()
            sys.exit(0)
        if event.type == pygame.MOUSEBUTTONDOWN:
            pos=np.array(pygame.mouse.get_pos())
            if event.button==1:
                lastpos=np.array(pygame.mouse.get_pos())
                detect=1
            if event.button==3:
                k=255 if name[-3:]=='jpg' else 1
                print("(%d,%d)"%(int((pos[0]-bgpos[0])/scale),int((pos[1]-bgpos[1])/scale)),img[int((pos[1]-bgpos[1])/scale)][int((pos[0]-bgpos[0])/scale)]/k)
            if event.button==4 or event.button==5:
                lastsize=np.array(size)*scale
                scale*=tiem[event.button-4]
                _bg = pygame.transform.scale(bg,np.array(size)*scale)
                screen.fill(base)
                bgpos[0]-=(tiem[event.button-4]-1)*(pos[0]-bgpos[0])
                bgpos[1]-=(tiem[event.button-4]-1)*(pos[1]-bgpos[1])
                screen.blit(_bg,bgpos)
        if event.type == pygame.MOUSEBUTTONUP:
            if event.button==1:
                detect=0
    pygame.display.update()
#D:\Desktop\1.jpg