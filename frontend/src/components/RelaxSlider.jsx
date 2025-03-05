import React from "react";
import "../App.css";

export default function RelaxSlider({ relax, handleChange, setStep }) {

    return (
      <div className="step-container ">
        <label className="text-questions " htmlFor="relax-slider">
          How relaxed do you feel at the moment?
        </label>
        <input
          type="range"
          className="form-range"
          id="relax-slider"
          name="relaxation"
          min="0"
          max="10"
          value={relax}
          onChange={(e) => handleChange("relaxation", Number(e.target.value))}
        />
        <button
          className="btn-primary"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next Question
        </button>
      </div>
    );
}