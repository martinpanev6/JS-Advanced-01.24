function negativePOs(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            result.unshift(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }
    for(let el of result){
        console.log(el);
    }
}