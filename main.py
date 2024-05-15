from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
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

@app.get("/top_report_data")
def top_report_data():

    sql = '''SELECT * 
            FROM halls 
            LEFT OUTER JOIN report
            ON report.hall_id = halls.id;
            '''
    report_df = pd.read_sql(sql,engine)
    #今日より後の日付のデータを抽出

    today = datetime.now().date()
    report_df = report_df[report_df['date'] <= today]

    report_df = report_df.sort_values('date', ascending=False)
    report_df['hall_id'] =report_df['hall_id'].astype(int)
    report_df['subject_number'] = report_df['subject_number'].astype(int)
    report_df['machine_number'] = report_df['machine_number'].astype(int)
    report_df['game_count'] = report_df['game_count'].astype(int)
    report_df['diff_coins'] = report_df['diff_coins'].astype(int)
    report_df['hall_name_and_date'] =  report_df['hall_name'] + '_' + report_df['date'].astype(str)
    hall_name_and_date_list = list(report_df['hall_name_and_date'].unique())[0:10]
    report_df = report_df[report_df['hall_name_and_date'].isin(hall_name_and_date_list)]

    #日毎かつhall_nameの重複データを抽出
    master_json = []
    for hall_name_and_date_str in hall_name_and_date_list:
        print(hall_name_and_date_str)
        report_json = {}
        report_json['hall_name'] = hall_name_and_date_str.split('_')[0]
        report_json['date'] = hall_name_and_date_str.split('_')[1]
        detail_report_json_list = []
        extract_report_df = report_df[(report_df['hall_name_and_date'] == hall_name_and_date_str)]
        for subject_number in sorted(extract_report_df['subject_number'].unique()):
            detail_report_json = {}
            extract_report_df = extract_report_df[['machine_number', 'machine_name', 'game_count', 'diff_coins','subject_number','subject_name']]
            #display(extract_report_df[:3])
            extract_subject_num_df = extract_report_df[extract_report_df['subject_number'] == subject_number]
            extract_subject_num_df.sort_values('machine_number', inplace=True)
            detail_report_json[f'subject_number'] = str(subject_number)
            detail_report_json[f'subject_name'] = list(extract_subject_num_df['subject_name'].unique())[0]
            detail_report_json[f'extract_subject_num_df'] = extract_subject_num_df.to_dict(orient='records')
            #display(extract_subject_num_df)
            detail_report_json_list.append(detail_report_json)
            report_machine_num = len(extract_subject_num_df)
            sum_diff_coins  = int(extract_subject_num_df['diff_coins'].sum())
            ave_diff_coins  = int(extract_subject_num_df['diff_coins'].mean())
            ave_output_rate = (((extract_subject_num_df['game_count'].sum() * 3) + sum_diff_coins) / (extract_subject_num_df['game_count'].sum() * 3) )*100
            ave_output_rate = round(ave_output_rate, 1)
            win_count = len(extract_subject_num_df[extract_subject_num_df['diff_coins'] > 0])
            win_count_str = f'{win_count}'+ '/' + f'{len(extract_subject_num_df)}' +  '(' + str(round(win_count/len(extract_subject_num_df)*100,1)) + '%)'
            win_count_str
            detail_report_json[f'sum_diff_coins'] = str(sum_diff_coins)
            detail_report_json[f'ave_diff_coins'] = str(ave_diff_coins)
            detail_report_json[f'ave_output_rate'] = str(ave_output_rate)
            detail_report_json[f'win_count_str'] = str(win_count_str)
            report_json['detail_report_json_list'] = detail_report_json_list
        
        master_json.append(report_json)
        #break

    return jsonable_encoder(master_json)
