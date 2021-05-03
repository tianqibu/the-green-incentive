from flask import Blueprint, jsonify, request
from flask_login import login_required
from app import db
from models import Reward, RewardSchema

reward = Blueprint('reward', __name__)

reward_schema = RewardSchema(strict=True)
rewards_schema = RewardSchema(many=True, strict=True)

# add reward
@login_required
@reward.route('/rewards', methods=['GET', 'POST'])
def add_reward():
    reward_name = request.json['reward_name']
    reward_description = request.json['reward_description']
    # reward_points = Reward.query.get(reward_points) 

    new_reward = Reward(reward_name, reward_description)#, reward_points) 
    # ^ use reward log model here and get points from db
    db.session.add(new_reward)
    db.session.commit()

    return reward_schema.jsonify(new_reward)

# get all rewards for user. might need user id?
@login_required
@reward.route('/activites', methods=['GET'])
def get_rewards(id):
    all_rewards = Reward.query.all()
    result = rewards_schema.dump(all_rewards)

    return jsonify(result.data)

# get single reward
@login_required
@reward.route('/reward/<id>', methods=['GET'])
def get_reward(id):
    reward = Reward.query.get(id)

    return reward_schema.jsonify(reward)

# update reward
@login_required
@reward.route('/reward/<id>', methods=['PUT'])
def update_reward(id):
    reward = Reward.query.get(id)

    reward_name = request.json(['reward_name'])
    reward_description = request.json(['reward_description'])
    # reward_points = Reward.query.get(reward_points)

    reward.reward_name = reward_name
    reward.reward_description = reward_description
    # reward.reward_points = rewards_points

    db.session.commit()

    return reward_schema.jsonify(reward)

# delete reward
@login_required
@reward.route('reward/<id>', methods=['DELETE'])
def delete_reward(id):
    reward = Reward.query.get(id)
    db.session.delete(reward)
    db.session.commit()

    return reward_schema.jsonify(reward)


