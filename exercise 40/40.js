const vid = document.getElementById('v-main-element');
const playBtn = document.getElementById('v-toggle-play');
const progressFill = document.getElementById('v-fill-bar');
const progressArea = document.querySelector('.v-progress-track');
const volInput = document.getElementById('v-volume-control');
const speedInput = document.getElementById('v-playback-rate');

// Play/Pause Logic
function toggleMedia() {
    if (vid.paused) {
        vid.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        vid.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Update UI during playback
vid.addEventListener('timeupdate', () => {
    const percent = (vid.currentTime / vid.duration) * 100;
    progressFill.style.width = `${percent}%`;

    const format = (s) => {
        let m = Math.floor(s / 60);
        let sec = Math.floor(s % 60);
        return `${m}:${sec < 10 ? '0' + sec : sec}`;
    };

    document.getElementById('v-time-elapsed').textContent = format(vid.currentTime);
    if (vid.duration) document.getElementById('v-time-total').textContent = format(vid.duration);
});

// Controls Listeners
playBtn.addEventListener('click', toggleMedia);
volInput.addEventListener('input', (e) => vid.volume = e.target.value);
speedInput.addEventListener('change', (e) => vid.playbackRate = parseFloat(e.target.value));

// Seek Logic
progressArea.addEventListener('click', (e) => {
    vid.currentTime = (e.offsetX / progressArea.clientWidth) * vid.duration;
});