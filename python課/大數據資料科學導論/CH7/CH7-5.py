##### CH7-5.py #####
# 人體動作感測器
# PIR GPIO17
# Relay2 GPIO5

import RPi.GPIO as io
from time import sleep

PIR = 17                    # 設定PIR連接17腳
Relay2 = 5                  # 設定Relay2連接5腳
ON = 0                      # 宣告低態動作開關常數
OFF = 1                     # 宣告低態動作開關常數

io.setmode(io.BCM)      # 設定採用BCM接腳模式
io.setwarnings(False)       # 設定不顯示警告訊息
io.setup(PIR, io.IN)        # 設定PIR為輸入接腳
io.setup(Relay2, io.OUT)    # 設定Relay2為輸出接腳
io.output(Relay2, OFF)  # 設定 Relay2之初值

########################################
while True:
    pir = io.input(PIR)     # 讀取PIR狀態
    if pir == 0:                # 若偵測沒有人體動作
        io.output(Relay2, OFF) # 繼電器斷磁
    else:                       # 否則
        io.output(Relay2, ON)   # 繼電器激磁
    sleep(0.5)                  # 暫停0.5秒

