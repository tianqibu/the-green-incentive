from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import RewardLog, RewardLogSchema

reward = Blueprint('reward', __name__)

reward_log_schema = RewardLogSchema()
rewards_log_schema = RewardLogSchema(many=True)

# add reward
# @login_required
# @reward.route('/rewards', methods=['GET', 'POST'])
# def add_reward():
    # reward_name = request.json['reward_name']
    # reward_description = request.json['reward_description']
    # reward_points = Reward.query.get(reward_points) 

    # new_reward = RewardLog(reward_name, reward_description, reward_points) 
    # ^ use reward log model here and get points from db
    # db.session.add(new_reward)
    # db.session.commit()

    # return reward_log_schema.jsonify(new_reward)

# get all rewards for user. might need user id?
@login_required
@reward.route('/rewards', methods=['GET'])
def get_rewards():
    all_rewards = RewardLog.query.all()
    result = rewards_log_schema.dump(all_rewards)

    return jsonify(result.data)

# get single reward
@login_required
@reward.route('/reward/<id>', methods=['GET'])
def get_reward(id):
    reward = RewardLog.query.get(id)

    return reward_log_schema.jsonify(reward)

# update reward
# @login_required
# @reward.route('/reward/<id>', methods=['PUT'])
# def update_reward(id):
#     reward = RewardLog.query.get(id)

#     reward_name = request.json(['reward_name'])
#     reward_description = request.json(['reward_description'])
#     reward_points = Reward.query.get(reward_points)

#     reward.reward_name = reward_name
#     reward.reward_description = reward_description
#     reward.reward_points = rewards_points

#     db.session.commit()

#     return reward_log_schema.jsonify(reward)

# delete reward
@login_required
@reward.route('reward/<id>', methods=['DELETE'])
def delete_reward(id):
    reward = RewardLog.query.get(id)
    db.session.delete(reward)
    db.session.commit()

    return reward_log_schema.jsonify(reward)


