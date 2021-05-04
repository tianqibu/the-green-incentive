from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)
login = LoginManager(app)
cors = CORS(app)
