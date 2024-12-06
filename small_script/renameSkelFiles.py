import os
dirlist = os.listdir()
dirlist.sort()
flag = input("execute command?") != ""
for i in dirlist:
    if '.meta' in i:
        print("del %s"%i)
        flag and os.system(("del %s"%i))
    elif '.skel' in i:
        print("move %s %s"%(i, i.replace('.bytes','')))
        flag and os.system(("move %s %s"%(i, i.replace('.bytes',''))))

        i = i.replace(".byte",'')
        i = i.replace(".skel",'')
        print("move ../Texture2D/%s.png %s.png"%(i,i))
        flag and os.system("move ../Texture2D/%s.png %s.png"%(i,i))
        
    elif '.atlas' in i:
        print("move %s %s"%(i, i.replace('.txt','')))
        flag and os.system(("move %s %s"%(i, i.replace('.txt',''))))
    elif '.png' in i or '.jar' in i or '.py' in i:
        pass
    else:
        print("del %s"%i)
        flag and os.system(("del %s"%i))
input()
        