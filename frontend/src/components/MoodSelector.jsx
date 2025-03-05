import React from "react";
import "../App.css";

export default function MoodSelector({mood, handleChange, setStep}){
    const moodOptions = ["Happy", "Stressed", "Calm", "Sad"];
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Mood selection"
      >
        <label className="text-questions">Select your current mood:</label>

        {moodOptions.map((option) => (
          <span key={option}>
            <input
              type="radio"
              className="btn-check"
              id={`mood-${option}`}
              name="mood"
              value={option}
              checked={mood === option}
              onChange={() => handleChange("mood", option)}
              autoComplete="off"
            />
            <label
              className="btn radio-outline-primary"
              htmlFor={`mood-${option}`}
            >
              {option}
            </label>
          </span>
        ))}
        <button
          className="btn-primary"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next Question
        </button>
      </div>
    );
}