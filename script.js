document.addEventListener("DOMContentLoaded", function() {
    showPage('home');
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';

    // Home Page पर वापस आने पर वीडियो प्लेयर छुपाएँ
    if (pageId !== 'home') {
        document.getElementById("video-player-container").style.display = 'none';
    }
}

function playVideo(videoSrc, type, title, metaData) {
    // Home Page पर जाएं
    showPage('home');

    // Video Player को दिखाएँ
    let playerContainer = document.getElementById("video-player-container");
    let videoElement = document.getElementById("videoPlayer");

    document.getElementById("videoTitle").innerText = title;
    document.getElementById("videoMeta").innerText = metaData;
    playerContainer.style.display = 'block';

    // प्लेयर में वीडियो लोड करें
    if (type === "HLS") {
        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(videoElement);
        } else {
            videoElement.src = videoSrc;
        }
    } else if (type === "Shaka") {
        let player = new shaka.Player(videoElement);
        player.load(videoSrc);
    }
}
