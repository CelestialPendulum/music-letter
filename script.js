function playMusic() {
  let mood = document.getElementById("mood").value.toLowerCase();
  let player = document.getElementById("player");

  let songs = {
    love: "./box/germany.mp3",    // Must have box/ at the start
    sunset: "./box/summertown.mp3",
    rain: "./box/stay.mp3"
  };

  if (songs[mood]) {
    player.src = songs[mood];
    player.load(); // This helps the browser find the new file
    player.play().catch(e => console.log("Error playing:", e)); 
  } else {
    alert("No song for that mood yet 🌻");
  }
}

