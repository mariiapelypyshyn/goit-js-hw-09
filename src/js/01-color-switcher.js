function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;
let timerId = null;

const clickStartHandler = () => {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

const clickStopHandler = () => {
    clearInterval(timerId);
    startBtn.disabled = false;
stopBtn.disabled = true;
};

    startBtn.addEventListener('click', clickStartHandler);
stopBtn.addEventListener('click', clickStopHandler);