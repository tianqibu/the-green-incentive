from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.extensions import db
from models import ActivityLog, ActivityLogSchema, Activity, ActivitySchema
import datetime

activity = Blueprint('activity', __name__)

activities_schema = ActivitySchema(many=True)
activity_log_schema = ActivityLogSchema()
activities_log_schema = ActivityLogSchema(many=True)

####################### ACTIVITY LOG #######################

@login_required
@activity.route('/log/add', methods=['POST'])
def add_activity_log_entry():
    '''Logs an activity the user has added for points'''

    req_data = request.get_json()
    activity_id = req_data['activity_id']
    print(activity_id)
    activity_description = req_data['activity_description']
    print(activity_description)
    user_id = current_user.id
    print(user_id)
    date = datetime.datetime.now()
    print(date)

    new_activity_log_entry = ActivityLog(date=date, activity_id=activity_id, activity_description=activity_description, user_id=user_id)
    db.session.add(new_activity_log_entry)
    db.session.commit()

    return jsonify({'message': 'activity has been logged'})

@login_required
@activity.route('/log', methods=['GET'])
def get_activity_log():
    '''Gets all the activities the user has logged for points'''
    all_activities = ActivityLog.query.filter_by(user_id=current_user.id)
    result = activities_log_schema.dump(all_activities)

    return jsonify(result)

####################### ACTIVITIES #######################

@activity.route('/', methods=['GET'])
def get_activities():
    '''Gets all the activities users can log to redeem for points'''
    all_activities = Activity.query.all()
    result = activities_schema.dump(all_activities)
    return jsonify(result)