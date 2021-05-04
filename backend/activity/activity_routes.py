from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import ActivityLog, ActivityLogSchema

activity = Blueprint('activity', __name__)

activity_log_schema = ActivityLogSchema()
activities_log_schema = ActivityLogSchema(many=True)

# add activity
@login_required
@activity.route('/activities', methods=['GET', 'POST'])
def add_activity():
    # activity_name = ActivityLog.query.get(activity.activity_name) ?????
    activity_description = request.json['activity_description']
    # activity_points = ActivityLog.query.get(activity.activity_points) 

    new_activity = ActivityLog(activity_description)#, activity_points, activity_name) 
    # ^ use activity log model here and get points and name from db
    db.session.add(new_activity)
    db.session.commit()

    return activity_log_schema.jsonify(new_activity)

# get all activities for user. might need user id?
@login_required
@activity.route('/activites', methods=['GET'])
def get_activities(id):
    all_activities = ActivityLog.query.all()
    result = activities_log_schema.dump(all_activities)

    return jsonify(result.data)

# get single activity
@login_required
@activity.route('/activity/<id>', methods=['GET'])
def get_activity(id):
    activity = ActivityLog.query.get(id)

    return activity_log_schema.jsonify(activity)

# update activity
@login_required
@activity.route('/activity/<id>', methods=['PUT'])
def update_activity(id):
    activity = ActivityLog.query.get(id)

    # activity_name = Activity.query.get(activity_name) 
    activity_description = request.json(['activity_description'])
    # activity_points = Activity.query.get(activity_points)

    # activity.activity_name = activity_name
    activity.activity_description = activity_description
    # activity.activity_points = activities_points

    db.session.commit()

    return activity_log_schema.jsonify(activity)

# delete activity
@login_required
@activity.route('activity/<id>', methods=['DELETE'])
def delete_activity(id):
    activity = ActivityLog.query.get(id)
    db.session.delete(activity)
    db.session.commit()

    return activity_log_schema.jsonify(activity)


