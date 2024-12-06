a=u'''
      紅蓮華
      我知道如何變強的理由了
      它引領我向前邁進
      沉醉在泥濘的走馬燈中
      變得僵硬的心
      我用顫抖的手想抓住些甚麼
      就只是這樣
      黑夜的氣味 凝視著天空
      能改變的只有自己而已
      就只是這樣
      我知道如何變強的理由了
      它引領我向前邁進
      無論如何
      仍有無法抹滅的夢
      仍有無法停止的當下
      但若我能為了誰而變得強大
      無論幾次我都會站起來
      被世界狠狠打擊
      我明白失敗的意義
      紅蓮之花阿  綻放吧
      照亮命運吧
   '''
b=list(a)
while(1):
    if ' 'in b:
        b.remove(' ')
        continue
    break;
print(b)
x=[i.encode('big5') for i in b]
k=0
poper=x[0]
for i in x:
    if i==poper:
        print(i)
    else:
        for j in range(2):
            print("X\"%X"%i[j],end='",')