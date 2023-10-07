let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
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

updateDisplay();
