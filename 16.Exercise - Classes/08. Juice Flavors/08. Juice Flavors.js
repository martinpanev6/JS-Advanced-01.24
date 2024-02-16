function juices(collection) {
    let juice = {};
    let mapJuices = new Map();

    for (let fruitArr of collection) {
        let [fruit, quantity] = fruitArr.split(' => ');
        quantity = Number(quantity);
        if (!juice.hasOwnProperty(fruit)) {
            juice[fruit] = {
                quantity
            }
        } else {
            juice[fruit].quantity += quantity;
        }


        if (juice[fruit].quantity >= 1000) {
            let bottles = 0;
            if (mapJuices.has(fruit)) {
                bottles = Math.floor(juice[fruit].quantity / 1000);
                mapJuices.set(fruit, mapJuices.get(fruit) + bottles);
            } else {
                bottles = Math.floor(juice[fruit].quantity / 1000)
                mapJuices.set(fruit, bottles);
            }
            juice[fruit].quantity %= 1000;
        }
    }
    for(let [fruit, quantity] of mapJuices) {
        console.log(`${fruit} => ${quantity}`);
    }
}