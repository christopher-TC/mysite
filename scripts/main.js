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
  if (deg>-67 && deg<-22){
    //ne
    $('#look').css('background-image', "url('ne.jpg')");
  }else if ((deg>-22 && deg<0)|| (deg>0 && deg<22)){
    //e
    $('#look').css('background-image', "url('e.jpg')");
  }else if (deg>-112 && deg<-67){
    //n
    $('#look').css('background-image', "url('n.png')");
  }else if (deg>-158 && deg<-112){
    //nw
    $('#look').css('background-image', "url('nw.jpg')");
  }else if ((deg<-158 && deg > -180) || (deg>158 && deg<180)){
    //w
    $('#look').css('background-image', "url('w.jpg')");
  }else if (deg>136 && deg<158){
    //sw
    $('#look').css('background-image', "url('sw.jpg')");
  }else if (deg>68 && deg<136){
    //s
    $('#look').css('background-image', "url('s.jpg')");
  }else if (deg>22 && deg<68){
    //ne
    $('#look').css('background-image', "url('se.jpg')");
  }
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
