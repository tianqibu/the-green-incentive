<<<<<<< HEAD:frontend/src/pages/Resources.js
import SearchBar from "../components/SearchBar/SearchBar.js";
import EcosiaLogo from "../images/ecosia_logo.png";
import ResourceImages from "../components/ResourceImages/ResourceImages.js";
import "./Resources.css";
=======
import SearchBar from '../../components/SearchBar/SearchBar.js'
import EcosiaLogo from '../../images/ecosia_logo.png'
import ResourceImages from '../../components/ResourceImages/ResourceImages.js'
import './Resources.css'
>>>>>>> d65b2001e4eafb2f432db7fe7ea9693372de04a2:frontend/src/pages/Resources/Resources.js

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>RESOURCES</h1>
      <div className="ecosia">
        <img src={EcosiaLogo} alt="ecosia logo" className="ecosia-logo" />
        <SearchBar />
      </div>
      <ResourceImages />
    </div>
  );
};

export default Resources;
