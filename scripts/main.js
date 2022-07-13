var audio = new Audio('PlugInBaby.mp3');

function playMusic(){
  if (document.getElementById("music").innerHTML == "play"){
    audio.play();
    document.getElementById("music").innerHTML = "pause";
  }else{
    audio.pause();
    document.getElementById("music").innerHTML = "play";
  }
}
