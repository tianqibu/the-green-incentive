import Title from '../../components/Title/Title'
import DashboardImages from '../../components/DashboardImages/DashboardImages'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [ userDetails, setUserDetails ] = useState({
        username: '',
        email: '',
        id: '',
        points: ''
    })

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await fetch('/api/users/current', {
              method: 'GET',
            })
    
            const data = await res.json()

            setUserDetails({
                username: data.username,
                points: data.points
            })
           
            return data
          }

          fetchUserDetails()
    
    }, [])

    const [percentage, setPercentage] = useState(60)

    return (
        <div className="dashboard-container">
            <div className="title">
                <Title user={userDetails.username}/>
            </div>
            <div className="points">
                <p className="bold">Points balance</p>
                <p>{userDetails.points}</p>
            </div>
            <div className="progress">
                <p className="bold">Daily goal progress</p>
                <ProgressBar percentage={percentage} />
            </div>
            <DashboardImages/>
        </div>
    )
}

export default Dashboard
