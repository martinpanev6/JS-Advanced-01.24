function agreggateEl(elements){

    agregate(elements, 0, (a, b) => a + b);
    agregate(elements, 0, (a, b) => a + 1 / b);
    agregate(elements, '', (a, b) => a + b);

    function agregate(arr, initVal, func){
        let val = initVal;
        for(let i = 0; i < arr.length; i++){
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

agreggateEl();