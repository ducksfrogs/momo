import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("./men.csv")


df.head()


df = df[['cat01_code', 'time_code', 'value']]


df_cup = df[df['cat01_code'] == 10130050]


df_inst = df[df['cat01_code'] == 10130060]


df_inst['time_code'] = df_inst['time_code'].astype('str')


df_inst['time_code'].str[6:8]


plt.figure(figsize=(15,6))
plt.plot(df_inst['time_code'], df_inst['value'])


def make_str(data):
    y = data[:4]
    m = data[6:8]
    ans = y + '-' + m +'-1'
    return ans


import datetime





y = df_inst["time_code"].str[:4]


m = df_inst['time_code'].str[6:8]


df_inst['date'] = df_inst['time_code'].apply(make_str)


df_inst.info()


datetime.datetime(df_inst['date'])





plt.plot(df_droped['time_code'], df_droped['value'])


df_droped.to_csv('ddd.csv
                 ')
