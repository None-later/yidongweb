from flask import Flask
from config import  db


class Resouce(db.Model):
    id=db.Column(db.Integer,primary_key=True,nullable=False)
    dept=db.Column(db.String(50),nullable=False)
    proj= db.Column(db.String(50))
    ip=db.Column(db.String(20),unique=True,nullable=False)
    mac=db.Column(db.String(20),unique=True,nullable=False)

class Day(db.Model):
    id=db.Column(db.Integer,primary_key=True,nullable=False)
    host=db.Column(db.String(20),nullable=False)
    mac=db.Column(db.String(20),nullable=False)
    cpu=db.Column(db.Float,nullable=False)
    mem=db.Column(db.Float,nullable=False)
    rootid=db.Column(db.Float,nullable=False)
    dataid=db.Column(db.Float)
    date=db.Column(db.Date)

class Monitor(db.Model):
    id=db.Column(db.Integer,primary_key=True,nullable=False)
    host=db.Column(db.String(20),nullable=False)
    mac=db.Column(db.String(20),nullable=False)
    cpu=db.Column(db.Float,nullable=False)
    mem=db.Column(db.Float,nullable=False)
    rootid=db.Column(db.Float)
    dataid=db.Column(db.Float)
    date=db.Column(db.Date)
    time=db.Column(db.Time)























# from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
# from config import DBSession,engine
#
# conn_pool = engine.connect()
# sql = 'select proj,count(*) from resource group by PROJ order by proj DESC'
# rs = conn_pool.execute(sql)
# class Resource(object):
#     def __init__(self):
#         self.conn=conn_pool
#     def getresource(self,conn):
#         if conn.closed:
#             conn = engine.connect()
#         sql = 'select proj,count(*) from resource group by PROJ order by proj DESC'
#         rs = conn.execute(sql)
#         conn.closed
#
# class User(object):
#     def __init__(self):
#         self.conn=conn_pool
#     def createtable(self,conn):
#         del_existtable_sql= 'drop table if exists entries'
#         create_table_sql='''create table entries (
#             id integer primary key autoincrement,
#             title string not null,
#             text string not null
#             )'''
#
#         if conn.closed:
#             conn = engine.connect()
#             conn.execute(del_existtable_sql)
#             conn.execute(create_table_sql)
#         conn.close()
#
