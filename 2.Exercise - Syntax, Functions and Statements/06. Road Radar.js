function roadRadar(currentSpeed, area){

    currentSpeed = Number(currentSpeed);

    let areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if(currentSpeed <= areas[area]){
        console.log(`Driving ${currentSpeed} km/h in a ${areas[area]} zone`);
    }else{
        let overLimits = currentSpeed - areas[area];
        let status = '';
        if(overLimits <= 20){
            status = 'speeding';
        }else if(overLimits <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${overLimits} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    }
}

roadRadar(120, 'interstate');