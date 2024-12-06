##### CH5-3-2.py #####
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
# LED初始狀態
r = 0x01
g = 0x80
b = 0x01

#################################
while True:
    for i in range (7):
        myI2C.write_byte(R, r^0xFF)
        myI2C.write_byte(G, g^0xFF)
        myI2C.write_byte(B, b^0xFF)
        r = r << 1
        g = g >> 1
        b = b << 1
        sleep(0.1)
    for i in range (7):
        myI2C.write_byte(R, r^0xFF)
        myI2C.write_byte(G, g^0xFF)
        myI2C.write_byte(B, b^0xFF)
        r = r >> 1
        g = g << 1
        b = b >> 1
        sleep(0.1)
        