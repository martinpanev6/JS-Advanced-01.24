function validityChecker(x1, y1, x2, y2) {

    let firstPoint = Math.sqrt(x1 ** 2 + y1 ** 2);
    let secondPoint = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distanceBetwwenTwoPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);


    if (Number.isInteger(firstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceBetwwenTwoPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1);