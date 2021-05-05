from flask import Blueprint, jsonify, redirect, url_for, request, session, flash, Response
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
from app.extensions import db, login
from models import User, UserSchema

main = Blueprint('main', __name__)
login.login_view = 'login'

####################### LOG IN #######################

@login.user_loader
def load_user(id):
   return User.query.get(int(id))

@main.route('/users/login', methods=['GET', 'POST'])
def login():
    '''Authenticates user'''

    print(current_user)
    # print(current_user.is_authenticated)
    # if current_user.is_authenticated:
    #     return redirect(url_for('dashboard'))
    # else: 
    #     return jsonify({ 'login': 'login page' })

    # we want to use sessions here and authenticate the post request info

    if request.method == 'POST':
        form_username = request.json['username']
        form_password = request.json['password'] 

        user = User.query.filter_by(username=form_username).first()
    
        print(user.check_password(password=form_password))

        if user and user.check_password(password=form_password):
            print('Test')
            login_user(user)
            flash('Successfully logged in.')
            return jsonify({'message': 'User is logged in'})
        else:  
            flash('Login unsuccessful. Please check your email and password and try again.')
            return jsonify({'error': 'Login unsuccessful. Please check your email and password and try again.'})

####################### REGISTER #######################

@main.route('/users/register', methods=['GET', 'POST'])
def register():
    '''Allows user to register'''

    # print(current_user.is_authenticated)
    # if current_user.is_authenticated:
    #     return redirect('http://localhost:3000/dashboard')
    # else:
    #     return jsonify({ 'register': 'register page' })

    username = request.json['username']
    email = request.json['email']
    password = request.json['password'] 

    if User.query.filter(User.username == username).count():
        flash('User already exists.')
        return jsonify({'error': 'User already exists'})
    
    if User.query.filter(User.email == email).count():
        flash('Email already in use.')
        return jsonify({'error': 'Email has already been used'})
        
    new_user = User(username=username, email=email, points=0, trees_grown=0)
    new_user.set_password(password)

    print('User added')

    db.session.add(new_user)
    db.session.commit()

    flash('You have successfully registered.')
    return jsonify({'message': 'New user has been successfully registered'})

####################### LOGOUT #######################

@login_required
@main.route('/users/logout')
def logout():
    logout_user()
    flash('You have successfully logged out.')
    return 'Logged out'
    # return redirect(url_for('home'))

####################### GET CURRENT USER INFORMATION #######################

@login_required
@main.route('/users/current')
def get_user_info():
    '''Returns JSON data with all information for the currently logged in user'''

    user = User.query.filter_by(username=current_user.username).first()
    return jsonify({ 
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'password': user.password_hash,
        'points': user.points,
        'trees_grown': user.trees_grown
    })

####################### ADD POINTS #######################

@login_required
@main.route('/points/add/<int:points>')
def add_points(points):
    '''Add points to user's total point balance''' 

    user = User.query.filter_by(username=current_user.username).first()
    user.points = user.points + points
    db.session.commit()

    return 'Points added'

####################### TAKE OFF POINTS #######################

@login_required
@main.route('/points/subtract/<int:points>')
def subtract_points(points):
    '''Subtract points to user's total point balance''' 

    user = User.query.filter_by(username=current_user.username).first()
    user.points = user.points - points
    db.session.commit()

    return 'Points subtracted'

####################### GARDEN #######################

@main.route('/trees/add')
def tree():
    '''Updates user instance and increases the number of trees grown by the user by one'''
    user = User.query.filter_by(username=current_user.username).first()
    user.trees_grown += 1
    db.session.commit()
    return jsonify({ 'trees': user.trees_grown })