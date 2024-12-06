##### CH7-1.py #####
# SW18, SW23 ON
# MQ5 15
# PS1 左邊-中間 短路
# TP1 6
# BZ 7

from time import sleep
import RPi.GPIO as io

TP1 = 6                 # 設定TP1連接6腳
BZ = 7                  # 設定BZ連接7腳
MQ5 = 15                # 設定MQ5連接15腳

io.setmode(io.BCM)      # 設定採BCM接腳模式
io.setwarnings(False)   # 設定不顯示警告訊息
io.setup(TP1,io.IN)     # 設定TP1為輸入接腳
io.setup(MQ5,io.IN)     # 設定MQ5為輸入接腳
io.setup(BZ, io.OUT)    # 設定BZ為輸出接腳
io.output(BZ,1)         # 設定BZ之初值(低態動作)

# 嗶聲函數
def beep(cnt):
    for i in range(cnt):    # 嗶聲迴圈
        io.output(BZ, 0)    # 嗶聲
        sleep(0.1)          # 持續0.1秒
        io.output(BZ, 1)    # 靜音
        sleep(0.1)          # 持續0.1秒

###############################
while True:
    tp1 = io.input(TP1) # 讀取TP1按鍵
    while tp1 == 1:         # 若TP1的鍵值為1
        print("偵測中")        # 在終端機顯示"偵測中"
        mq5 = io.input(MQ5)# 讀取瓦斯感測器狀態
        if mq5 == 1 :       # 若瓦斯值超標
            beep(1)         # 嗶一聲
            print("瓦斯超標") # 在終端機顯示"瓦斯超標"
        else:
            print("正常") # 在終端機顯示"正常"
        tp1 = io.input(TP1)# 讀取TP1按鍵
        sleep(0.5)          # 暫停0.5秒

    print("待命中")            # 在終端機顯示"待命中"

