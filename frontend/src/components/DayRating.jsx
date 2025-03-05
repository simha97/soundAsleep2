import React from "react";
import "../App.css";

export default function DayRating({ day, handleChange, setStep }) {
  const ratingOptions = ["Productive", "Challenging", "Relaxing", "Stressful"];

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Day selection"
    >
      <label className="text-questions">How was your day?</label>

      {ratingOptions.map((option) => (
        <span key={option}>
          <input
            type="radio"
            className="btn-check"
            id={`day-${option}`}
            name="day"
            value={option}
            checked={day === option}
            onChange={() => handleChange("day", option)}
            autoComplete="off"
          />
          <label
            className="text-questionsbtn radio-outline-primary"
            htmlFor={`day-${option}`}
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
