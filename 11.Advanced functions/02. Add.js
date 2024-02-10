function solution(n){

    return function(a){
        a += n;
        return a;
    };
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));