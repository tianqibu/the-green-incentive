import { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

const ActivityPoints = ({ id }) => {
    const [activityItem, setActivityItem] = useState([])

    useEffect(() => {
        const getActivityItem = async () => {
            const res = await fetch(`/api/activities/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            setActivityItem(data)
        }
  
        getActivityItem()
    }, [id])

    return (
        <p>{activityItem.activity_points}</p>
    )
}

ActivityPoints.propTypes = {
    id: Proptypes.number
}

export default ActivityPoints
