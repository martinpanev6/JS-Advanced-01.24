function storeCatalogue(arr){

    let collection = [];
    for(let element of arr){
        let [productName, productPrice] = element.split(' : ');
        productPrice = Number(productPrice);
        collection.push([productName, productPrice]);
    }
    collection.sort((a, b) => a[0].localeCompare(b[0]));
    let result = {};

    for(let elemnts of collection){
        let [name, price] = elemnts;
        const initial = name[0].toUpperCase();
        if (!result[initial]) {
            result[initial] = [];
        }
        result[initial].push({name, price});
    }
    let entries = Object.entries(result);

    for(let entry of entries){
        console.log(entry[0]);
        for(let item of entry[1]){
            console.log(`  ${item.name}: ${item.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);