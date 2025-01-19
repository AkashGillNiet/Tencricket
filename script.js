// Stream URL and DRM configuration
const streamUrl = "https://edge3-moblive.yuppcdn.net/drm/smil:tencricketdrm.smil/manifest.mpd?%7CdrmScheme=clearkey&drmLicense=9872e439f21f4a299cab249c6554daa3:0cdfcfe0d0f1fbe100554ce3ef4c4665";

// Initialize the player using Shaka Player
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoPlayer");

    if (shaka.Player.isBrowserSupported()) {
        const player = new shaka.Player(video);

        player.load(streamUrl).then(() => {
            console.log("The video has been successfully loaded!");
        }).catch(err => {
            console.error("Error loading the video:", err);
        });
    } else {
        alert("Your browser does not support Shaka Player.");
    }
});