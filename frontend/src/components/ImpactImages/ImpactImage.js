import { useState } from 'react'
import PropTypes from 'prop-types'

const ImpactImage = ({ item, imageNames }) => {
    const [toggle, setToggle] = useState(true)

    const onClick = (e) => {
        setToggle(!toggle)
    }
    
    return (
        <div>
            {toggle ? (
                <img src={process.env.PUBLIC_URL + `/impact_images/${item}.png`} alt={`${item}`} onClick={onClick}/>
                ) : (
                <img src={process.env.PUBLIC_URL + `/impact_images/${imageNames[item]}.png`} alt={`${imageNames[item]}`} onClick={onClick}/>
            )}
        </div>
    )
}

ImpactImage.propTypes = {
    item: PropTypes.string,
    i: PropTypes.number,
    imageNames: PropTypes.object,
}

export default ImpactImage
