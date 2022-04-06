import React, { useEffect, useState } from "react";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.scss";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
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
            <div className="image">
              <img className="slide-image" src={slide.urls} alt="" />
            </div>
            <div className="slide-content">
              <div className="text-wrapper">
                <Arrows
                  prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                  }
                  nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                  }
                />
                <h1>Reviews</h1>
                <hr />
                <h2 className="slide-title">{slide.title}</h2>
                <span className="quote">&#8221;</span>
                <h3 className="slide-text">{slide.description}</h3>
                <h4 className="slide-reviewer">
                  <span>-</span> {slide.reviewer}
                </h4>
                <Dots
                  activeIndex={activeIndex}
                  sliderImage={sliderImage}
                  onclick={(activeIndex) => setActiveIndex(activeIndex)}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Slider;
