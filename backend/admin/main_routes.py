from flask import Blueprint, jsonify, redirect, url_for, request, session, flash, Response
from flask_login import current_user, login_user, logout_user, login_required
from app import db
from models import User, UserSchema

# /admin routes ??

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def home():
    return jsonify({ 'home': 'home page' })

@main.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else: 
        return jsonify({ 'login': 'login page' })
    # we want to use sessions here and authenticate the post request info

@main.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else:
        return jsonify({ 'register': 'register page' })
    # need to authenticate the registration data and check user does not exist

@main.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

@main.route('/impact')
def impact():
    return jsonify({ 'impact': 'impact page' })

@main.route('/resources')
def resources():
    return jsonify({ 'resources': 'resources page' })

@login_required
@main.route('/dashboard')
def dashboard():
    return jsonify({ 'dashboard': 'dashboard page' })

@login_required
@main.route('/garden')
def garden():
    return jsonify({ 'garden': 'garden page' })