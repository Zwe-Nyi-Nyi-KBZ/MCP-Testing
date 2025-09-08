const display = document.getElementById('display');

function appendValue(val) {
    // Prevent first input from being any operator ('+', '-', '*', '/'), '.', or '='
    if (display.value === '') {
        const operators = ['+', '-', '*', '/'];
        if (operators.includes(val) || val === '.' || val === '=') {
            return;
        }
    }
    // Prevent consecutive operators
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(val)) {
        if (display.value !== '' && operators.includes(display.value.slice(-1))) {
            // Replace last operator with new one
            display.value = display.value.slice(0, -1) + val;
            return;
        }
    }
    // Prevent multiple decimals in a number
    if (val === '.') {
        const parts = display.value.split(/\+|\-|\*|\//);
        if (parts[parts.length - 1].includes('.')) {
            return;
        }
    }
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    // Prevent calculation if display is empty or ends with operator
    if (display.value === '' || /[+\-*/.]$/.test(display.value)) {
        return;
    }
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
