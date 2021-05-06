import Activities from '../../components/Activities/Activities.js'
import ViewLog from '../../components/Activities/ViewLog.js'
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
import './ActivityLog.css'
import { useState } from 'react'

const ActivityLog = () => {

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
                <Activities displayFlashMessage={displayFlashMessage} setFlash={setFlash}/>
                <ViewLog />
            </div>
        </>
    )
}

export default ActivityLog
