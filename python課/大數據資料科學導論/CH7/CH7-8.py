##### CH7-8.py #####
# 聲控繼電器
# mic GPIO14
# Relay2 GPIO5

import RPi.GPIO as io
from time import sleep

mic = 14                    # 設定mic連接14腳
Relay2 = 5                  # 設定Relay2連接5腳
RY2 = 1                     # 宣告繼電器開關變數

io.setmode(io.BCM)      # 設定採用BCM接腳模式
io.setwarnings(False)       # 設定不顯示警告訊息
io.setup(mic, io.IN)        # 設定mic為輸入接腳
io.setup(Relay2, io.OUT)    # 設定Relay2為輸出接腳
io.output(Relay2, RY2)  # 設定 Relay2之初值

#########################
while True :
    sound = io.input(mic)   # 讀取mic狀態
    print(sound)            # 在Shell裡顯示mic狀態
    if sound == 1 :         # 若有聲音
        RY2 = not RY2       # 切換狀態變數
    io.output(Relay2, RY2)  # 驅動繼電器

    sleep(0.25)             # 暫停(取樣時間)

