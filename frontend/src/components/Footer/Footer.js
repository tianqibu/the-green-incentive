import './Footer.css'
import LogoImage from '../../images/logo-icon.png'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    let iconStyles = { color: "white", fontSize: "2em", margin: "0.5em"};
    
    return (
        <div className="footer-container parent">
            <div className="left child">
                <div className="links-container">
                </div>
            </div>
            <div className="center child">
                <div className="media-icons">
                    <a href="/"><FaTwitter style={iconStyles} /></a>
                    <a href="/"><FaFacebook style={iconStyles} /></a>
                    <a href="/"><FaInstagram style={iconStyles} /></a>
                </div>
                <p>&#169; The Green Incentive</p>
            </div>
            <div className="right child">
                <img src={LogoImage} alt="Logo icon of a tree"></img>
            </div>
        </div>
    )
}

export default Footer
