import { useState } from "react";
import "./App.css";
import postData from "../api.js";
import CodeField from "./components/CodeField.jsx";
import DayRating from "./components/DayRating.jsx";
import RelaxSlider from "./components/RelaxSlider.jsx";
import MoodSelector from "./components/MoodSelector.jsx";
import SoundSelector from "./components/SoundSelector.jsx";

function App() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    day: "Productive",
    relaxation: 5,
    mood: "Happy",
    selectedSound: null,
    dateCreated: new Date(),
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePost = (e) => {
    e.preventDefault();
    postData(code, formData);
  };

  console.log(`Current Step: ${step}`);

  return (
    <div className="App">
      <div className="container mt-5">
        <form onSubmit={handlePost}>
          {step === 1 && (
            <CodeField code={code} setCode={setCode} setStep={setStep} />
          )}
          {step === 2 && (
            <DayRating
              day={formData.day}
              handleChange={handleChange}
              setStep={setStep}
            />
          )}
          {step === 3 && (
            <RelaxSlider
              relax={formData.relaxation}
              handleChange={handleChange}
              setStep={setStep}
            />
          )}
          {step === 4 && (
            <MoodSelector
              mood={formData.mood}
              handleChange={handleChange}
              setStep={setStep}
            />
          )}

          {step === 5 && (
            <div>
              <SoundSelector mood={formData.mood} handleChange={handleChange} />
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
