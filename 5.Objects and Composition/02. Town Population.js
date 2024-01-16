function townPopulation(arr){
    
    let collection = {};

    for (let command of arr){
        let [town, population] = command.split(' <-> ');
        population = Number(population);

        if(town in collection){
        collection[town] += population;
        }else{
    collection[town] = population;
        }
    }

    let entries = Object.entries(collection);
    for(let entry of entries){
        console.log(`${entry[0]} : ${entry[1]}`);
    }
}

townPopulation(['Sofia <-> 1200000',

'Sofia <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']);