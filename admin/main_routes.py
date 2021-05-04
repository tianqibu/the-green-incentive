from flask import Blueprint, jsonify, redirect, url_for, request, session, flash, Response
from flask_login import current_user, login_user, logout_user, login_required
from app.extensions import db
from models import User, UserSchema

# /admin routes ??

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def home():
    return jsonify({ 'home': 'home page' })

####################### LOG IN #######################

@main.route('/login', methods=['GET', 'POST'])
def login():
    '''Authenticates user'''

    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else: 
        return jsonify({ 'login': 'login page' })

    # we want to use sessions here and authenticate the post request info

    if request.method == 'POST':
        form_username = request.json['username']
        form_password = request.json['password'] 

        user = User.query.filter_by(username=form_username).first()
        if user and user.check_password(password, form_password):
            login_user(user)
            return redirect(url_for('dashboard'))
        else: 
            return jsonify('error': 'Login unsuccessful. Please check your email and password and try again.')

####################### REGISTER #######################

@main.route('/register', methods=['GET', 'POST'])
def register():
    '''Allows user to register'''

    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    else:
        return jsonify({ 'register': 'register page' })
    
    username = request.json['username']
    email = request.json['email']
    password = request.json['password'] 

    if User.query.filter(User.username == username).count():
        return jsonify({'error': 'User already exists'})
    
    if User.query.filter(User.email == email).count():
        return jsonify({'error': 'Email has already been used'})
        
    new_user = User(username, email, user.set_password(password)) 

    db.session.add(user)
    db.session.commit()

    return jsonify{'message': 'New user has been successfully registered'}

####################### LOGOUT #######################

@login_required
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
@main.route('/users/current')
def garden():
    '''Returns JSON data with all information for the currently logged in user'''
    user = User.query.filter_by(username=current_user.username).first()
    return jsonify({ 
        'user': user.username,
        'email': user.email,
        'password': user.password,
        'points': user.points,
        'trees_grown': user.trees_grown
    })

@main.route('/trees/add')
def garden():
    '''Updates user instance and increases the number of trees grown by the user by one'''
    user = User.query.filter_by(username=current_user.username).first()
    user.trees_grown += 1
    db.session.commit()
    return jsonify({ 'trees': user.trees_grown })