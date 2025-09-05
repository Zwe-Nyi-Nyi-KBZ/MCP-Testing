const display = document.getElementById('display');

function appendValue(val) {
    // Prevent first input from being '+', '-', '.', or '='
    if (display.value === '') {
        if (['+', '-', '.', '='].includes(val)) {
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
