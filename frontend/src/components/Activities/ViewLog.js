import { useState, useEffect } from 'react'

const ViewLog = () => {
    const [activityLog, setActivityLog] = useState([])
    //const [activity, setActivity] = useState([])

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

    return (
        <div>
            {activityLog.map(activity => (
                <p key={activity.id} value={activity.id}>{(activity.date).substring(0,10)} | {activity.activity_description}|</p>
            ))}
        </div>
    )
}

export default ViewLog
