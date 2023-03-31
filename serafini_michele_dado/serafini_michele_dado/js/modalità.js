function playMusic() {
    var audio = new Audio('music.mp3');
    audio.play();
    audio.loop=true;
    document.getElementById("m").style.pointerEvents="none";
}