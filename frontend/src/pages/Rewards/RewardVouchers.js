import React from 'react'
import { Link } from 'react-router-dom'

import Impact from '../images/impact.png'

import RewardVouchersTitle from '../components/RewardVouchers/RewardVouchersTitle.js'

import './RewardMain.css'

const RewardVouchers = () => {
    return (
        <div>
            <RewardVouchersTitle />
            <div className="home-container">
            <div className="flex-parent-rm">
                    <div className="flex-child-rm">
                        <Link to='/SustainableGloss'>
                            <img className="category-img" src={Impact} alt=''></img>
                            <div className="category-text">20% off sustainable gloss</div>
                        </Link>
                    </div>
                    <div className="flex-child-rm">
                        <Link to='#'>
                            <img className="category-img" src={Impact} alt='' text-decoration="Exclusive Offers"></img>
                            <div className="category-text">30% off juicer from tefal</div>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
        
    )
}

export default RewardVouchers
