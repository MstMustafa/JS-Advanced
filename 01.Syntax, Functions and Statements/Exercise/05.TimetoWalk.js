function calculateWalkTime(steps, stepLengthMeters, speedKmH) {
    let totalDistanceMeters = steps * stepLengthMeters;
    let totalRestTimeSeconds = Math.floor(totalDistanceMeters / 500) * 60;
    let speedMetersPerSecond = (speedKmH * 1000) / 3600;
    let walkingTimeSeconds = totalDistanceMeters / speedMetersPerSecond;
    let totalTimeSeconds = walkingTimeSeconds + totalRestTimeSeconds;

    let hours = Math.floor(totalTimeSeconds / 3600);
    let minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    let seconds = Math.round(totalTimeSeconds % 60);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}
