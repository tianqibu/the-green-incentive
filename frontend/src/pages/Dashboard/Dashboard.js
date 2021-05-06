import Title from '../../components/Title/Title'
import DashboardImages from '../../components/DashboardImages/DashboardImages'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

import './Dashboard.css'

const Dashboard = () => {

    const history = useHistory() 

    const [ userDetails, setUserDetails ] = useState({
        username: '',
        points: '',
        goal: '',
        percentage: ''
    })

    const [ showFlash, setShowFlash ] = useState(null);
    const [ flash, setFlash ] = useState({
      severity: '',
      message: '',                                  
    })

    const displayFlashMessage = () => {
        setShowFlash(true)
        setTimeout(() => {
        setShowFlash(false);
        }, 6000);
    }

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, goal: e })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userDetails.goal < userDetails.points) {
            displayFlashMessage();
            setFlash({
                message: `Error: Your new goal must be greater than your current points balance.`,
                severity:'error'
            })
        } else {

        const percentage = Math.round(userDetails.points/userDetails.goal * 100)

        await fetch(`/api/goals/${userDetails.goal}`, {
            method: 'GET',
          })

          setUserDetails({ ...userDetails, percentage: percentage })
        }
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await fetch('/api/users/current', {
              method: 'GET',
            })
    
            const data = await res.json()

            let percentage = Math.round(data.points/data.goal * 100)

            if (isNaN(percentage)) {
                percentage = 0
            }

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
        <> 
        {
            localStorage.getItem('loggedIn') 
            ? 
        <>
        { 
                showFlash
                ? (
                    <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                        <Alert className="alert" severity={flash.severity}>{flash.message}</Alert>
                    </Fade>
                    )
                : null 
        }
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
                    {/* <p>Current goal: {userDetails.goal}</p> */}
                    <ProgressBar percentage={userDetails.percentage}/>
                    <div className="set-goal">
                        <form onSubmit={handleSubmit}>
                            <div className="center-container">
                                <input
                                    type="number"
                                    name="number"
                                    placeholder={userDetails.goal}
                                    onChange={(e) => handleChange(e.target.value)}
                                />
                                <input type="submit" value="Set goal" />
                            </div>
                        </form>
                    </div>
                </div> 
                <DashboardImages/>
            </div>
        </>
        : (history.push('/sign-in')) 
        }
        </>
    )
}

export default Dashboard
