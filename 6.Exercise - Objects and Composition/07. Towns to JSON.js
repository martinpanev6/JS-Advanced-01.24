function townsToJSON(arr){

    let result = [];

    for(let i = 1; i < arr.length; i++){
        let [Town, Latitude, Longitude] = arr[i].split('|').map(x => x.trim()).filter(x => !!x);
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        result.push({Town, Latitude, Longitude})
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);