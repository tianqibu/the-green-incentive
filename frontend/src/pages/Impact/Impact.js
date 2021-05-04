import ImpactImages from '../../components/ImpactImages/ImpactImages.js'
import './Impact.css'

const Impact = () => {
    return (
        <div className='impact-container'>
            <div className='impact-header'>
                <h1>SEE YOUR IMPACT</h1>
                <p>Click to see what you can save per year by making these sustainable changes:</p>
            </div>
            <ImpactImages />
        </div>
    )
}

export default Impact
