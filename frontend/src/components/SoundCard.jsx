import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

export default function SoundCard({ sound, onToggle }) {
  const audioRef = useRef(null);
  const styling = sound.isPlaying
    ? "sound-container-playing"
    : "sound-container";

  useEffect(() => {
    if (sound.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // reset to start
    }
  }, [sound.isPlaying]);

  return (
    <div onClick={onToggle} className={styling}>
      <img src={sound.imageUrl} className="sound-img" alt="Sound thumbnail" />
      <div>
        <h4 className="sound-title">{sound.title}</h4>
        <audio ref={audioRef} src={sound.audioUrl} />
      </div>
      <FontAwesomeIcon icon={sound.isPlaying ? faPauseCircle : faPlayCircle} />
    </div>
  );
}
