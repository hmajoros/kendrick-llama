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

@app.route('/reviews')
@app.route('/reviews.html')
def reviews():
    return render_template('reviews.html')

@app.route('/nope')
@app.route('/nope.html')
def nope():
    return render_template('nope.html')
