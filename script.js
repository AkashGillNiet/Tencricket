// Stream URL
const streamUrl = "https://edge3-moblive.yuppcdn.net/drm/smil:tencricketdrm.smil/manifest.mpd";

// ClearKey DRM configuration
const drmConfig = {
    clearKeys: {
        // Key ID: Decryption Key
        "9872e439f21f4a299cab249c6554daa3": "0cdfcfe0d0f1fbe100554ce3ef4c4665"
    }
};

// Initialize Shaka Player
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoPlayer");

    if (shaka.Player.isBrowserSupported()) {
        const player = new shaka.Player(video);

        // Configure DRM
        player.configure({
            drm: {
                clearKeys: drmConfig.clearKeys,
            }
        });

        // Load stream
        player.load(streamUrl).then(() => {
            console.log("The DRM-protected video has been successfully loaded!");
        }).catch(err => {
            console.error("Error loading the video:", err);
        });
    } else {
        alert("Your browser does not support Shaka Player.");
    }
});
