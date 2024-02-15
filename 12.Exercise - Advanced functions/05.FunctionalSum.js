function sum(initialValue = 0) {
    let total = initialValue;

    function add(num) {
        total += num;
        return add;
    }

    add.toString = function() {
        return total;
    };

    return add;
}

console.log(sum(1)(2));