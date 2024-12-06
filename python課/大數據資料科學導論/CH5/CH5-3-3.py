##### CH5-3-3.py #####
# 霹靂燈
# 紅色LED 0x20
# 綠色LED 0x21
# 藍色LED 0x22

import smbus
from time import sleep

# 建構I2C物件
myI2C = smbus.SMBus(1) # 指定使用/dev/i2c-1
# I2C位址
R = 0x20
G = 0x21
B = 0x22
# LED 全部關閉
myI2C.write_byte(R, 0xFF)
myI2C.write_byte(G, 0xFF)
myI2C.write_byte(B, 0xFF)

#################################
while True:
    # 順向
    r = 0x01 # 00000001
    for i in range (8):
        myI2C.write_byte(R, r^0xFF)
        r = r << 1
        sleep(0.1)
    myI2C.write_byte(R, 0xFF)
    g = 0x80 # 10000000
    for i in range (8):
        myI2C.write_byte(G, g^0xFF)
        g = g >> 1
        sleep(0.1)
    myI2C.write_byte(G, 0xFF)
    b = 0x01 # 00000001
    for i in range (8):
        myI2C.write_byte(B, b^0xFF)
        b = b << 1
        sleep(0.1)
    myI2C.write_byte(B, 0xFF)
    # 反向
    b = 0x80 # 10000000
    for i in range (8):
        myI2C.write_byte(B, b^0xFF)
        b = b >> 1
        sleep(0.10)
    myI2C.write_byte(B, 0xFF)
    g = 0x01 # 00000001
    for i in range (8):
        myI2C.write_byte(G, g^0xFF)
        g = g << 1
        sleep(0.1)
    myI2C.write_byte(G, 0xFF)
    r = 0x80 # 10000000
    for i in range (8):
        myI2C.write_byte(R, r^0xFF)
        r = r >> 1
        sleep(0.1)
    myI2C.write_byte(R, 0xFF)
        
        