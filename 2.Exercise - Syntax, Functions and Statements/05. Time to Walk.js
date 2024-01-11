function timeToWalk(steps, footprint, speed){

    let distance = steps * footprint;
    let speedMetinSec = speed / 3.6;
    let time = distance / speedMetinSec;
    time += 60 * (Math.floor(distance / 500));

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(min / 60);
    min -= hours * 60;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);

}

timeToWalk(4000, 0.60, 5);