import Activities from '../../components/Activities/Activities.js'
import ViewLog from '../../components/Activities/ViewLog.js'
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
import './ActivityLog.css'
import { useState, useEffect } from 'react'

const ActivityLog = () => {

    const [activityLog, setActivityLog] = useState([])

    const [showFlash, setShowFlash] = useState(null);
    const [flash, setFlash] = useState({
      severity: '',
      message: '',                                  
    })

    const displayFlashMessage = () => {
        setShowFlash(true)
        setTimeout(() => {
        setShowFlash(false);
        }, 6000);
    }

    useEffect(() => {
        const getActivityLog = async () => {
            const res = await fetch('/api/activities/log', {
                method: 'GET',
            })
            const data = await res.json()
            setActivityLog(data)
            console.log('Activity log data: ', data)
        }
  
        getActivityLog()
    }, [])

    return (
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
            <div className='activity-container'>
                <h1>Activities</h1>
                <Activities displayFlashMessage={displayFlashMessage} setFlash={setFlash} setActivityLog={setActivityLog} activityLog={activityLog} />
                <ViewLog activityLog={activityLog} />
            </div>
        </>
    )
}

export default ActivityLog
