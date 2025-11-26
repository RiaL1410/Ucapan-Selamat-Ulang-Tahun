document.getElementById("candle").addEventListener("click", function() {
    const msg = document.getElementById("message");
    const music = document.getElementById("music");

    msg.style.display = "block";
    music.play();
});
