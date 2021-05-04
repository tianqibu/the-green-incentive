from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import ActivityLog, ActivityLogSchema, Activity, ActivitySchema

activity = Blueprint('activity', __name__)

activities_schema = ActivitySchema(many=True)
activity_log_schema = ActivityLogSchema()
activities_log_schema = ActivityLogSchema(many=True)


####################### ACTIVITY LOG #######################

@login_required
@activity.route('/log/add', methods=['GET', 'POST'])
def add_activity_log():
    '''Logs an activity the user has added for points'''

    req_data = request.get_json()
    activity_id = req_data['activity_id']
    activity_description = req_data['activity_description']
    user_id = user_id = current_user.id

    new_activity_log_entry = ActivityLog(activity_id, activity_description, user_id)
    db.session.add(new_activity)
    db.session.commit()

    return activity_log_schema.jsonify(new_activity)

@login_required
@activity.route('/log', methods=['GET'])
def get_activities():
    '''Gets all the activities the user has logged for points'''
    all_activities = ActivityLog.query.all()
    result = activities_log_schema.dump(all_activities)

    return jsonify(result)

@activity.route('/all', methods=['GET'])
def get_activities_all():
    all_activities = Activity.query.all()
    result = activities_schema.dump(all_activities)

    return jsonify(result)

# # get single activity
# @login_required
# @activity.route('/activity/<id>', methods=['GET'])
# def get_activity(id):
#     activity = ActivityLog.query.get(id)

#     return activity_log_schema.jsonify(activity)

# # update activity
# @login_required
# @activity.route('/activity/<id>', methods=['PUT'])
# def update_activity(id):
#     activity = ActivityLog.query.get(id)

#     # activity_name = Activity.query.get(activity_name) 
#     activity_description = request.json(['activity_description'])
#     # activity_points = Activity.query.get(activity_points)

#     # activity.activity_name = activity_name
#     activity.activity_description = activity_description
#     # activity.activity_points = activities_points

#     db.session.commit()

#     return activity_log_schema.jsonify(activity)

# # delete activity
# @login_required
# @activity.route('activity/<id>', methods=['DELETE'])
# def delete_activity(id):
#     activity = ActivityLog.query.get(id)
#     db.session.delete(activity)
#     db.session.commit()

#     return activity_log_schema.jsonify(activity)


