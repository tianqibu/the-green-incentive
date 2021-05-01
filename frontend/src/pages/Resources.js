import SearchBar from '../components/SearchBar/SearchBar.js'
import EcosiaLogo from '../images/ecosia_logo.png'
import './Resources.css'

const Resources = () => {
    return (
        <div className='resources-container'>
            <h1>RESOURCES</h1>
            <div className='ecosia'>
                <img src={EcosiaLogo} alt='ecosia logo' className='ecosia-logo'/>
                <SearchBar />
            </div>
        </div>
    )
}

export default Resources
