let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');
let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let resetBtn = document.querySelector("#reset");

startBtn.textContent = "Start";


// implement the below funtion using the setInteral funtion
function startTimer() {
    timer = setInterval(updateTimer, 90);
    // startBtn.disabled = true;
}
// }
 function updateTimer() {
    milliseconds++;
    if(milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    timerDisplay.textContent = formatTime(minutes, seconds, milliseconds)
 }


function formatTime(minutes, seconds, milliseconds) {
    return (
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds) +
        ':' +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds)
    );
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
    // startTimer();
}