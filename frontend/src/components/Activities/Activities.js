import './Activities.css'
import { useState, useEffect } from 'react'

const Activities = ({ displayFlashMessage, setFlash, setActivityLog, activityLog }) => {
    const [activities, setActivities] = useState([])
    const [activity, setActivity] = useState([])
    const [activityDescription, setActivityDescription] = useState('')
    const [pointsBalance, setPointsBalance] = useState('')
    const [selected, setSelected] = useState('')

    let logActivity = {
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
        setSelected(e.target.value)
    }

    const handleDescChange = (e) => {
        setActivityDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addActivity()
        setActivity([])
        setActivityDescription([])
        updateAPIPoints()
        const newBalance = pointsBalance - (activity.activity_points)
        updateUIPoints(newBalance)
        setSelected('')
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

                // Show logged activity in UI
        
                var today = new Date();
                var date = today.getFullYear()+'-'+(((today.getMonth()+1) < 10) ?"0":"")+(today.getMonth()+1)+'-'+(((today.getDate()) < 10) ?"0":"")+today.getDate();

                logActivity = {
                    ...logActivity, 
                    date: date
                }

                setActivityLog([...activityLog, logActivity])

                // Display success message
                displayFlashMessage();
                setFlash({
                    message: `Activity logged.`,
                    severity:'success'
                })
                
            } else {

                // Display error message
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
                    <select onChange={handleChange} value={selected}>
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
