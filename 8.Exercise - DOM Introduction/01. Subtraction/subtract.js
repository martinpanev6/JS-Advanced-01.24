function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;

    let difference = Number(num1) - Number(num2);

    document.getElementById('result').textContent = difference;
}