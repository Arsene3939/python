##### CH5-4-1.py #####
# RR0~RR3:6,13,19,26
# RC0~RC3:12,16,20,21
# Buzzer:7, SW23
# LCD:SW7

import RPi.GPIO as io
import I2C_LCD_driver as I2C_LCD
from time import sleep

RR = [6,13,19,26]		# 按鍵陣列之列接腳
RC = [12,16,20,21] # 按鍵陣列之行接腳
BZ = 7      # 蜂鳴器接腳
beepF=True  # 嗶聲開關旗標

io.setmode(io.BCM)
io.setwarnings(False)  # 關閉警告訊息
for i in range(4) :    # 設定按鍵陣列之接腳
    io.setup(RR[i], io.OUT)
    io.setup(RC[i], io.IN)
    io.output(RR[i], 1)
io.setup(BZ, io.OUT)   # 設定蜂鳴器之接腳
io.output(BZ, 1)
myLCD = I2C_LCD.lcd()  # 建構LCD物件
myLCD.lcd_display_string("** 4x4 keypad **", 1)
myLCD.lcd_display_string("                ", 2)

def beep(cnt):         # 嗶聲函數
    for i in range(cnt):
        io.output(BZ, 0)
        sleep(0.1)
        io.output(BZ, 1)
        sleep(0.1)

##########################################
while True :
    for i in range(4) :
        io.output(RR[i], 0)
        for j in range(4) :
            readKey = io.input(RC[j])
            if readKey == 0 :
                while readKey == 0 :
                    readKey = io.input(RC[j])
                key = j+4*i  # 計算鍵值
                print(key)   # 在終端機顯示鍵值(除錯用)
                myLCD.lcd_display_string("                ", 2)
                myLCD.lcd_display_string_pos(str(key), 2,7)
                if key == 15:
                    beepF= not beepF
                if beepF == True:
                    beep(1)
                break
        io.output(RR[i],1)
