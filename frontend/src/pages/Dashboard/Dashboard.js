import Title from '../../components/Title/Title'
import DashboardImages from '../../components/DashboardImages/DashboardImages'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [ userDetails, setUserDetails ] = useState({
        username: '',
        points: '',
        goal: ''
    })

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, goal: e })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const percentage = Math.round(userDetails.points/userDetails.goal * 100)
        localStorage.setItem('percentage', percentage);

        await fetch(`/api/goals/${userDetails.goal}`, {
            method: 'GET',
          })
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await fetch('/api/users/current', {
              method: 'GET',
            })
    
            const data = await res.json()

            setUserDetails({
                username: data.username,
                points: data.points,
                goal: data.goal
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
            </div>
        
            <div className="set-goal">
                <p className="bold">Goal progress</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="number"
                        placeholder="Enter number"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <input type="submit" value="Set goal" />
            </form>
            </div>
            <div className="progress">
                <ProgressBar/>
            </div> 
            <DashboardImages/>
        </div>
    )
}

export default Dashboard
