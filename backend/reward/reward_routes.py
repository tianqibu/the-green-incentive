from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.extensions import db
from models import RewardLog, RewardLogSchema, Reward, RewardSchema

reward = Blueprint('reward', __name__)

reward_log_schema = RewardLogSchema()
rewards_log_schema = RewardLogSchema(many=True)

reward_schema = RewardSchema()
rewards_schema = RewardSchema(many=True)

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


