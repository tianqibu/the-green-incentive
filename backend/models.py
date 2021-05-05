from app.extensions import db
from app.extensions import ma
from marshmallow import fields
from app.extensions import login

from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

import datetime

class User(UserMixin, db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, unique=True, autoincrement=True, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(160))
    points = db.Column(db.Integer)
    trees_grown = db.Column(db.Integer)

    def __repr__(self):
        return '<User %r>' % self.username

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        # if self.password_hash == password:
        #     return True
        # else:
        #     return False
        return check_password_hash(self.password_hash, password)

class Activity(db.Model):
    __tablename__ = 'activity'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    activity_name = db.Column(db.String(200))
    activity_example = db.Column(db.String(400))
    activity_points = db.Column(db.Integer)

class Reward(db.Model):
    __tablename__ = 'reward'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    reward_category = db.Column(db.String(400))
    reward_name = db.Column(db.String(200))
    reward_points = db.Column(db.Integer)

class ActivityLog(db.Model):
    __tablename__ = 'activity-log'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    date = db.Column(db.DateTime)
    activity_id = db.Column(db.Integer, db.ForeignKey('activity.id'))
    activity = db.relationship('Activity')
    activity_description = db.Column(db.String(400))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

class RewardLog(db.Model):
    __tablename__ = 'reward-log'
    id = db.Column(db.Integer, primary_key=True)
    reward_id = db.Column(db.Integer, db.ForeignKey('reward.id'))
    reward = db.relationship('Reward')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class ActivitySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Activity

class RewardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Reward

class ActivityLogSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ActivityLog
        include_fk = True
        # activity = fields.Nested(ActivitySchema)


class RewardLogSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = RewardLog
        include_fk = True
