const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video
function updateVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
}

// Update play / pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update progress / timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    


// Get the minutes
let mins = Math.floor(video.currentTime / 60);
if(mins < video.duration){
  mins = '0' + String(mins);
}

// Get seconds
let secs = Math.floor(video.currentTime % 60);
  if(secs < video.duration){
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}


// Set video time to progress
function setVideoProgress() {
    video.setCurrentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listeners
video.addEventListener('click', updateVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', updateVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);