import sensor, image, time
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)
clock = time.clock()
red_t=(47, 81, 16, 68, 0, 43)
yellow_t=(37, 98, -18, 18, 46, 127)
blue_t=(46, 84, -10, 8, -128, -28)
green_t=(27, 81, -128, -20, -13, 30)
black_t=(0, 20, -23, 26, -29, 20)
white_t=(83, 100, -14, 17, -21, 16)
skin_t=(100, 22, 12, 36, 55, -23)
deep_blue=(29, 4, -78, 0, -93, 4)
global p
p=0
def find(blobs,c):
    max=0
    k=0
    l=0
    send=[]
    for i in range(1,len(blobs)):
        k=blobs[i].rect()
        l=blobs[max].rect()
        if (k[2]*k[3])>l[2]*l[3]:
            max=i;
    send.append(l[2]*l[3])
    send.append(blobs[max].rect())
    if c=='r':
        for i in range(1,len(blobs)):
            k=blobs[i].rect()
            if k[1]>send[1][1]and k[1]<(send[1][1]+send[1][3]) and k[0]>send[1][0]and k[0]<(send[1][0]+send[1][2])and k[2]<50*p and k[3]>send[1][3]/2-10:
                send.append(blobs[i].rect())
    return send
def mark(blobs,c):
    send=find(blobs,c)
    colorDict={'r':(255,0,0),'g':(0,255,0),'b':(0,0,255)}
    for i in range(1,len(send)):
        img.draw_rectangle(send[i],color=colorDict[c])
    return send
while(True):
    clock.tick()
    img = sensor.snapshot()
    hand=img.find_blobs([skin_t])
    cloth=img.find_blobs([deep_blue])
    a=mark(hand,'r')
    b=mark(cloth,'b')
    p=a[0]/b[0]
    print("hand %d,cloth %d,p=%.2f"%(a[0],b[0],0.1))
    print(a)
