##### CH7-6-2.py #####
# DS18B20溫度感測實習一
# DS GPIO4
# Buzzer GPIO7
# Relay2 GPIO5

import RPi.GPIO as io
import I2C_LCD_driver as I2C_LCD
import os                      
import glob                    
from time import sleep

# 載入1 wire通信裝置核心模組                  
os.system('modprobe w1-gpio')   
os.system('modprobe w1-therm')    
# 指向 w1 裝置的路徑(資料夾)  
base_dir = '/sys/bus/w1/devices/'   
device_folder = glob.glob(base_dir + '28*')[0] 
# 找尋位置為"28"開頭的裝置
device_file = device_folder + '/w1_slave'   # 儲存資料

def read_temp_raw() :
   f = open(device_file, 'r')
   lines = f.readlines()    # 讀取 w1 裝置裡的資料
   f.close()                # 關檔
   return lines             # 傳回資料

def read_temp() :
   lines = read_temp_raw()  # 讀取溫度
   while lines[0].strip()[-3:] != 'YES':    # 忽略第一行
      sleep(0.2)       # 暫停0.2秒
      lines = read_temp_raw()   # 讀取溫度
   equals_pos = lines[1].find('t=')         # 找尋溫度位置
   if equals_pos != -1:     # 若找到溫度資料
      temp_string = lines[1][equals_pos+2:]
      temp_C = float(temp_string)/1000.0    # 轉換為攝氏溫度
      temp_F = temp_C*9.0/5.0+32.0  # 轉換為華氏溫度 
      return temp_C, temp_F     # 傳回攝氏溫度、華氏溫度

TH = 32                     # 宣告門檻溫度常數
Buzzer = 7                  # 設定Buzzer連接7腳
Relay2 = 5                  # 設定Relay2連接5腳
ON = 0                      # 宣告低態動作開關常數
OFF = 1                     # 宣告低態動作開關常數

io.setmode(io.BCM)      # 設定採用BCM接腳模式
io.setwarnings(False)       # 設定不顯示警告訊息
io.setup(Buzzer, io.OUT)    # 設定Buzzer為輸出接腳
io.setup(Relay2, io.OUT)    # 設定Relay2為輸出接腳
io.output(Buzzer, OFF)  # 設定Buzzer之初值
io.output(Relay2, OFF)  # 設定Relay2之初值

def beep(cnt):              # 嗶聲函數
    for i in range(cnt):
        io.output(Buzzer, ON)
        sleep(0.1)
        io.output(Buzzer, OFF)
        sleep(0.05)
    
myLCD = I2C_LCD.lcd()       # 建構LCD物件
myLCD.lcd_display_string("Celsius:", 1)     # 設定LCD初始顯示
myLCD.lcd_display_string("Fahren.:", 2)     # 設定LCD初始顯示

############################################################
while True:
    c,f = read_temp()           # 讀取溫度
    c = round(c,1)              # 攝氏溫度取小數一位
    f = round(f,1)              # 華氏溫度取小數一位
    print("攝氏溫度 %3.1f 度" %c)   # 在Shell裡顯示攝氏溫度
    print("華氏溫度 %3.1f 度" %f)   # 在Shell裡顯示華氏溫度
    # 在LCD裡顯示攝氏溫度與華氏溫度
    myLCD.lcd_display_string_pos(str(c),1,9) 
    myLCD.lcd_display_string_pos(str(f),2,9)
    if c > TH :                 # 若溫度高於門檻溫度
        beep(2)                 # 嗶兩聲
        io.output(Relay2, ON)   # 繼電器激磁 
    else :                      # 否則
        io.output(Relay2, OFF)  # 繼電器斷磁

    sleep(0.5)                  # 暫停0.5秒