function auto(array) {
    let registry = {};

    for (let line of array) {
        let [make, model, numBuilt] = line.split(' | ');
        numBuilt = Number(numBuilt);
        if(!registry.hasOwnProperty(make)) {
            registry[make] = {};
        }

        if (registry[make][model]) {
            registry[make][model].numBuilt += numBuilt;
        } else {
            registry[make][model] = {
                numBuilt: numBuilt
            }
        }
    }

    for(let make in registry) {
        console.log(make);
        for(let model in registry[make]) {
            console.log(`###${model} -> ${registry[make][model].numBuilt}`);
        }
    }
}