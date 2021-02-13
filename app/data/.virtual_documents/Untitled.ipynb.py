import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("./men.csv")


df.head()


df = df[['cat01_code', 'time_code', 'value']]


df['time_code'] = df['time_code'].astype('str')





df_cup = df[df['cat01_code'] == 10130050]


df_inst = df[df['cat01_code'] == 10130060]


def make_str(data):
    y = data[:4]
    m = data[6:8]
    ans = y + '-' + m +'-1'
    return ans


import datetime


df_cup['date'] = df_cup['time_code'].apply(make_str)


df_inst['date'] = df_inst['time_code'].apply(make_str)


df_inst.info()


df_cup.info()


plt.figure(figsize=(20,10))
plt.plot(df_inst['date'], df_inst['value'])
plt.plot(df_cup['date'], df_cup['value'])


df_inst.to_json('inst.json')


df_cup.to_json('cup.json')



