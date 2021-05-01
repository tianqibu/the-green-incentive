import Impact from '../images/impact.png'
import Resources from '../images/resources-yellow.png'
import AboutUs from '../components/AboutUs/AboutUs.js'

import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <AboutUs />
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
