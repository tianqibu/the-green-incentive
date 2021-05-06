import Title from '../../components/Title/Title'
import DashboardImages from '../../components/DashboardImages/DashboardImages'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [ userDetails, setUserDetails ] = useState({
        username: '',
        points: '',
        goal: '',
        percentage: ''
    })

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, goal: e })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userDetails.goal < userDetails.points) {
            alert('Goal must be greater than your current points.')
        }

        const percentage = Math.round(userDetails.points/userDetails.goal * 100)

        await fetch(`/api/goals/${userDetails.goal}`, {
            method: 'GET',
          })

          setUserDetails({ ...userDetails, percentage: percentage })
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await fetch('/api/users/current', {
              method: 'GET',
            })
    
            const data = await res.json()

            const percentage = Math.round(data.points/data.goal * 100)

            setUserDetails({
                username: data.username,
                points: data.points,
                goal: data.goal,
                percentage: percentage
            })
           
            return data
          }

          fetchUserDetails()

    
    }, [])

    return (
        <div className="dashboard-container">
            <div className="title">
                <Title user={userDetails.username}/>
            </div>
            <div className="points">
                <p className="bold">Points balance</p>
                <p>{userDetails.points}</p>
                <p className="bold">Goal progress</p>
            </div>
            <div className="progress">
                <p>Current goal: {userDetails.goal}</p>
                <ProgressBar percentage={userDetails.percentage}/>
                <div className="set-goal">
                    <form onSubmit={handleSubmit}>
                        <div className="center-container">
                            <input
                                type="number"
                                name="number"
                                placeholder="Enter number"
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            <input type="submit" value="Set goal" />
                        </div>
                    </form>
                </div>
            </div> 
            <DashboardImages/>
        </div>
    )
}

export default Dashboard
