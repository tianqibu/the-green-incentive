import Title from '../components/Title/Title'
import DashboardImages from '../components/DashboardImages/DashboardImages'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import { useState } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [percentage, setPercentage] = useState(60)

    return (
        <div className="dashboard-container">
            <div className="title">
                <Title title="Hi, User"/>
            </div>
            <div className="points">
                <p className="bold">Points balance</p>
                <p>1600</p>
            </div>
            <div className="progress">
                <p className="bold">Daily goal progress</p>
                <ProgressBar percentage={percentage} />
            </div>
            <DashboardImages />
        </div>
    )
}

export default Dashboard
