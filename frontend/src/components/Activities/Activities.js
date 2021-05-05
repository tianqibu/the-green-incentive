import { useState, useEffect } from 'react'

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [activity, setActivity] = useState([])
    const [activityDescription, setActivityDescription] = useState('')

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
        setActivity([])
        setActivityDescription('')
    }

    const addActivity = async () => {
        if (activity <= 0) {
            alert('Please select an activity.')
        } else if (activityDescription.length === 0) {
            alert('Please input an activity description.')
        } else {
            const res = await fetch('/api/activities/log/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(logActivity),
            })
            if (res.status === 200) {
                alert('Activity logged.')
            } else {
                alert('Unsuccessful.')
            }
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>Select an activity:</label>
                    <select onChange={handleChange}>
                        <option value='-1' defaultSelected='true' >Select an activity:</option>
                        {activities.map(activity => (
                            <option key={activity.id} value={activity.id}>{activity.activity_name}</option>
                        ))}
                    </select>
                    {activity.id > 0 && <div>
                        <p>{activity.activity_example}</p>
                        <p>Points: {activity.activity_points}</p>
                    </div>}
                </div>

                <div>
                    <label>Input activity description:</label>
                    <input type='text' placeholder='Activity description' value={activityDescription} onChange={handleDescChange}/>
                </div>
                
                <button type='submit' onClick={handleSubmit}>Log Activity</button>
            </form>
        </div>
    )
}

export default Activities
