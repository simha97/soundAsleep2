import React from "react";
import "../App.css";

export default function CodeField({ code, setCode }) {
  return (
    <div className="step-container">
      <label htmlFor="name">
        Enter your code: (You received the code in the first email)
      </label>
      <input
        type="text"
        className="input-code"
        id="name"
        name="name"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoComplete="off"
        placeholder="Enter your code..."
      />
    </div>
  );
}
