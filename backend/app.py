from main.main_routes import main
from activity.activity_routes import activity
from reward.reward_routes import reward
from app.extensions import db, ma, migrate, login, app, cors

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../thegreenincentive.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '4c4dfac39f8c6d672d41928d89545c74'

app.register_blueprint(main, url_prefix='/api')
app.register_blueprint(activity, url_prefix='/api/activities')
app.register_blueprint(reward, url_prefix='/api/rewards')

 # Setup the Flask-JWT-Extended extension
# app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
# jwt = JWTManager(app)

def create_app():
    db.init_app(app)
    migrate.init_app(app, db)
    return app

if __name__ == '__main__':
    app.run(debug=True)


