import os
dbgflag = input("really execute?") != ""
viewerPath = "C:\\Users\\Arsene\\Desktop\\tools\\skelviewer"
viewer = os.listdir(viewerPath)
def run(s):
    print(s)
    dbgflag and os.system(s)
def getInput(domain, prompt = "" ,exvalue = False):
    try:
        for i in prompt.split('\n'):
            print()
            print(i,end='')
        strvalue = input()
        if exvalue and strvalue == "":
            return None
        numericvalue = eval(strvalue)
        if  numericvalue not in domain:
            return getInput(domain, prompt, exvalue)
        return numericvalue
    except Exception as e:
        print(e)
        return getInput(domain, prompt, exvalue)
for i in ["%d. %s"%(i+1,it) for i,it in enumerate(viewer)]:
    print(i)

viewer = viewerPath+'\\'+viewer[getInput(range(1,len(viewer)), "select viewer")-1]
print("use",viewer,'to open skel, altas, png files')
dirlist = os.listdir()
dirlist.sort()
for i in dirlist:
    if '.skel' in i:
        if os.path.isfile("%s.png"%(i.replace('.skel',''))):
            run("%s %s"%(viewer, i))
        else:
            print("failed to find relative png of %s"%i)
        input("next")