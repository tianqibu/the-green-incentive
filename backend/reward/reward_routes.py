from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import RewardLog, RewardLogSchema, Reward, RewardSchema

reward = Blueprint('reward', __name__)

reward_log_schema = RewardLogSchema()
rewards_log_schema = RewardLogSchema(many=True)

reward_schema = RewardSchema()
rewards_schema = RewardSchema(many=True)


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


####################### TEST #######################

@reward.route('/test', methods=['GET', 'POST'])
def test_rewards():
    if request.method == 'POST':
        req_data = request.get_json()
        print(req_data['username'])
        return 'JSON posted'
    if request.method == 'GET':
        return jsonify({
            'testing': 'hello'
            })

####################### REWARDS LOG (USER) #######################

@reward.route('/log', methods=['GET'])
def get_reward_log():
    '''Returns JSON data of all rewards logged by user'''
    # need user ID
    all_rewards = RewardLog.query.all()
    result = rewards_log_schema.dump(all_rewards)

    return jsonify(result)

@login_required
@reward.route('/log/add', methods=['POST'])
def add_reward_log_entry():
    '''Logs a reward the user has redeemed'''

    # get data from request body
    req_data = request.get_json()
    user_id = current_user.id
    reward_id = req_data['reward_id']

    # add entry to RewardLog table
    new_reward_log_entry = RewardLog(reward_id=reward_id, user_id=user_id)
    db.session.add(new_reward_log_entry)
    db.session.commit()

####################### REWARDS #######################

@reward.route('/', methods=['GET'])
def all_rewards():
    '''Returns JSON data of all rewards'''
    all_rewards = Reward.query.all()
    result = rewards_schema.dump(all_rewards)

    return jsonify(result)
    
@reward.route('/<reward_category>', methods=['GET'])
def category_rewards(reward_category):
    ''' 
    Returns JSON data of rewards for a specific category

    ----- Endpoints -----
    .../api/rewards/Vouchers 
    .../api/rewards/Activities
    .../api/rewards/EcoProducts
    .../api/rewards/FoodAndPlants

    '''
    all_rewards = Reward.query.filter_by(reward_category=reward_category)
    result = rewards_schema.dump(all_rewards)

    return jsonify(result)

# # get single reward
# @reward.route('/reward/<id>', methods=['GET'])
# def get_reward(id):
#     reward = RewardLog.query.get(id)

#     return reward_log_schema.jsonify(reward)

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

# # delete reward
# @login_required
# @reward.route('reward/<id>', methods=['DELETE'])
# def delete_reward(id):
#     reward = RewardLog.query.get(id)
#     db.session.delete(reward)
#     db.session.commit()

#     return reward_log_schema.jsonify(reward)


