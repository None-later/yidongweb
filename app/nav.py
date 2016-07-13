#coding=utf-8
from data import _all_days,_project_name,_dept_pnum,_dept_name,\
    _year,_machineNum,_month,virtual_num,virtual_date
from flask import json,render_template
from config import app

@app.route('/computer')
def computer():
    return render_template("computer.html")
@app.route('/bigdata')
def bigdata():
    return render_template("bigdata.html")
@app.route('/storage')
def storage():
    return render_template("storage.html")
@app.route('/resource')
def resource():
    all_days=json.dumps(_all_days)
    project_name=json.dumps(_project_name)

    dept_name=json.dumps(_dept_name)
    dept_pnum=json.dumps(_dept_pnum)

    machineNum=json.dumps(_machineNum)
    month=json.dumps(_month)
    year=json.dumps(_year)
    virtual_datetime=json.dumps(virtual_date)
    virtual_machinenum=json.dumps(virtual_num)
    max_machineNum=max(_machineNum)/12
    len_project_name=len(_project_name)
    len_dept_name=len(_dept_name)
    print len_project_name
    return render_template("resource.html", all_days=all_days, project_name=project_name, \
                           dept_name=dept_name, dept_pnum=dept_pnum, \
                           machineNum=machineNum, month=month, year=year, max_machineNum=max_machineNum, \
                           len_project_name=len_project_name, len_dept_name=len_project_name, \
                           virtual_datetime=virtual_datetime, virtual_machinenum=virtual_machinenum)
@app.route('/docs')
def docs():
    return render_template("docs.html")