import sys
import pygame
from pygame.locals import QUIT
import numpy as np
import time
import matplotlib.pyplot as plt
import cv2
from tkinter import filedialog
name = filedialog.askopenfilename()
print(name)
pygame.init()
screen = pygame.display.set_mode((1600/2, 900/2))
bg=pygame.image.load(name)
_bg=bg
img=plt.imread(name)
screen.blit(bg,(0,0))
size=bg.get_rect()[2:]
arrow=pygame.image.load("image/arrow.png")
arrow= pygame.transform.scale(arrow,[160,90])

# 更新畫面，等所有操作完成後一次更新（若沒更新，則元素不會出現）
pygame.display.update()
scale=1
constrat_color=(0,0,255)
font = pygame.font.Font('freesansbold.ttf', 32)
tiem=[1.2,1/1.2]
# 事件迴圈監聽事件，進行事件處理
bgpos=np.array([0,0])
detect=0
black=(0,0,0)
gray=(170,170,170)
white=(255,255,255)
base=(255,255,225)
lastpos=bgpos
class rect:
    def __init__(self,pos1,pos2):
        
        self.x1=min([pos1[0],pos2[0]])
        self.x2=max([pos1[0],pos2[0]])
        self.y1=min([pos1[1],pos2[1]])
        self.y2=max([pos1[1],pos2[1]])
    def contain(self,pos):
        return (self.x1<pos[0])and(pos[0]<self.x2) and (self.y1<pos[1])and(pos[1]<self.y2)
class colorrange:
    def __init__(self,low,up,inout,lebel):
        self.up=up
        self.low=low
        self.inout=inout
        self.lebel=lebel
    def setup(self,x):
        x= 0 if x<0 else x
        self.up=x if x<=255 else 255
        self.low=(x if x<self.low else self.low)
    def setlow(self,x):
        self.low=x if x>=0 else 0
        self.up=(x if x>self.up else self.up)
    def draw_pole(self,ypos):
        pygame.draw.rect(screen,black,pygame.Rect(800-256,13+ypos,256,6))
        pygame.draw.rect(screen,gray,pygame.Rect(800-256+self.up-15,ypos,30,30))
        pygame.draw.rect(screen,gray,pygame.Rect(800-256+self.low-15,ypos,30,30))
        pygame.draw.rect(screen,white,pygame.Rect(800-300,ypos,30,30))
        pygame.draw.rect(screen,black,pygame.Rect(800-300,ypos,30,30),2)
        if self.inout:
            pygame.draw.rect(screen,black,pygame.Rect(800-295,ypos+5,20,20))
        text = font.render("%.2f~%.2f"%(self.low/255,self.up/255), True, black,gray )
        textRect = text.get_rect()
        textRect.center = (800-128, 60+ypos)
        screen.blit(text,textRect)
def state1_init():
    global _bg
    global bg
    global scale
    global bgpos
    global detect
    bgpos=np.array([0,0])
    detect=0
    _bg=bg
    scale=1
    fit_screen(bg)
    
def imd_mouse(event):
    global scale
    global lastpos
    global detect
    global _bg
    global bgpos
    global pos
    if event.button==1:
        lastpos=np.array(pygame.mouse.get_pos())
        detect=1
    if event.button==3:
        k=255 if name[-3:]=='jpg' else 1
        try:
            if(pos[0]-bgpos[0]<0 or pos[1]-bgpos[1]<0):
                raise
            print("(%d,%d)"%(int((pos[0]-bgpos[0])/scale),int((pos[1]-bgpos[1])/scale)),img[int((pos[1]-bgpos[1])/scale)][int((pos[0]-bgpos[0])/scale)]/k)
        except:
            print("out of range")
    if event.button==4 or event.button==5:
        lastsize=np.array(size)*scale
        scale*=tiem[event.button-4]
        _bg = pygame.transform.scale(bg,np.array(size)*scale)
        screen.fill(base)
        bgpos[0]-=(tiem[event.button-4]-1)*(pos[0]-bgpos[0])
        bgpos[1]-=(tiem[event.button-4]-1)*(pos[1]-bgpos[1])
        screen.blit(_bg,bgpos)
def img_detect():
    global scale
    global lastpos
    global detect
    global _bg
    global pos
    global bgpos
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
            nextstate=rect([800,450],[640,360])
            if nextstate.contain(pos):
                return 2
            else:
              imd_mouse(event)
        if event.type == pygame.MOUSEBUTTONUP:
            if event.button==1:
                detect=0
    return 1
def fit_screen(background):
    global _bg
    global scale
    if(size[0]/size[1]>16/9):
        fitscale=800/size[0]
    else:
        fitscale=450/size[1]
    scale*=fitscale
    _bg = pygame.transform.scale(background,np.array(size)*fitscale)
    screen.fill(base)
    screen.blit(_bg,[0,0])
