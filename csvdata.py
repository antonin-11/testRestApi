import pandas as pd
from sqlalchemy import create_engine
import psycopg2
from dotenv import load_dotenv
import os

# load .posggre into .config/postgres.env
load_dotenv(dotenv_path='.config/postgres.env')

user = os.environ.get('POSTGRES_USER')
password = os.environ.get('POSTGRES_PASSWORD')
hostname = os.environ.get('POSTGRES_HOST')
database_name = os.environ.get('POSTGRES_DB')

engine = create_engine('postgresql+psycopg2://' + user + ':' +  password +'@' + hostname +'/'+ database_name)

dbConnection = engine.connect();

df = pd.read_sql("select id,title,size,brand,description,color,price,state,url,picture_url from shoe where sold = false", dbConnection);

pd.set_option('display.expand_frame_repr', False)

df.to_csv('test.csv', index=False, header=True)

dbConnection.close();
exit()
