function playMusic() {
  const moodInput = document.getElementById("mood");
  const player = document.getElementById("player");

  // .trim() removes any accidental spaces the user might type
  const mood = moodInput.value.toLowerCase().trim();

  // These paths match your 'box' folder and lowercase filenames exactly
  const songs = {
    love: "box/germany.mp3",
    sunset: "box/summertown.mp3",
    rain: "box/stay.mp3"
  };

  if (songs[mood]) {
    player.src = songs[mood];
    player.load(); // Forces the browser to reset the player to the new file
    
    // Modern browsers require a 'promise' check for play()
    player.play().catch(error => {
      console.error("Playback failed. Please click the play button on the player manually.", error);
    });
  } else {
    alert("No song for that mood yet 🌻");
  }
}
