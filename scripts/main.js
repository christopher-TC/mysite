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

//DOGS THAT LOOK CODE
function updateImg(deg){
  loc = "images/dogs/";
  files = ["e", "ne", "n", "nw", "w", "sw", "s", "se"];

  if (deg<0){
    deg = deg*(-1);
  }else{
    deg = 180+(180-deg);
  }

  i = Math.round(deg / (360/files.length)) % files.length;

  $('#look').css('background-image', "url('"+loc+files[i]+".jpg')");
}

function run(){
  $(document).on( "mousemove", function( event ) {
    //calculate centre
    a = $("#look").offset();
    c = [a.left+($("#look").width()/2), a.top+($("#look").height()/2)];

    //calcolate position relative to c
    p = [event.pageX-c[0], event.pageY-c[1]];

    //get angle
    theta = Math.atan2(p[1], p[0]);
    theta *= 180/Math.PI // rads to degs

    updateImg(theta);
  });

}
