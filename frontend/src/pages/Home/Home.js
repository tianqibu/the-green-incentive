import { Link } from 'react-router-dom'

import Impact from '../../images/impact.png'
import Resources from '../../images/resources-yellow.png'

import AboutUs from '../../components/AboutUs/AboutUs.js'

import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <AboutUs />
            <div className="flex-parent">
                <div className="flex-child">
                    <Link to='/impact'>
                        <img 
                            src={Impact} 
                            className="impact" 
                            alt="See Your Impact"
                        ></img>
                    </Link>
                </div>
                <div className="flex-child">
                    <Link to='/resources'>
                        <img 
                            src={Resources} 
                            className="resources" 
                            alt="Resources"
                        ></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
