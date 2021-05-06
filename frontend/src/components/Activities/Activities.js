import './Activities.css'
import { useState, useEffect } from 'react'

const Activities = ({ displayFlashMessage, setFlash }) => {
    const [activities, setActivities] = useState([])
    const [activity, setActivity] = useState([])
    const [activityDescription, setActivityDescription] = useState('')
    const [pointsBalance, setPointsBalance] = useState('')

    const logActivity = {
        'activity_id': activity.id,
        'activity_description': activityDescription
    }

    useEffect(() => {
        const getActivities = async () => {
            const res = await fetch('/api/activities', {
                method: 'GET',
            })
            const data = await res.json()
            setActivities(data)
        }
  
        getActivities()
        fetchUserPoints()
    }, [])

    const handleChange = (e) => {
        const getActivity = async () => {
            const res = await fetch(`/api/activities/${e.target.value}`, {
                method: 'GET',
            })
            const data = await res.json()
            setActivity(data)
        }

        getActivity()
    }

    const handleDescChange = (e) => {
        setActivityDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addActivity()
        updateAPIPoints()
        const newBalance = pointsBalance - (activity.activity_points)
        updateUIPoints(newBalance)
    }

    const addActivity = async () => {
        if (activity <= 0) {
            displayFlashMessage();
            setFlash({
                message: `Error: Please select an activity.`,
                severity:'error'
            })
        } else if (activityDescription.length === 0) {
            displayFlashMessage();
            setFlash({
                message: `Error: Please input an activity description.`,
                severity:'error'
            })
        } else {
            const res = await fetch('/api/activities/log/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(logActivity),
            })
            if (res.status === 200) {
                window.location.reload()
                displayFlashMessage();
                setFlash({
                    message: `Activity logged.`,
                    severity:'success'
                })
                
            } else {
                alert('Unsuccessful.')
                displayFlashMessage();
                setFlash({
                    message: `Error: Unsuccessful.`,
                    severity:'error'
                })
            }
        }
    }

    const fetchUserPoints = async () => {
        const res = await fetch('/api/users/current', {
          method: 'GET',
        })

        const data = await res.json()

        setPointsBalance(data.points)
    }

    const updateAPIPoints = async () => {
        await fetch(`/api/points/add/${activity.activity_points}`, {
            method: 'GET'
        })
    }

    const updateUIPoints = async (value) => {
        setPointsBalance(value)
    }

    return (
        <div className='form-container'>
            <form>
                <div className='select'>
                    <label>Select an activity: </label>
                    <select onChange={handleChange}>
                        <option value='-1'>Select an activity:</option>
                        {activities.map(activity => (
                            <option key={activity.id} value={activity.id}>{activity.activity_name}</option>
                        ))}
                    </select>
                    {activity.id > 0 && <div>
                        <p>{activity.activity_example}</p>
                        <p>Points: {activity.activity_points}</p>
                    </div>}
                </div>

                <div className='input'>
                    <label>Input description: </label>
                    <input type='text' placeholder='Activity description' value={activityDescription} onChange={handleDescChange}/>
                </div>
                
                <button className='btn' type='submit' onClick={handleSubmit}>Log Activity</button>
            </form>
        </div>
    )
}

export default Activities
