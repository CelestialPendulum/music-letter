function playMusic() {
  const moodInput = document.getElementById("mood");
  const player = document.getElementById("player");
  
  if (!moodInput || !player) return;

  const mood = moodInput.value.toLowerCase().trim();

  const songs = {
    love: "./box/germany.mp3",
    sunset: "./box/summertown.mp3",
    rain: "./box/stay.mp3"
  };

  if (songs[mood]) {
    player.src = songs[mood];
    player.load(); // Force the browser to find the new source
    player.play().catch(error => {
      console.error("Playback failed:", error);
    });
  } else {
    alert("No song for that mood yet 🌻");
  }
}
