import './Rewards.css'
import { useEffect, useState } from 'react'
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

import VouchersImage from '../../images/vouchers.png'
import FoodImage from '../../images/food_plants.png'
import EcoProducts from '../../images/eco_products.png'
import ActivitiesImage from '../../images/activities.png'
import RewardItem from '../../components/RewardItem/RewardItem'


const Rewards = () => {

    useEffect(() => {
        setRewards([])
        fetchUserDetails()
    }, [])

    const [ pointsBalance, setPointsBalance] = useState('')

    const [rewards, setRewards ] = useState([])

    const [showFlash, setShowFlash] = useState(null);
    const [flash, setFlash] = useState({
      severity: '',
      message: '',                                  
    })

    const displayFlashMessage = () => {
        setShowFlash(true)
        setTimeout(() => {
        setShowFlash(false);
        }, 6000);
        window.scrollTo(0, 0)
    }

    const updateUIPoints = (value) => {
        setPointsBalance(value)
    }

    const getRewards = async (value) => {

        const res = await fetch(`/api/rewards/${value}`, {
            method: 'GET'
        })

        const data = await res.json()

        setRewards(data)
    }

    const fetchUserDetails = async () => {
        const res = await fetch('/api/users/current', {
          method: 'GET',
        })

        const data = await res.json()

        setPointsBalance(data.points)

        return data
    }

    return (
        <div className='rewards-container'>
            { 
                showFlash
                ? (
                    <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                        <Alert className="alert" severity={flash.severity}>{flash.message}</Alert>
                    </Fade>
                    )
                : null 
            }
            <div className='title-container'>
                <h1>Rewards</h1>
                <p>Redeem your points here!<br></br>Click a category to discover what rewards are currently available.</p>
            </div>
            <p>Your current points balance: {pointsBalance}</p>
            <div className='img-parent-container'>
                <div className="img-child">
                    <button onClick={() => getRewards('Vouchers')}>
                        <img src={VouchersImage} alt="Vouchers"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => getRewards('FoodAndPlants')}>
                        <img src={FoodImage} alt="Food"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => getRewards('EcoProducts')}>
                        <img src={EcoProducts} alt="Eco Products"></img>
                    </button>
                </div>
                <div className="img-child">
                    <button onClick={() => getRewards('Activities')}>
                        <img src={ActivitiesImage} alt="ActivitiesImage"></img>
                    </button>
                </div>
            </div>

            { rewards.length > 0 &&
             (rewards.map(reward => (
                    <RewardItem name={reward.reward_name} points={reward.reward_points} id={reward.id} pointsBalance={pointsBalance} updateUIPoints={updateUIPoints} setFlash={setFlash} displayFlashMessage={displayFlashMessage}/>
                ))) 
            }

        </div>
    )
}

export default Rewards
