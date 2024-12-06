import sensor, image, time, math, pyb
from pyb import UART

uart=UART(3,115200)


sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)
sensor.set_auto_gain(False)
sensor.set_auto_whitebal(False)
clock = time.clock()

red_t=(47, 81, 16, 68, 0, 43)
yellow_t=(37, 98, -18, 18, 46, 127)
blue_t=(46, 84, -10, 8, -128, -28)
green_t=(27, 81, -128, -20, -13, 30)
black_t=(0, 20, -23, 26, -29, 20)
white_t=(83, 100, -14, 17, -21, 16)

ROI_Up=(0,150,320,30)
ROI_Down=(0,200,320,30)
ROI_Sign=(160,50,160,50)

def imgMarkB(blobs,show_color):#用show_color標記所有blobs的區域，debug用
    for x in blobs:
        img.draw_rectangle(x.rect(),color=show_color)

def imgMaxLRB(blobs):#左右最大的blobs
    maxL=0
    maxR=1
    for x in range(2,len(blobs)):
        if blobs[maxL].area()<blobs[x].area():
            maxL=x
        elif blobs[maxR].area()<blobs[x].area():
            maxR=x
    if len(blobs)>=2 :
        if blobs[maxL].x()<blobs[maxR].x():
            return blobs[maxL],blobs[maxR]
        else :
            return blobs[maxR],blobs[maxL]

def imgMaxB(blobs):#最大的色塊
    max_=0
    for x in range(1,len(blobs)):
        if blobs[max_].area()<blobs[x].area():
            max_=x
    if len(blobs)>=1:
        return blobs[max_]

def imgMarkMaxLRB(blobs):#標記左右最大的blobs
    if len(blobs)>=2:
        maxL,maxR=imgMaxLRB(blobs)
        img.draw_rectangle(maxL.rect(),color=(0,255,0))
        img.draw_cross(maxL.cx(),maxL.cy(),maxL.w())
        img.draw_rectangle(maxR.rect(),color=(0,255,0))
        img.draw_cross(maxR.cx(),maxR.cy(),maxR.w())
        return maxL,maxR

def imgMarkMaxB(blobs):#標記最大的blobs
    if len(blobs)>=1:
        x=imgMaxB(blobs)
        img.draw_rectangle(x.rect(),color=(0,255,0))
        img.draw_cross(x.cx(),x.cy(),x.w())
        return x

def deltaX(CatchBlobs):#偏移變化量x
    return (CatchBlobs[0].x()+CatchBlobs[1].x()-CatchBlobs[2].x()-CatchBlobs[3].x())+(CatchBlobs[0].w()-CatchBlobs[2].w())/2

def deltaY(CatchBlobs):#偏移變化量y
    return -(CatchBlobs[0].y()+CatchBlobs[1].y()-CatchBlobs[2].y()-CatchBlobs[3].y())-(CatchBlobs[2].h()+CatchBlobs[3].h())/2

#redLED=1
#greenLED=1<<1
#blueLED=1<<2
#def ledControl(x):
    #for g in range(0,3):
        #if(x>>g)&1:
            #pyb.LED(g+1).on()
        #else :
            #pyb.LED(g+1).off()

while(True):
    clock.tick()
    img = sensor.snapshot()

    img.draw_rectangle(ROI_Up,color=(0,0,255))#標示上方搜尋範圍
    img.draw_rectangle(ROI_Down,color=(255,0,0))#標示下方搜尋範圍
    img.draw_rectangle(ROI_Sign,color=(255,255,0))#標示路標搜尋範圍

    blobsUp=img.find_blobs([white_t],roi=ROI_Up)#儲存上方搜尋到的色塊
    blobsDown=img.find_blobs([white_t],roi=ROI_Down)#儲存下方搜尋到的色塊
    blobsSign=img.find_blobs([red_t,green_t,blue_t],roi=ROI_Sign)#儲存路標搜尋到的色塊

    imgMarkMaxLRB(blobsUp)#標示出上方搜尋的色塊最大的兩個
    imgMarkMaxLRB(blobsDown)#標示出下方搜尋的色塊最大的兩個
    imgMarkMaxB(blobsSign)#標示出最大的路標

    #if len(blobsSign)>=1:
        #max_=imgMaxB(blobsSign)
        #if max_.code()==0B1:#如果是紅色
            #uart.write("%c"%1)
        #if max_.code()==0B10:#如果是綠色
            #uart.write("%c"%2)
        #if max_.code()==0B100:#如果是藍色
            #uart.write("%c"%3)
    #else :
        #uart.write("%c"%0)

    CatchBlobs=[]#儲存上下方各兩個最大色塊 0為左上 1為右上 2為左下 3為右下
    if len(blobsUp)>=2:
        maxL,maxR=imgMaxLRB(blobsUp)
        CatchBlobs.append(maxL)
        CatchBlobs.append(maxR)

    if  len(blobsDown)>=2:
        maxL,maxR=imgMaxLRB(blobsDown)
        CatchBlobs.append(maxL)
        CatchBlobs.append(maxR)

    if len(CatchBlobs)==4 :#若四個最大色塊都捕捉到
        sita=math.atan(deltaX(CatchBlobs)/deltaY(CatchBlobs))
        uart.write(chr(int(math.degrees(sita))+128))
        print(int(math.degrees(sita)))
    else :
        uart.write(chr(0))

