import PropTypes from 'prop-types'
import './Title.css'

const Title = ({ user }) => {
    return (
            <h1>Hi, {user}</h1>
    )
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title