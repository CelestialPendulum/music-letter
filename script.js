function playMusic(){

let mood = document.getElementById("mood").value.toLowerCase()

let player = document.getElementById("player")

let songs = {

love: "music/Germany & Rome.mp3",

sunset: "music/Summertown.mp3",

rain: "music/Stay.mp3"

}

if(songs[mood]){

player.src = songs[mood]

player.play()

}

else{

alert("No song for that mood yet 🌻")

}

}