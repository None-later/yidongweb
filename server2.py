from flask import Flask,render_template,json,jsonify,redirect,session,abort,request,\
    flash,url_for
from data_wrappers import Data_Wrappers
from config import app

data=Data_Wrappers()
print data.get_num_proj_dept()
print data.get_num_month_project()
print data.get_time_every_project()
@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/monitor')
def monitor():
    return render_template("monitor.html")

@app.route('/computer')
def computer():
    return render_template("computer.html")
@app.route('/bigdata')
def bigdata():
    return render_template("bigdata.html")

@app.route('/resource')
def resource():
    return render_template("resource.html")

@app.route('/docs')
def docs():
    return render_template("docs.html")

@app.route('/notice')
def notice():
    return render_template("notice.html")

@app.route('/notice_1')
def notice_1():
    return render_template("notice_1.html")

@app.route('/notice_2')
def notice_1():
    return render_template("notice_2.html")

@app.route('/notice_3')
def notice_1():
    return render_template("notice_3.html")

@app.route('/notice_4')
def notice_1():
    return render_template("notice_4.html")

@app.route('/notice_5')
def notice_1():
    return render_template("notice_5.html")

@app.route('/notice_6')
def notice_1():
    return render_template("notice_6.html")

@app.route('/notice_7')
def notice_1():
    return render_template("notice_7.html")

@app.route('/noticeMore')
def notice_1():
    return render_template("noticeMore.html")

@app.errorhandler(404)
def page_not_found(error):
    return redirect("http://v.163.com/special/special.html")

if __name__=='__main__':
    app.run()
