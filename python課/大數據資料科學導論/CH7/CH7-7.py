##### CH7-7.py #####
# 傾斜感測器
# TILT GPIO24
# Relay2 GPIO5
# Buzzer GPIO7

import RPi.GPIO as io
from time import sleep

TILT = 24       # 設定TILT連接24腳
Relay2 = 5      # 設定Relay2連接5腳
Buzzer = 7      # 設定Buzzer連接7腳
ON = 0          # 宣告低態動作之開關常數
OFF = 1         # 宣告低態動作之開關常數

io.setmode(io.BCM)      # 設定採用BCM接腳模式
io.setwarnings(False)   # 設定不顯示警告訊息
io.setup(TILT, io.IN)   # 設定TILT為輸入接腳
io.setup(Relay2, io.OUT)# 設定Relay2為輸出接腳
io.setup(Buzzer, io.OUT)# 設定Buzzer為輸出接腳
io.output(Relay2, OFF)  # 設定Relay2之初始狀態
io.output(Buzzer, OFF)  # 設定Buzzer之初始狀態

#####################################
while True:
    tilt = io.input(TILT)       # 讀取TILT
    if tilt == 0:               # 若傾斜
        io.output(Relay2, ON)   # 繼電器激磁
        io.output(Buzzer, ON)   # 蜂鳴器響起
        sleep(0.1)              # 持續0.1秒
        io.output(Buzzer, OFF)  # 蜂鳴器不響
        sleep(0.05)             # 持續0.05秒
    else:
        io.output(Relay2, OFF) # 繼電器斷磁
        
    sleep(0.5)                  # 暫停0.5秒

