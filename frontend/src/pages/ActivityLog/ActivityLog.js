import Activities from '../../components/Activities/Activities.js'
import ViewLog from '../../components/Activities/ViewLog.js'

import './ActivityLog.css'

const ActivityLog = () => {

    return (
        <div className='activity-container'>
            <h1>Activities</h1>
            <Activities />
            <ViewLog />
        </div>
    )
}

export default ActivityLog
