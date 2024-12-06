##### CH7-6-1.py #####
# 溫濕度感測器
# DHT GPIO4

from time import sleep
import sys
import Adafruit_DHT

DHT = 4         # 指定DHT接腳
DHT_type = 11   # 指定DHT形式

###########################################
while True : 
    # 讀取濕度與溫度
    humi, temp= Adafruit_DHT.read_retry(DHT_type, DHT)
    T = str(temp)                   # 溫度值轉換成字串
    H = str(humi)                   # 濕度值轉換成字串
    print ('Temperature = ' + T)    # 在Shell裡顯示溫度
    print ('Humidity = ' + H)       # 在Shell裡顯示濕度
    print ('=============================')

    sleep(1)    # 暫停1秒

