const startBtn = document.getElementById("start-btn")
const timer = document.getElementById("timer")
// const timeline = document.getElementById("timeline")
const timeBlocks = document.getElementById("time-blocks")
const line = document.getElementById("line")
var timeout = undefined
const totalSeconds = 60 * 80
var timerSeconds

startBtn.addEventListener("click", StartCountdown)

function StartCountdown() {
    timerSeconds = totalSeconds
    if (timeout != undefined) {
        clearInterval(timeout)
    }
    timeout = setInterval(TimerTick, 1000)
}

function TimerTick() {
    timerSeconds--

    line.style.left = (timeBlocks.offsetWidth - 2 - (timerSeconds * timeBlocks.offsetWidth / totalSeconds)) + "px"

    if (timerSeconds <= 0) {
        clearInterval(timeout)
    }
}