import React from "react";
import "../App.css";

export default function RelaxSlider({ relax, handleChange }) {
  return (
    <div className="step-container ">
      <label className="text-questions " htmlFor="relax-slider">
        How relaxed do you feel at the moment?
      </label>
      <div className="slider-container">
        <span className="slider-label">0</span>
        <input
          type="range"
          className="slider"
          id="relax-slider"
          name="relaxation"
          min="0"
          max="10"
          value={relax}
          onChange={(e) => handleChange("relaxation", Number(e.target.value))}
        />
        <span className="slider-label">10</span>
      </div>
    </div>
  );
}