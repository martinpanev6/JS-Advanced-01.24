function fruits(type, weight, price){

    weight /= 1000;
    let priceFor = weight * price;
    console.log(`I need $${priceFor.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}

fruits('orange', 2500, 1.80);