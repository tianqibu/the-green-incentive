from app import db
from app import login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(160))
    points = db.Column(db.Integer)
    # also activities and rewards columns to keep track of past progress

    def __repr__(self):
        return '<User %r>' % self.username

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# not sure what this does
@login.user_loader
def load_user(id):
   return User.query.get(int(id))

class Activity(db.Model):
    # __tablename__ = 'activity'
    id = db.Column(db.Integer, primary_key=True)
    activity = db.Column(db.String(200))
    description = db.Column(db.String(400))
    points = db.Column(db.Integer)

class Reward(db.Model):
    __tablename__ = 'reward'
    id = db.Column(db.Integer, primary_key=True)
    reward = db.Column(db.String(200))
    description = db.Column(db.String(400))
    points = db.Column(db.Integer)

class ActivityLog(db.Model):
    __tablename__ = 'activity-log'
    id = id = db.Column(db.Integer, primary_key=True)
    activity = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)

class RewardLog(db.Model):
    __tablename__ = 'reward-log'
    id = id = db.Column(db.Integer, primary_key=True)
    reward = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)