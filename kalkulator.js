let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === '0' && val !== 'C') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateSquare() {
    displayValue = (parseFloat(displayValue) * parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateInverse() {
    displayValue = (1 / parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculatePi() {
    displayValue = Math.PI.toString();
    updateDisplay();
}

updateDisplay();
