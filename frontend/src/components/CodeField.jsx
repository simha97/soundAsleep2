import React from "react";
import "../App.css";

export default function CodeField({ code, setCode, setStep }) {
  return (
    <div className="text-questions ">
      <label htmlFor="name">
        Enter your code: (You received the code in the first email)
      </label>
      <input
        type="text"
        className="form-code"
        id="name"
        name="name"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoComplete="off"
        placeholder="Enter your code..."
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
