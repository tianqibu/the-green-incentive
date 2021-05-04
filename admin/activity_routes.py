from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import Activity, ActivitySchema

activity = Blueprint('activity', __name__)

activity_schema = ActivitySchema(strict=True)
activities_schema = ActivitySchema(many=True, strict=True)

# /admin for routes?

# add activity
@login_required
@activity.route('/activities', methods=['GET', 'POST'])
def add_activity():
    activity_name = request.json['activity_name']
    activity_example = request.json['activity_example']
    activity_points = request.json['activity_points'] 

    new_activity = Activity(activity_name, activity_example, activity_points) 

    db.session.add(new_activity)
    db.session.commit()

    return activity_schema.jsonify(new_activity)

# get all activities
@login_required
@activity.route('/activites', methods=['GET'])
def get_activities():
    all_activities = Activity.query.all()
    result = activities_schema.dump(all_activities)

    return jsonify(result.data)

# get single activity
@login_required
@activity.route('/activity/<id>', methods=['GET'])
def get_activity(id):
    activity = Activity.query.get(id)

    return activity_schema.jsonify(activity)

# update activity
@login_required
@activity.route('/activity/<id>', methods=['PUT'])
def update_activity(id):
    activity = Activity.query.get(id)

    activity_name = request.json(['activity_name'])
    activity_example = request.json(['activity_example'])
    activity_points = request.json['activity_points']

    activity.activity_name = activity_name
    activity.activity_example = activity_example
    activity.activity_points = activities_points

    db.session.commit()

    return activity_schema.jsonify(activity)

# delete activity
@login_required
@activity.route('activity/<id>', methods=['DELETE'])
def delete_activity(id):
    activity = Activity.query.get(id)
    db.session.delete(activity)
    db.session.commit()

    return activity_schema.jsonify(activity)