def state2_init(cvar):
    fit_screen(bg)
    
    for i in range(3):
        cvar[i].draw_pole(i*100)
    return cvar
def check_color(cvar):
    global detect
    global xp
    
    if detect:
        fit_screen(bg)
        xp=pygame.mouse.get_pos()[0]
        xp=256-800+xp
        detect-=1
        if detect%2==0:
            cvar[detect//2].setup(xp)
        elif detect%2==1:
            cvar[detect//2].setlow(xp)
        detect+=1
    for event in pygame.event.get():
        # 當使用者結束視窗，程式也結束
        if event.type == QUIT:
            pygame.quit()
            sys.exit(0)
        if event.type == pygame.MOUSEBUTTONDOWN and event.button==1:
            pos=np.array(pygame.mouse.get_pos())
            u=[]
            l=[]
            io=[]
            for i in range(3):
                u.append(rect([800-256+cvar[i].up-15,i*100],[800-256+cvar[i].up+15,i*100+30]))
                l.append(rect([800-256+cvar[i].low-15,i*100],[800-256+cvar[i].low+15,i*100+30]))
                io.append(rect([800-300,i*100],[530,i*100+30]))

            nextstate=rect([800,450],[640,360])
            if nextstate.contain(pos):
                return 3,cvar
            for i in range(3):
                if(u[i].contain(pos)):
                    detect=i*2+1
                if(l[i].contain(pos)):
                    detect=i*2+2
                if(io[i].contain(pos)):
                    cvar[i].inout^=1
        if event.type == pygame.MOUSEBUTTONUP:
            if event.button==1:
                detect=0
    for i in range(3):
        cvar[i].draw_pole(i*100)
    return 2,cvar
def state3_init(cvar):
    global bg
    for i in range(3):
        print("low=%d"%cvar[i].low,"up=%d"%cvar[i].up,"inout="+("out" if cvar[i].inout else "in"))
    preview=pygame.image.load(get_image(cvar))
    bg=preview
    fit_screen(preview)
    pygame.draw.rect(screen,gray,pygame.Rect(800-120,450-120,120,40))
    pygame.draw.rect(screen,gray,pygame.Rect(800-120,450-70,120,40))
    text = font.render("back", True, black,gray )
    textRect = text.get_rect()
    textRect.center = (800-64, 450-100)
    screen.blit(text,textRect)
    text = font.render("save", True, black,gray )
    textRect = text.get_rect()
    textRect.center = (800-64, 450-50)
    screen.blit(text,textRect)
def saveorreturn():

    for event in pygame.event.get():
        # 當使用者結束視窗，程式也結束
        if event.type == QUIT:
            pygame.quit()
            sys.exit(0)
        if event.type == pygame.MOUSEBUTTONDOWN and event.button==1:
            pos=np.array(pygame.mouse.get_pos())
            back=rect([800-120,450-120],[800,450-80])
            save=rect([800-120,450-70],[800,450-30])
            if back.contain(pos):
                return 1
            if save.contain(pos):
                return 4
    return 3
def get_image(cvar):
    img=plt.imread(name)
    cont=np.array(img)
    progress=0
    if name[-4:]!='.png':
        cont=cont/255
    if len(cont[0][0])!=4:
        conta=np.ones((len(img),len(img[0]),1))
        cont=np.concatenate((cont,conta),axis=2)
    for x in range(len(cont)):
        for y in range(len(cont[0])):
            flag=1
            for i in range(3):
                if(cvar[i].inout==0):
                    if not((cvar[i].low/255<=cont[x][y][i] and cont[x][y][i]<=cvar[i].up/255)):
                        flag=0
                else:
                    if not((cont[x][y][i]<=cvar[i].low/255 or cvar[i].up/255<=cont[x][y][i])):
                        flag=0
            if flag:
                cont[x][y][3]=0
                cont[x][y][0:3]=[0,0,0]
        
        progress+=1
    plt.imsave(name[:-4]+"%s"%"_"+".png",cont)
    return name[:-4]+"%s"%"_"+".png"
state=1
nextstate=1
fit_screen(bg)
colorname=["red","green","blue"]
cvar=[]
for i in range(3):
    cvar.append(colorrange(0,255,0,colorname[i]))
while True:
    
    if state==1:
        state=img_detect()
        screen.blit(arrow,(640,360))
        if(state==2):
            state2_init(cvar)
    if state==2:
        state,cvar=check_color(cvar)
        screen.blit(arrow,(640,360))
        if state==3:
            state3_init(cvar)
    if state==3:
        state=saveorreturn()
        if state==1:
            state1_init()
    if state==4:
        pygame.quit()
        break
    pygame.display.update()
    
    
    
   