from app import app
from flask import Flask,render_template

@app.route('/usercase')
def usercase():
    render_template('usercase.html')

@app.route('/usercase_2')
def usercase_2():
    render_template('usercase_2.html')

@app.route('/usercase_3')
def usercase_3():
    render_template('usercase_3.html')

@app.route('/usercase_4')
def usercase_4():
    render_template('usercase_4.html')

@app.route('/usercase_5')
def usercase_5():
    render_template('usercase_5.html')

@app.route('/usercase_6')
def usercase_6():
    render_template('usercase_6.html')

@app.route('/usercaseMore')
def usercaseMore():
    render_template('usercaseMore.html')