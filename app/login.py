from flask import render_template,request,redirect,session,flash,url_for,\
    json
from flask.ext.login import login_required

from app import app
from data import _all_days,_project_name,_dept_pnum,_dept_name,\
    _year,_machineNum,_month,virtual_num,virtual_date

@app.route('/resource_2')
#@login_required
def resource_2():
    all_days = json.dumps(_all_days)
    project_name = json.dumps(_project_name)

    dept_name = json.dumps(_dept_name)
    dept_pnum = json.dumps(_dept_pnum)

    machineNum = json.dumps(_machineNum)
    month = json.dumps(_month)
    year = json.dumps(_year)
    virtual_datetime = json.dumps(virtual_date)
    virtual_machinenum = json.dumps(virtual_num)
    max_machineNum = max(_machineNum) / 12
    len_project_name = len(_project_name)
    len_dept_name = len(_dept_name)
    print len_project_name
    return render_template("resource_2.html", all_days=all_days, project_name=project_name, \
                           dept_name=dept_name, dept_pnum=dept_pnum, \
                           machineNum=machineNum, month=month, year=year, max_machineNum=max_machineNum, \
                           len_project_name=len_project_name, len_dept_name=len_project_name, \
                           virtual_datetime=virtual_datetime, virtual_machinenum=virtual_machinenum)

@app.route('/login',methods=['GET','POST'])
def login():
    # return render_template("login.html")
    error = 'no error'
    if request.method == 'POST':
        if request.form['username'] != 'admin':
            error = 'Invalid username'
        elif request.form['password'] != 'admin':
            error = 'Invalid password'
        else:
            return redirect(url_for('resource_2'))
    return render_template('login.html', error=error)
