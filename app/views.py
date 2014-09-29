from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
@app.route('/index.html')
def index():
   return render_template('index.html') 

@app.route('/join')
@app.route('/join.html')
def join():
    return render_template('join.html')

@app.route('/thanks')
@app.route('/thanks.html')
def thanks():
    return render_template('thanks.html')
