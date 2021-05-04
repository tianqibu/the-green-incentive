import './Rewards.css'
import { useEffect, useState } from 'react'

import VouchersImage from '../images/vouchers.png'
import FoodImage from '../images/food_plants.png'
import EcoProducts from '../images/eco_products.png'
import ActivitiesImage from '../images/activities.png'
import RewardItem from '../components/RewardItem/RewardItem'


const Rewards = () => {

    useEffect(() => {
        setRewards([])
    }, [])

    const [rewards, setRewards ] = useState([])

    const handleClick = async (value) => {

        const res = await fetch(`/api/rewards/${value}`, {
            method: 'GET'
        })

        const data = await res.json()

        setRewards(data)
    }

    return (
        <div className='rewards-container'>
            <div className='title-container'>
                <h1>Rewards</h1>
                <p>Redeem your points here!<br></br>Click a category to discover what rewards are currently available.</p>
            </div>
            <div className='img-parent-container'>
                <div className="img-child">
                    <button onClick={() => handleClick('Vouchers')}>
                        <img src={VouchersImage} alt="Vouchers"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => handleClick('FoodAndPlants')}>
                        <img src={FoodImage} alt="Food"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => handleClick('EcoProducts')}>
                        <img src={EcoProducts} alt="Eco Products"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => handleClick('Activities')}>
                        <img src={ActivitiesImage} alt="ActivitiesImage"></img>
                    </button>
                </div>
            </div>

            { rewards.length > 0 && 
                (rewards.map(reward => (
                    <RewardItem name={reward.reward_name} points={reward.reward_points} id={reward.id}/>
                ))) 
            }

        </div>
    )
}

export default Rewards
