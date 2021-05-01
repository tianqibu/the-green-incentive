import Impact from '../images/impact.png'
import Resources from '../images/resources-yellow.png'

import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="about-us">
                <h1>SUSTAINABLE REWARDS FOR GREEN LIVING</h1>
                <p>A rewards program to help you become more sustainable and minimise your impact on the world. Earn points based on eco-friendly actions you've undertaken to spend on real rewards including vouchers and 4-night retreats.</p>
                <button>Sign Up</button>
            </div>
            <img 
                src={Impact} 
                className="impact" 
                alt="See Your Impact"
            ></img>
            <img 
                src={Resources} 
                className="resources" 
                alt="Resources"
            ></img>
        </div>
    )
}

export default Home
