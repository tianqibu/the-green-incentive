import './AboutUs.css'

import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="about-us">
                <h1>SUSTAINABLE REWARDS FOR GREEN LIVING</h1>
                <p>A rewards program to help you become more sustainable and minimise your impact on the world. Earn points based on eco-friendly actions you've undertaken to spend on real rewards including vouchers and 4-night retreats.</p>
                <Link to="/sign-up"><button>Sign Up</button></Link>
        </div>
    )
}

export default AboutUs
