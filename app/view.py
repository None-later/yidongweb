#coding=utf-8
from data import _all_days,_project_name,_dept_pnum,_dept_name,\
    _year,_machineNum,_month,virtual_num,virtual_date
from flask import json,redirect,render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/monitor')
def monitor():

    return render_template("monitor.html")

@app.route('/faq')
def faq():
    return  render_template('faq.html')

@app.errorhandler(404)
def page_not_found(error):
    return redirect("http://v.163.com/special/special.html")
