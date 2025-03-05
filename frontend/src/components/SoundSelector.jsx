import React, { useState } from "react";
import "../App.css";
import {
  sounds as initialSounds,
  moodSoundsList,
  moodMessages,
} from "../variables.js";
import SoundCard from "./soundCard.jsx";

export default function SoundSelector({ mood, handleChange }) {
  const allowedTitles = moodSoundsList[mood] || [];
  const filteredSounds = initialSounds.filter((sound) =>
    allowedTitles.includes(sound.title)
  );

  const [recommendedSounds, setRecommendedSounds] = useState(filteredSounds);

  function handleToggle(targetSound) {
    const updatedSounds = recommendedSounds.map((sound) =>
      sound.id === targetSound.id
        ? { ...sound, isPlaying: !sound.isPlaying }
        : { ...sound, isPlaying: false }
    );
    setRecommendedSounds(updatedSounds);
    handleChange("selectedSound", targetSound.title);
  }

  return (
    <div className="container">
      <h4 className="text-questions">{moodMessages[mood]}</h4>
      <h4 className="text-questions">
        We suggest three sounds to have a good night sleep:
      </h4>

      {recommendedSounds.map((sound) => (
        <SoundCard
          key={sound.id}
          sound={sound}
          onToggle={() => handleToggle(sound)}
        />
      ))}
    </div>
  );
}
