function createCommandProcessor(arr) {
    // Inner collection to store strings
    let collection = [];

    // Inner object to process list commands
    const commandProcessor = {
        add: item => {
            collection.push(item);
        },
        remove: item => {
            collection = collection.filter(el => el !== item);
        },
        print: () => {
            console.log(collection.join(","));
        }
    };

    arr.forEach(element => {
        const [command, value] = element.split(" ");
        commandProcessor[command](value);
    });
}

createCommandProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])