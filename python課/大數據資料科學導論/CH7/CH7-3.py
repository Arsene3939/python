##### CH7-3.py #####
# Trig GPIO27
# Echo GPIO17
# Buzzer GPIO7

import RPi.GPIO as io
import time
from time import sleep

Trig = 27                   # 設定Trig連接27腳
Echo = 17                   # 設定Echo連接17腳
Buzzer = 7                  # 設定BZ連接7腳
ON = 0                      # 設定低態動作常數
OFF = 1                     # 設定低態動作常數

io.setmode(io.BCM)      # 設定採用BCM接腳模式
io.setwarnings(False)       # 設定不顯示警告訊息
io.setup(Trig, io.OUT)  # 設定Trig為輸出接腳
io.setup(Echo, io.IN)       # 設定Echo為輸入接腳
io.setup(Buzzer, io.OUT)    # 設定Buzzer為輸出接腳
io.output(Trig, 0)          # 設定Trig之初值
io.output(Buzzer, OFF)  # 設定Buzzer之初值

###########################
def send_pulse():           # 送出脈波函數
    io.output(Trig, 1)      # 送出脈波之高態
    sleep(0.001)            # 等待1ms
    io.output(Trig, 0)      # 脈波恢復低態
    
def waiting(value, timeout):    # 等待彈回脈波函數
    count = timeout         # 設定等待的時間限制
    # 若在實踐限制內，還沒等到預期的Echo信號
    while io.input(Echo) != (value and count > 0) :
        count = count - 1   # 等待，且計時

def get_distance():     # 測距函數
    send_pulse()            # 送出脈波
    waiting(1, 5000)        # 等待脈波傳回1
    start = time.time() # 紀錄開始時間
    waiting(0, 5000)        # 等待脈波傳回0
    finish = time.time()    # 紀錄結束時間
    pulse_len = finish - start  # 計算脈波寬度(時間)
    distance_cm = pulse_len * 34000 / 2 # 換算距離
    return distance_cm      # 傳回距離(單位為公分)

###########################
while True:
    Distance = get_distance()           # 測距
    print("距離為 %3.1f 公分" % Distance)   # 在終端機(Shell)顯示距離
    if Distance < 25 :          # 測距小於25公分
        io.output(Buzzer, ON)   # 嗶聲
        sleep(0.01*Distance)    # 嗶聲持續
        io.output(Buzzer, OFF) # 關閉嗶聲
        sleep(0.008)            # 暫停0.008秒

    sleep(0.05)         # 暫停0.05秒
      
  
    

