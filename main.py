from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import pandas as pd
from datetime import datetime
load_dotenv()

app = FastAPI()

from sqlalchemy import create_engine
# for creating connection string
connection_str = os.environ.get('HEROKU_URI')
# SQLAlchemy engine
engine = create_engine(connection_str)
# you can test if the connection is made or not
try:
    with engine.connect() as connection_str:
        print('Successfully connected to the PostgreSQL database')
except Exception as ex:
    print(f'Sorry failed to connect: {ex}')



origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://four-seven-website-main.vercel.app",
    "https://www.7777-fourseven.com"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def top():
    return {"Hello":"world"}

@app.get("/schedule")
def schedule():
    sql = 'SELECT * FROM schedule'
    df = pd.read_sql(sql,engine)
    #今日より後の日付のデータを抽出
    today = datetime.now().date()
    df = df[df['date'] >= today]
    df.sort_values('date', inplace=True)
    extract_v_concat_df = pd.DataFrame(columns=df.columns, index=[])
    #日毎かつhall_nameの重複データを抽出
    for date in df['date'].unique():
        for hall_name in df[df['date'] == date]['hall_name'].unique():
            extract_df = df[(df['date'] == date) & (df['hall_name'] == hall_name)]
            include_syuzai_name_list = []
            for syuzai_name in extract_df['syuzai_name'].unique():
                print(syuzai_name)
                include_syuzai_name_list.append(syuzai_name)
            extract_df.iat[0, 5] = include_syuzai_name_list
            extract_df = extract_df.drop_duplicates(subset='hall_name', keep='first')
            extract_v_concat_df = pd.concat([extract_v_concat_df, extract_df], axis=0)

    #曜日列を追加する
    week_list = ['月', '火', '水', '木', '金', '土', '日']
    extract_v_concat_df['day_of_week'] = extract_v_concat_df['date'].map(lambda x: week_list[datetime.strptime(str(x), '%Y-%m-%d').weekday()])

    #日本語での日付表記に変更
    extract_v_concat_df['date'] = extract_v_concat_df['date'].astype(str)
    extract_v_concat_df['date'] = extract_v_concat_df['date'].map(lambda x: x.split('-')[1].replace('-', '').lstrip('0') + '月' + x.split('-')[2].lstrip('0') + '日')

    #日付列に曜日を追加
    extract_v_concat_df['date'] = extract_v_concat_df['date'] + '(' + extract_v_concat_df['day_of_week'] + ')'
    extract_v_concat_df = extract_v_concat_df.drop('day_of_week', axis=1)
    extract_v_concat_df
    schedule_dict = extract_v_concat_df.to_dict(orient='records')
    return schedule_dict
