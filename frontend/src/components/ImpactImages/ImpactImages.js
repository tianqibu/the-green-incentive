import ImpactImage from './ImpactImage.js'
import './ImpactImages.css'
import imageNames from './ImageNames.json'

const ImpactImages = () => {

    console.log(imageNames)

    return (
        <div className='impact-grid'>
            {Object.keys(imageNames).map((key, i) => (
                <ImpactImage key={i} item={key} imageNames={imageNames} />
            ))}
        </div>
    )
}

export default ImpactImages
