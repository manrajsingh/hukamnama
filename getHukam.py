from datetime import date, datetime
import urllib.request, json

today = date.today().strftime("%Y/%m/%d")
print(today)

#https://api.banidb.com/v2/hukamnamas/2021/05/10
with urllib.request.urlopen("https://api.banidb.com/v2/hukamnamas/"+today) as url:
    data = json.loads(url.read().decode())
    with open("hukam.js", "w") as f:
        f.write("last_updated = '"+ datetime.now().strftime("%Y/%m/%d %H:%M:%S") + "';")
        f.write("hukam = "+json.dumps(data)+';')