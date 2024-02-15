function calculator() {
    let num1Element, num2Element, resultElement;

    function init(selector1, selector2, resultSelector) {
        num1Element = document.querySelector(selector1);
        num2Element = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        const num1 = parseFloat(num1Element.value);
        const num2 = parseFloat(num2Element.value);
        const result = num1 + num2;
        resultElement.value = result;
    }

    function subtract() {
        const num1 = parseFloat(num1Element.value);
        const num2 = parseFloat(num2Element.value);
        const result = num1 - num2;
        resultElement.value = result;
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    };
}




