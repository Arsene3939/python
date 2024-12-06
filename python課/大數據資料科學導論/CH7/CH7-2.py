##### CH7-2.py #####
# SW23 ON
# PD 23
# PS1 左邊-中間 短路
# TP1 6
# BZ 7

from time import sleep
import RPi.GPIO as io

TP1 = 6                 # 設定TP1連接6腳
BZ = 7                  # 設定BZ連接7腳
PD = 23                 # 設定火焰感測器連接23腳
bzF = True
io.setmode(io.BCM)      # 設定採BCM接腳模式
io.setwarnings(False)   # 設定不顯示警告訊息
io.setup(TP1, io.IN)    # 設定TP1為輸入接腳
io.setup(PD, io.IN)     # 設定PD為輸入接腳
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
    print("偵測中")            # 在終端機顯示"偵測中"
    pd = io.input(PD)       # 讀取火焰感測器狀態
    if pd == 1 :            # 若火焰值超標
        tp1 = io.input(TP1)# 讀取TP1按鍵
        if tp1 == 1 :
            bzF = not bzF
        if bzF:
            beep(1)         # 嗶一聲
        print("發現火焰")   # 在終端機顯示"發現火焰"
    else :
        print("正常")     # 在終端機顯示"正常"

