import React from 'react'
import { Link } from 'react-router-dom'

import Impact from '../images/impact.png'

import RewardMainTitle from '../components/RewardMainTitle/RewardMainTitle.js'

import './RewardMain.css'

const RewardMain = () => {
    return (
        <div>
            <RewardMainTitle />
            <div className="home-container">
            <div className="flex-parent-rm">
                    <div className="flex-child-rm">
                        <Link to='/RewardVouchers'>
                            <img className="category-img" src={Impact} alt=''></img>
                            <div className="category-text">Exclusive Offers</div>
                        </Link>
                    </div>
                    <div className="flex-child-rm">
                        <Link to='#'>
                            <img className="category-img" src={Impact} alt=''></img>
                            <div className="category-text">Fun Activities</div>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
        
    )
}

export default RewardMain
