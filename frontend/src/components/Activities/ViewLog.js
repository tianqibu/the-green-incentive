import { useState, useEffect } from 'react'

const ViewLog = () => {
    const [activityLog, setActivityLog] = useState([])
    const [activity, setActivity] = useState([])

    useEffect(() => {
        const getActivityLog = async () => {
            const res = await fetch('/api/activities/log', {
                method: 'GET',
            })
            const data = await res.json()
            setActivityLog(data)
        }
  
        getActivityLog()
    }, [])

    const handleClick = () => {
        const getActivity = async (activity) => {
            const res = await fetch(`/api/activities/${activity.activity_id}`, {
                method: 'GET',
            })
            const data = await res.json()
            setActivity(data)
        }

        getActivity(activity)
    }

    return (
        <div>
            {activityLog.map(activity => ( getActivity(activity),
                <p key={activity.id} value={activity.id}>{(activity.date).substring(0,10)} | {activity.activity_description} | {getActivity(activity).activity_name}</p>
            ))}
        </div>
    )
}

export default ViewLog
