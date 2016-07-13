from config import app
from flask import render_template
@app.route('/notice')
def notice():
    return render_template("notice.html")

@app.route('/notice_1')
def notice_1():
    return render_template("notice_1.html")

@app.route('/notice_2')
def notice_2():
    return render_template("notice_2.html")

@app.route('/notice_3')
def notice_3():
    return render_template("notice_3.html")

@app.route('/notice_4')
def notice_4():
    return render_template("notice_4.html")

@app.route('/notice_5')
def notice_5():
    return render_template("notice_5.html")

@app.route('/notice_6')
def notice_6():
    return render_template("notice_6.html")

@app.route('/notice_7')
def notice_7():
    return render_template("notice_7.html")

@app.route('/noticeMore')
def noticeMore():
    return render_template("noticeMore.html")