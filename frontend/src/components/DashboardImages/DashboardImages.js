import LogActivityImage from '../../images/log-activity.png'
import RewardsImage from '../../images/rewards.png'
import GardenImage from '../../images//garden.png'

import { Link } from 'react-router-dom'

import './DashboardImages.css'

const DashboardImages = () => {
    return (
        <div>
            <div className="img-container">
                <img src={LogActivityImage} alt='log activity'/>
                <Link to="/rewards">
                    <img src={RewardsImage} alt='rewards'/>
                </Link>
            </div>
            <div className="large-img-container">
                <Link to="/garden">
                    <img src={GardenImage} className="garden-img" alt='garden'/>
                </Link>
            </div>
        </div>
    )
}

export default DashboardImages
