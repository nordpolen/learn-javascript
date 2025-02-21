console.log('JavaScript is loaded!');

// Get the elements from the HTML
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let seconds = 0;

// Function to format the time
function formatTime(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;

    return [hours, minutes, seconds].map(v => v < 10 ? '0' + v : v).join(':');
}

// Start button
startBtn.addEventListener('click', function () {
    console.log('Start button clicked');
    if (!timer) {
        timer = setInterval(function () {
            seconds++;
            display.textContent = formatTime(seconds);
        }, 1000);
    }
});

// Stop button
stopBtn.addEventListener('click', function () {
    console.log('Stop button clicked');
    clearInterval(timer);
    timer = null;
});

// Reset button
resetBtn.addEventListener('click', function () {
    console.log('Reset button clicked');
    clearInterval(timer);
    timer = null;
    seconds = 0;
    display.textContent = '00:00:00';
});