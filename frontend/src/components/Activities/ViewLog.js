import ActivityName from './ActivityName.js'
import ActivityPoints from './ActivityPoints.js'
import './Activities.css'
import { useState } from 'react'

const ViewLog = ({ activityLog }) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <button className='btn' type='submit' onClick={handleToggle}>View Log</button>
            {toggle & activityLog.length !== 0 ?
                <table className='log-table'>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Activity</th>
                            <th>Description</th>
                            <th>Points</th>
                        </tr>
                        {activityLog.map(activity => (
                            <tr>
                                <td key={activity.id}><p>{activity.date && activity.date.substring(0,10)}</p></td>
                                <td key={activity.id}><ActivityName id={activity.activity_id} /></td>
                                <td key={activity.id}><p>{activity.activity_description}</p></td>
                                <td key={activity.id}><ActivityPoints id={activity.activity_id} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
                : toggle && <p>You have no activities in your log.</p>
                }
        </div>
    )
}

export default ViewLog
