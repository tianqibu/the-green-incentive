import LogActivityImage from './log-activity.png'
import RewardsImage from './rewards.png'
import GardenImage from './garden.png'

import './DashboardImages.css'

const DashboardImages = () => {
    return (
        <div>
            <div className="img-container">
                <img src={LogActivityImage}></img>
                <img src={RewardsImage}></img>
            </div>
            <div className="large-img-container">
                <img src={GardenImage} className="garden-img"></img>
            </div>
        </div>
    )
}

export default DashboardImages
