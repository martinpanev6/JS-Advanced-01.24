function lowestPriceInCities(arr){

    let collection = {};

    for(let element of arr){
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if(product in collection){
            if(price < collection[product].price){
                collection[product] = {town, price};
            }
        }else{
            collection[product] = {town, price};
        }
    }

    let entries = Object.entries(collection);
    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1].price} (${entry[1].town})`);
    }
}

lowestPriceInCities(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10']);