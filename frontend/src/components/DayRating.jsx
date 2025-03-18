import React from "react";
import "../App.css";

export default function DayRating({ day, handleChange }) {
  const ratingOptions = ["Productive", "Challenging", "Relaxing", "Stressful"];

  return (
    <div className="step-container" role="group" aria-label="Day selection">
      <label>How was your day?</label>

      <div className="radio-container">
        {ratingOptions.map((option) => (
          <label
            key={option}
            className={`radio-button ${day === option ? "active" : ""}`}
            htmlFor={`day-${option}`}
          >
            <input
              type="radio"
              id={`day-${option}`}
              name="day"
              value={option}
              checked={day === option}
              onChange={() => handleChange("day", option)}
              autoComplete="off"
            />

            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
