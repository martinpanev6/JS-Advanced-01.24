function calorieObject(arr){

    let calories = {};

    for(let i = 0; i < arr.length; i += 2){
        calories[arr[i]] = Number(arr[i + 1]);
    }
    console.log(calories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);