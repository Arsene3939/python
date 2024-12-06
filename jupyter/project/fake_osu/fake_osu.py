# pygame mouse#########

import os, pygame as pg
from pygame.locals import *
from sys import exit
from random import *
import time
import numpy as np
import cv2 as plt
##################### loading map ############################
hit_pos=[]
reg=[]
k=1
for i in os.listdir("sou"):
    if i=="skin":
        continue
    reg.append(i)
    print("%d. "%k,i)
    k+=1
song=reg[int(input("chose song"))-1]
reg=[]
k=1
for i in os.listdir("sou\\"+song):
    try:
        if i.split('.')[-1]=="osu":
            reg.append(i)
            print("%d."%k,i)
            k+=1
    except:
        pass
    
level=reg[int(input("chose level: "))-1]
reg=[]
file=open("sou\\"+song+"\\"+level,"r",encoding="utf-8")

def map_load():
    k=0
    map_modify=10
    last_pos=[-1,-1]
    for i in file.read().split('[HitObjects]\n')[1].split('\n')[:-2]:
        x=i.split(',')
        if x[3]=='1' or x[3]=='5':
            if last_pos==[int(x[0]),int(x[1])]:
                k+=map_modify
            else:
                k=0
            hit_pos.append([int(x[2]),(int(x[0])*1.3+300+k,int(x[1])*1.3+200+k)])
            last_pos=[int(x[0]),int(x[1])]
map_load()
######################initialize###########################
pg.init()
size={'x':(800,1200,3),'y':(1200,800)}
background_name='BG.jpg'
bg = pg.display.set_mode(size['y'], 0, 32)
bg.fill((255,255,255))
wid=128
mouse_x, mouse_y = 0, 0
start=0
end=len(hit_pos)
clock=pg.time.Clock()
dfont = pg.font.SysFont("Arial", 30)


hit300=[]
hita=[]
hitx=[]
hit100x=[]
hit300x=[]
dpi=2.3
approach_rate=7
emerge_time=300
label_fade_time=600
fade_time=400
perfect_time=100
good_time=200
appear_time=4000
score=0
combo=0

####################loading file#############################
if background_name  in os.listdir("sou\\"+song):
    k=0
    if np.shape(plt.imread("sou\\"+song+"\\"+background_name))[:2]!=size['x'][:2]:
        k=1
else:
    k=1
