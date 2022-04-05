import React, { useEffect, useState } from "react";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <section>
        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.urls} alt="" />
            <div className="slide-content">
              <Arrows
                prevSlide={() =>
                  setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                  setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
              />
              <h2 className="slide-title">{slide.title}</h2>
              <h3 className="slide-text">{slide.description}</h3>
              <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Slider;
