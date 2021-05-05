import Title from '../../components/Title/Title'
import DashboardImages from '../../components/DashboardImages/DashboardImages'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [ userDetails, setUserDetails ] = useState({
        username: '',
        points: ''
    })

    const [percentage, setPercentage] = useState('')
    const [goal, setGoal] = useState('')

    const handleChange = (e) => {
        setGoal(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const calc_percentage = userDetails.points/goal * 100
        setPercentage(calc_percentage)
    }

    

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
                <ProgressBar percentage={percentage} />
            </div>
            <DashboardImages/>
        </div>
    )
}

export default Dashboard
