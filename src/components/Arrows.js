import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#9664;
      </span>
      <span className="next" onClick={nextSlide}>
        &#9654;
      </span>
    </div>
  );
}

export default Arrows;
