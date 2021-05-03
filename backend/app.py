from flask import Flask, request, jsonify, session, flash, redirect, url_for, Response
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_login import current_user, login_user, logout_user, login_required, LoginManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./thegreenincentive.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '4c4dfac39f8c6d672d41928d89545c74'

db = SQLAlchemy(app)
ma = Marshmallow(app)
login = LoginManager(app)
login.login_view = 'login'
from models import User, Activity, Reward


@app.route('/', methods=['GET'])
def home():
    return jsonify({ 'home': 'home page' })

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else: 
        return jsonify({ 'login': 'login page' })
    # we want to use sessions here and authenticate the post request info

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else:
        return jsonify({ 'register': 'register page' })
    # need to authenticate the registration data and check user does not exist

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/impact')
def impact():
    return jsonify({ 'impact': 'impact page' })

@app.route('/resources')
def resources():
    return jsonify({ 'resources': 'resources page' })

@login_required
@app.route('/dashboard')
def dashboard():
    return jsonify({ 'dashboard': 'dashboard page' })

@login_required
@app.route('/activities')
def activities():
    return jsonify({ 'activities': 'activities page' })

@login_required
@app.route('/rewards')
def rewards():
    return jsonify({ 'rewards': 'rewards page' })

@login_required
@app.route('/garden')
def garden():
    return jsonify({ 'garden': 'garden page' })


if __name__ == '__main__':
    app.run(debug=True)

