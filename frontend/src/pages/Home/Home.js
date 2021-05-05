import { Link } from "react-router-dom";

<<<<<<< HEAD:frontend/src/pages/Home.js
import Impact from "../images/impact.png";
import Resources from "../images/resources-yellow.png";

import AboutUs from "../components/AboutUs/AboutUs.js";
=======
import Impact from '../../images/impact.png'
import Resources from '../../images/resources-yellow.png'

import AboutUs from '../../components/AboutUs/AboutUs.js'
>>>>>>> d65b2001e4eafb2f432db7fe7ea9693372de04a2:frontend/src/pages/Home/Home.js

import "./Home.css";
import ImageSlider from "../components/Carousel/ImageSlider";
import { SliderData } from "../components/Carousel/SliderData";

const Home = () => {
  return (
    <div className="home-container">
      <AboutUs />
      <div className="flex-parent">
        <div className="flex-child">
          <Link to="/impact">
            <img src={Impact} className="impact" alt="See Your Impact"></img>
          </Link>
        </div>
        <div className="flex-child">
          <Link to="/resources">
            <img src={Resources} className="resources" alt="Resources"></img>
          </Link>
        </div>
      </div>
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default Home;
