var player = $('video')[0];
if (player.paused) {
    player.play();
} else {
    player.pause();
}
