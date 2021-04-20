const secondsHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const clock = document.querySelector(".clock");
const digits = document.querySelectorAll(".digits");

function randomColorGenrator() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minute = now.getMinutes();
    minutesDegree = (((minute / 60) * 360) + 90) + (seconds * (6/60));
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hour = now.getHours();

    hoursDegree = ((hour * 30) + 90) + (minute * (30/60));
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const color = randomColorGenrator();
    clock.style.borderColor = color;
    // digits.forEach (digit => digit.style.color = color);

}

setInterval(setDate, 1000);
