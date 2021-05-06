import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./ImageSlider.css"; 
import { FiArrowRightCircle, FiArrowLeftCircle } 
from "react-icons/fi"


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
 
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 :current +1)  
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1 )
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  

  return (
    <div className='carousel-container'>
      <h1 className="grabs"> Rewards up for grabs!</h1>
  
        <section className="slider">
            
          <FiArrowLeftCircle className="left-arrow" onClick={prevSlide} />

          <FiArrowRightCircle className="right-arrow" onClick={nextSlide} />
          
          {SliderData.map((slide, index) => {
        return (
          <div 
            className={index === current ? "slide active" : "slide"} 
            key={index}
          >
            {index === current && (
                <img src={slide.image} alt="rewards carousel" className="featured" />
            )}
          </div>
          );
          })}
            </section>
            </div>
            );
          };

export default ImageSlider;
