import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { sounds } from "../variables.js";

export default function SoundPlayer({selectedsound}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10); // For testing, use a shorter time
  const audioRef = useRef(null);
  const soundObj = sounds.find((sound) => selectedsound === sound.title);

  // Function to format the time to hh:mm:ss
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1; // Decrease by 1 second
          } else {
            clearInterval(interval); // Stop the countdown when it reaches 0
            audioRef.current.pause(); // Pause the audio
            audioRef.current.currentTime = 0; // Reset audio to the beginning
            setRemainingTime(10)
            setIsPlaying(false)
            return 0;
          }
        });
      }, 1000); // Update every second

      // Cleanup the interval on component unmount or pause
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Set the audio to loop, but remove loop when the countdown reaches 0
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true; // This makes the audio loop automatically
    }
  }, []);

  // Toggle play/pause
  function onToggle() {
    setIsPlaying((prev) => !prev);
  }

  // Stop the countdown when the audio finishes
  const onAudioEnded = () => {
    setIsPlaying(false);
    setRemainingTime(7200); // Reset time to 2 hours when the audio finishes
  };

  return (
    <div onClick={onToggle} className="soundPlayer">
      <div className="texts">
        <p>{isPlaying ? "Playing" : "Paused"}</p>
        <h3>{soundObj.title}</h3>
        <p>{formatTime(remainingTime)}</p> {/* Display remaining time */}
      </div>
      <FontAwesomeIcon
        size="3x"
        className="icon"
        icon={isPlaying ? faPauseCircle : faPlayCircle}
      />
      <audio
        ref={audioRef}
        src={soundObj.audioUrl}
        onEnded={onAudioEnded} // Handle when audio ends
      />
    </div>
  );
}
