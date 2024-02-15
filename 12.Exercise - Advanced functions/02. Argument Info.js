function argumentsInfo(...data) {

    let res = {};

    for (let el of data) {
        let type = typeof (el);
        console.log(`${type}: ${el}`);
        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }
        res[type] += 1;
    }
    let sortedRes = Object.entries(res).sort((a, b) => b[1] - a[1]);

    for (let el of sortedRes) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}

argumentsInfo()