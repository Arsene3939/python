##### CH7-6-3.py #####
# DS18B20溫度感測實習一
# DS GPIO4
# Buzzer GPIO7
# Relay2 GPIO5

import RPi.GPIO as io
import I2C_LCD_driver as I2C_LCD
from w1thermsensor import W1ThermSensor                      
from time import sleep  

TH = 30                         # 宣告上限門檻溫度常數
TL = 25                         # 宣告下限門檻溫度常數
Buzzer = 7                      # 設定Buzzer連接7腳
Relay2 = 5                      # 設定Relay2連接5腳
ON = 0                          # 宣告低態動作開關常數
OFF = 1                         # 宣告低態動作開關常數
onOff = OFF                     # 宣告開關狀態變數

io.setmode(io.BCM)          # 設定採用BCM接腳模式
io.setwarnings(False)           # 設定不顯示警告訊息
io.setup(Buzzer, io.OUT)        # 設定Buzzer為輸出接腳
io.setup(Relay2, io.OUT)        # 設定Relay2為輸出接腳
io.output(Buzzer, OFF)      # 設定Buzzer之初值
io.output(Relay2, OFF)      # 設定Relay2之初值

def beep(cnt):                  # 嗶聲函數
    for i in range(cnt):
        io.output(Buzzer, ON)
        sleep(0.1)
        io.output(Buzzer, OFF)
        sleep(0.05)
    
myLCD = I2C_LCD.lcd()           # 建構LCD物件
# 設定LCD初始顯示
myLCD.lcd_display_string("TH: "+str(TH)+"  TL: "+str(TL),1)
myLCD.lcd_display_string("Celsius:", 2)     # 設定LCD初始顯示

sensor = W1ThermSensor()    # 建構DS18B20物件

############################################################
while True:
    temperature=sensor.get_temperature() # 讀取溫度
    c = round(temperature,1)    # 攝氏溫度取小數一位
    print("攝氏溫度 %3.1f 度" %c)    # 在Shell裡顯示攝氏溫度
    # 在LCD裡顯示攝氏溫度
    myLCD.lcd_display_string_pos(str(c),2,9) 
    if (c > TH) and (onOff == OFF):   # 若溫度高於門檻溫度
        beep(2)                 # 嗶兩聲
        io.output(Relay2, ON)   # 繼電器激磁
        onOff = ON              # 繼開關變數設定為 ON
    else :                      # 否則
        if (c < TL) and (onOff == ON):    # 若溫度低於門檻溫度
            io.output(Relay2, OFF)  # 繼電器斷磁
            onOff = OFF             # 繼開關變數設定為 OFF

    sleep(0.5)                  # 暫停0.5秒

