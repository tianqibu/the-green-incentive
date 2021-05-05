import { Link } from 'react-router-dom'

import Impact from '../../images/impact.png'

import RewardVouchersTitle from '../../components/RewardVouchers/RewardVouchersTitle.js'

import './SustainableGloss.css'

const SustainableGloss = () => {
    return (
    <div>
            <div className="home-container">
                <img className="product-img" src={Impact} alt=''></img>
                <div className="product-text">20% off sustainable gloss</div>
                <div className="product-info-text">some information on the product ...
                <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="checkout-form">
                    <form>
                        <label>
                        First Name<br/>
                        <input className="checkout-input-box" type="text" name="name" />
                        </label>
                        <label>
                        <br/>Last Name<br/>
                        <input className="checkout-input-box" type="text" name="name" />
                        </label>
                        <label>
                        <br/>Email<br/>
                        <input className="checkout-input-box" type="text" name="name" />
                        </label>
                        <br/><input className="checkout-button" type="submit" value="Checkout" />
                    </form>
                </div>
            </div>
            
    </div>
        
    )
}

export default SustainableGloss
