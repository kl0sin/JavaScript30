const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/ 60) * 360 + 90;

    sec.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = (minutes / 60) * 360 + 90;
    
    min.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 24) * 360 + 90;

    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);