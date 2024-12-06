##### CH7-4.py #####
# HALL GPIO27
# Relay2 GPIO5
# Buzzer GPIO7

import RPi.GPIO as io
from time import sleep

Hall = 27               # 設定Hall連接27腳
Relay2 = 5              # 設定Relay2連接5腳
BZ = 7                  # 設定BZ連接7腳
ON = 1                  # 宣告低態動作開關常數
OFF = 0                 # 宣告低態動作開關常數
onOff = 0               # 宣告開關變數

io.setmode(io.BCM)  # 設定採BCM接腳模式
io.setwarnings(False)   # 設定不顯示警告訊息
io.setup(Hall, io.IN)       # 設定Hall為輸入接腳
io.setup(Relay2, io.OUT)    # 設定Relay2為輸出接腳
io.output(Relay2, OFF)  # 設定Relay2之初值
io.setup(BZ, io.OUT)        # 設定BZ為輸出接腳
io.output(BZ, OFF)      # 設定BZ之初值

def beep(cnt):              # 嗶聲函數
    for i in range(cnt):
        io.output(BZ, ON)
        sleep(0.1)
        io.output(BZ, OFF)
        sleep(0.1)

############################################
while True:
    hall = io.input(Hall)
    if hall == 1 :
        onOff = not onOff
        beep(1)

    io.output(Relay2, onOff)

    sleep(0.2)
    
