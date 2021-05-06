import { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

const ActivityName = ({ id }) => {
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
        <p>{activityItem.activity_name}</p>
    )
}

ActivityName.propTypes = {
    id: Proptypes.number
}

export default ActivityName
