from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_login import LoginManager

from main.main_routes import main
from activity.activity_routes import activity
from reward.reward_routes import reward

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./thegreenincentive.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '4c4dfac39f8c6d672d41928d89545c74'

db = SQLAlchemy(app)
ma = Marshmallow(app)
login = LoginManager(app)
login.login_view = 'login' # ??

app.register_blueprint(main, url_prefix='')
app.register_blueprint(activity, url_prefix='')
app.register_blueprint(reward, url_prefix='')

if __name__ == '__main__':
    app.run(debug=True)

