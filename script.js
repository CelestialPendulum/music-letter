function playMusic(){

let mood = document.getElementById("mood").value.toLowerCase()

let player = document.getElementById("player")

let songs = {

love: "box/germany.mp3",

sunset: "box/summertown.mp3",

rain: "box/stay.mp3"

}

if(songs[mood]){

player.src = songs[mood]

player.play()

}

else{

alert("No song for that mood yet 🌻")

}


}

