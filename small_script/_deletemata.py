import os
for i in os.listdir():
    if '.meta' in i:
        print('del "%s"'%i)
        os.system('del "%s"'%i)