for name in os.listdir("sou\\"+song):
    if name.split('.')[-1] in ["jiff","jpeg","jpg","png","gif"] and k==1:
        img=plt.imread("sou\\"+song+"\\"+name,plt.IMREAD_UNCHANGED)
        cont=np.zeros(size['x'],dtype=np.uint8)
        if type(img[0][0][0])==np.uint8:
             k=0
        else:
            k=1
        lenx=len(img)
        leny=len(img[0])
        print(lenx,leny)
        print("strat loading")
        for i in range(size['x'][0]):
            for j in range(size['x'][1]):
                cont[i][j][:]=img[i*lenx//size['x'][0]][j*leny//size['x'][1]][:3]*(1+k*254)
        plt.imwrite("sou\\"+song+"\\"+background_name,cont)
        k=0
        reg=[]
    if name.split('.')[-1] =="mp3":
        pg.mixer.music.load("sou\\"+song+"\\"+name)
image = pg.image.load("sou\\"+song+"\\"+background_name)
image.convert()
bg.blit(image,(0,0))
hit= pg.image.load("sou\\skin\\hitemp.png")
hit.convert()
hit100=pg.image.load("sou\\skin\\hit100.png")
hit100.convert()
num=[]
for i in range(10):
    num.append(pg.image.load("sou\\skin\\default-%d.png"%i))
    num[i].convert()
click= pg.mixer.Sound("sou\\skin\\soft-hitnormal.ogg")
combobreak=pg.mixer.Sound("sou\\skin//combobreak.ogg")
hit100sound=pg.mixer.Sound("sou\\skin//clap.wav")
mouse_cursor = pg.image.load("sou\\skin//cursor.png").convert_alpha()
hit0=pg.image.load("sou\\skin\\hit0.png")
hit0.convert()
for i in range(40):
    hit300.append(pg.image.load("sou\\skin\\hit300@%dx.png"%i))
    hit300[i].convert()
    if i<30:
        hita.append(pg.image.load("sou\\skin\\hit@%dx.png"%i))
        hita[i].convert()



#########################fuctions#################################
def Ceq(posC,r,pos_kick):
    return(pos_kick[0]-posC[0])**2+(pos_kick[1]-posC[1])**2<r**2
def inx(start,end,var,arr):
    for i in range(start,end):
        if i==var:
            return 1
    return 0


time.sleep(2)
pg.display.update()
################################ start! ############################################
pg.mixer.music.play()
_time=int(time.time()*1000)
while 1:
    __time=int(time.time()*1000)
    bg.blit(image,(0,0))
    #滑鼠的x,y座標
    x, y = np.array(pg.mouse.get_pos())*dpi
    #隱藏滑鼠
    pg.mouse.set_visible(False)
    x -= mouse_cursor.get_width() / 2
    y -= mouse_cursor.get_height() / 2
    #用其他圖形代替滑鼠
    for i in range(end-1,start-1,-1):
        dt=__time-_time-hit_pos[i][0]
        if dt>-appear_time/approach_rate-emerge_time:
            if dt<=-appear_time/approach_rate and dt>-appear_time/approach_rate-emerge_time:
                bg.blit(hita[29+int((dt+appear_time/approach_rate)*29/emerge_time)],(hit_pos[i][1][0]-wid/2,hit_pos[i][1][1]-wid/2))
            elif dt<perfect_time:
                bg.blit(hit,(hit_pos[i][1][0]-wid/2,hit_pos[i][1][1]-wid/2))
                pg.draw.circle(bg,(100,150,40),hit_pos[i][1],64+(hit_pos[i][0]>__time-_time)*(hit_pos[i][0]-__time+_time)*256*approach_rate/appear_time,6)
                end=i+5
                if end>len(hit_pos):
                    end=len(hit_pos)
            else:
                start=i
            if __time-_time>hit_pos[i][0]+perfect_time:
                combobreak.play()
                combo=0
                hitx.append([i,hit_pos[i][0]])
                hit_pos[i]=[hit_pos[i][0]+0xFFFF,hit_pos[i][1]]
    for i in hitx:
        if __time-_time<i[1]+label_fade_time and __time-_time>i[1]+perfect_time:
             bg.blit(hit0,hit_pos[i[0]][1])
        else:
            hitx.remove(i)
    for i in hit100x:
        if __time-_time<i[1]+label_fade_time:
             bg.blit(hit100,hit_pos[i[0]][1])
        else:
            hit100x.remove(i)
    for n in range(9):
        bg.blit(num[(score//(10**n))%10],(870+(9-n)*30,0))
    for i in range(len(str(combo))):
        bg.blit(num[(combo//(10**i))%10],((len(str(combo))-i)*30,750))
    for i in hit300x:
        if __time-i[1]<fade_time:
             bg.blit(hit300[39-int((__time-i[1])*40/fade_time)],(hit_pos[i[0]][1][0]-128,hit_pos[i[0]][1][1]-128))
        else:
            hit300x.remove(i)
            start=i[0]
    clock.tick(900)
    #print(hit_pos,'\n\n')
    text = dfont.render("%4d"%clock.get_fps(), 1, (0,0,0))
    bg.blit(text,(1100,750))
    bg.blit(mouse_cursor, (x, y))
    pg.display.update()
    for event in pg.event.get():
        try:
            if event.type == QUIT:
                pg.quit()
            elif event.type==KEYDOWN:
                key=event.key
                print("%d, '%c'"%(key,chr(key)))
                pos=np.array(pg.mouse.get_pos())*dpi
                
                for i in range(start,end):
                    
                    if (key==K_a or key==K_s)and Ceq(hit_pos[i][1],64,pos):
                        dt=hit_pos[i][0]-__time+_time
                        
                        if dt>-perfect_time and dt<perfect_time:
                            hit300x.append([i,__time])
                            click.play()
                            score+=300*combo
                            hit_pos[i]=[hit_pos[i][0]+0xFFFF,hit_pos[i][1]]    
                            combo+=1
                            break
                        elif dt>perfect_time and dt<good_time:
                            hit300x.append([i,__time])
                            hit100sound.play()
                            hit100x.append([i,hit_pos[i][0]])
                            hit_pos[i]=[hit_pos[i][0]+0xFFFF,hit_pos[i][1]]
                            combo+=1
                            score+=100*combo
                            break
        except Exception as e:
            print(e)
            pg.quit()