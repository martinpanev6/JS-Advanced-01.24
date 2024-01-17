function lastKnums(n, k){
    let arr = [1];
    let idx = 0;
    while(arr. length < n){
        let current = 0;
        current = arr.slice(-k).reduce((a, c) => c += a);
        arr.push(current);

    }

    return arr;
}

lastKnums(8, 2)