from app import db
from app import ma
from app import login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
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
    id = db.Column(db.Integer, primary_key=True)
    activity_name = db.Column(db.String(200))
    activity_description = db.Column(db.String(400))
    activity_points = db.Column(db.Integer)

class Reward(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reward_name = db.Column(db.String(200))
    reward_description = db.Column(db.String(400))
    reward_points = db.Column(db.Integer)


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class ActivitySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Activity

class RewardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Reward