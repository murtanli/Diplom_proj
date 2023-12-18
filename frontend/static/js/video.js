document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");



    function restartVideo() {
        video.currentTime = 0;
        video.play();
    }

    window.addEventListener("load", function() {
        video.play();
    })
    video.addEventListener("ended", restartVideo);
});
