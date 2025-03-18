import { useState } from "react";
import "./App.css";
import postData from "../api.js";
import CodeField from "./components/CodeField.jsx";
import DayRating from "./components/DayRating.jsx";
import RelaxSlider from "./components/RelaxSlider.jsx";
import MoodSelector from "./components/MoodSelector.jsx";
import SoundSelector from "./components/SoundSelector.jsx";
import PlayingPage from "./components/PlayingPage.jsx";

function App() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
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

    if (!formData.selectedSound) {
      setError(true);
    } else {
      console.log("submitting");
      postData(code, formData);
      setStep(6);
      setError(false);
    }
  };
  const handleNext = () => {
    if (code === "") {
      setError(true);
    } else {
      setStep((prev) => prev + 1);
      setError(false);
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <form onSubmit={handlePost}>
          {step === 1 && (
            <>
              {error && <p className="error">Please Enter a code</p>}
              <CodeField code={code} setCode={setCode} />
            </>
          )}
          {step === 2 && (
            <DayRating day={formData.day} handleChange={handleChange} />
          )}
          {step === 3 && (
            <RelaxSlider
              relax={formData.relaxation}
              handleChange={handleChange}
            />
          )}
          {step === 4 && (
            <MoodSelector mood={formData.mood} handleChange={handleChange} />
          )}

          {step === 5 && (
            <div>
              {error && (
                <p className="error">Please select a sound before submitting</p>
              )}

              <SoundSelector mood={formData.mood} handleChange={handleChange} />
            </div>
          )}

          {step === 6 && (
            <div>
              <PlayingPage sound={formData.selectedSound} />
              <button className="btn-change" onClick={() => setStep(5)}>
                Change Sound
              </button>
            </div>
          )}
          <div className="btn-container">
            {step > 1 && step < 6 && (
              <button
                className="btn-back"
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
              >
                Back
              </button>
            )}
            {step < 5 && (
              <button className="btn-next" type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {step === 5 && (
              <button className="btn-next" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
