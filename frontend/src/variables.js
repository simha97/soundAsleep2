export const sounds = [
  {
    id: 1,
    title: "Rain sound",
    imageUrl: "./rain_umbrella.jpg",
    audioUrl: "./rain sound.mp3",
    isPlaying: false,
  },
  {
    id: 2,
    title: "Underwater",
    imageUrl: "/underwater.jpg",
    audioUrl: "./underwater.mp3",
    isPlaying: false,
  },
  {
    id: 3,
    title: "Singing Bowls",
    imageUrl: "/singingBowls.jpeg",
    audioUrl: "./singing bowls.mp3",
    isPlaying: false,
  },
  {
    id: 4,
    title: "Birds",
    imageUrl: "/birds.jpg",
    audioUrl: "./birds.mp3",
    isPlaying: false,
  },
  {
    id: 5,
    title: "Crickets",
    imageUrl: "/crickets.jpg",
    audioUrl: "./crickets.mp3",
    isPlaying: false,
  },
];

export const moodSoundsList = {
  Happy: ["Birds", "Rain sound", "Crickets"],
  Stressed: ["Rain sound", "Underwater", "Singing Bowls"],
  Calm: ["Rain sound", "Singing Bowls", "Crickets"],
  Sad: ["Rain sound", "Underwater", "Singing Bowls"],
};

export const moodMessages = {
  Stressed:
    "Sorry to hear that you're feeling stressed.",
  Sad: "Sorry to hear that you're feeling sad.",
  Happy:
    "Good to hear that you're feeling happy.",
  Calm: "Good to hear that you're feeling calm.",
};
