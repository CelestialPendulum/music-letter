function playMusic(){

let mood = document.getElementById("mood").value.toLowerCase()

let player = document.getElementById("player")

let songs = {

love: "box/Germany_&_Rome.mp3",

sunset: "box/Summertown.mp3",

rain: "box/Stay.mp3"

}

if(songs[mood]){

player.src = songs[mood]

player.play()

}

else{

alert("No song for that mood yet 🌻")

}


}
