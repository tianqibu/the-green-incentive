import Filler from './Filler'
import './ProgressBar.css'

const ProgressBar = ({percentage}) => {

    return (
        <div className="progress-bar">
            <Filler />
        </div>
    )
}

export default ProgressBar
