import Filler from './Filler'
import './ProgressBar.css'

const ProgressBar = ({ percentage }) => {

    return (
        <div className="progress-bar">
            <Filler percentage={percentage}/>
        </div>
    )
}

export default ProgressBar
