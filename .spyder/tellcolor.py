# Hello World Example
#
# Welcome to the OpenMV IDE! Click on the green run arrow button below to run the script!

import sensor, image, time, pyb

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)
clock = time.clock()
red0=(47,81,16,68,0,43)
yellow1=(37,98,-18,18,46,127)
green2=(27,81,-128,-20,-13,30)
blue3=(46,84,-10,8,-128,-28)
black4=(0,20,-23,26,-29,20)
white5=(53,88,-92,39,-34,79)
colortype=2
LED=pyb.LED(2)
roi=(0,0,300,300)
while(True):
    clock.tick()
    img = sensor.snapshot()
    blobs=[img.find_blobs([red0],invert=0,roi=roi),img.find_blobs([yellow1],invert=0,roi=roi),img.find_blobs([green2],invert=0,roi=roi),img.find_blobs([blue3],invert=0,roi=roi),img.find_blobs([black4],invert=0,roi=roi),img.find_blobs([white5],invert=0,roi=roi)]
    img.draw_rectangle(roi)
    if blobs[colortype]:
        for b in blobs[colortype]:
            img.draw_cross(b[5],b[6])
            img.draw_rectangle(b[0:4])
    print(clock.fps())

