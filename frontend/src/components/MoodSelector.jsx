import React from "react";
import "../App.css";

export default function MoodSelector({ mood, handleChange }) {
  const moodOptions = ["Happy", "Stressed", "Calm", "Sad"];
  return (
    <div className="step-container" role="group" aria-label="Mood selection">
      <label>Select your current mood:</label>

      <div className="radio-container">
        {moodOptions.map((option) => (
          <label
            key={option}
            className={`radio-button ${mood === option ? "active" : ""}`}
            htmlFor={`mood-${option}`}
          >
            <input
              type="radio"
              id={`mood-${option}`}
              name="mood"
              value={option}
              checked={mood === option}
              onChange={() => handleChange("mood", option)}
              autoComplete="off"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}