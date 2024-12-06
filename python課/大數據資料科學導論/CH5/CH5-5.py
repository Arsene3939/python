##### CH5-5.py #####
# BH1750 0x23
# I2C LCD SW7

import RPi.GPIO as io
from time import sleep
import smbus
import I2C_LCD_driver as I2C_LCD

BH1750 = 0x23
I2C_1750 = smbus.SMBus(1)

myLCD = I2C_LCD.lcd()
myLCD.lcd_display_string("- Light meter -", 1)
myLCD.lcd_display_string("                ", 2)

def readLight(addr=BH1750):
  data = I2C_1750.read_i2c_block_data(addr,0x10)
  # 轉換2 bytes資料成為十進位數字
  data = (data[1] + (256 * data[0])) / 1.2
  return data

#############################################
while True:
    lightLevel=readLight()
    LL =str(format(lightLevel,'.2f') + " lx ")
    myLCD.lcd_display_string_pos(LL, 2, 4)
    print("光度 : " + LL)
    sleep(0.5)
    
