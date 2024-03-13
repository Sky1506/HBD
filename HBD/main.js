var aud = new Audio('audio/HBD.mp3');
var isPlaying = false;
aud.loop = true;
aud.pause();
aud.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function play(){
    if (isPlaying) {
        aud.pause();
      } else {
        aud.play();
      }
    isPlaying = !isPlaying;
    var x = document.getElementById("butto");
    x.style.opacity = "0%";
    x.style.transition = "1s";
    var y = document.getElementById("fst");
    y.style.opacity = "100%";
    y.style.transition = "1s";
    var z = document.getElementById("snd");
    z.style.opacity = "100%";
    z.style.transition = "1s";
    var a = document.getElementById("trd");
    a.style.opacity = "100%";
    a.style.transition = "1s";
    var b = document.getElementById("fth");
    var images = b.getElementsByTagName("img")
    for (var i = 0; i < images.length; i++) {
      images[i].style.opacity = "100%";
      images[i].style.transition = "1s";
    }
    

}
