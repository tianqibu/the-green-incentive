import LogActivityImage from './log-activity.png'
import RewardsImage from './rewards.png'
import GardenImage from './garden.png'

import './DashboardImages.css'

const DashboardImages = () => {
    return (
        <div>
            <div className="img-container">
                <img src={LogActivityImage} alt='log activity'/>
                <img src={RewardsImage} alt='rewards'/>
            </div>
            <div className="large-img-container">
                <img src={GardenImage} className="garden-img" alt='garden'/>
            </div>
        </div>
    )
}

export default DashboardImages
