let pendingFunction = null;
function insertFunction(func) {
    // Insert function with opening parenthesis, set pendingFunction
    display.value += func + '(';
    pendingFunction = true;
}

// Update appendValue to handle pendingFunction
const display = document.getElementById('display');

function appendValue(val) {
    // Prevent first input from being any operator ('+', '-', '*', '/'), '.', '=', or ')'
    if (display.value === '') {
        const operators = ['+', '-', '*', '/'];
        if (operators.includes(val) || val === '.' || val === '=' || val === ')') {
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
    // Allow parentheses and advanced math functions
    if (val === '(' || val === ')') {
        display.value += val;
        return;
    }
    // Advanced math functions
    const mathFunctions = ['sqrt(', 'sin(', 'cos(', 'tan(', 'log(', 'exp(', 'pow(', '%'];
    if (mathFunctions.includes(val)) {
        display.value += val;
        return;
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

    // Handle pending function in appendValue
    appendValue = function(val) {
        if (pendingFunction) {
            display.value += val + ')';
            pendingFunction = false;
            return;
        }
        // ...existing code...
        // Prevent first input from being any operator ('+', '-', '*', '/'), '.', '=', or ')'
        if (display.value === '') {
            const operators = ['+', '-', '*', '/'];
            if (operators.includes(val) || val === '.' || val === '=' || val === ')') {
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
        // Allow parentheses and advanced math functions
        if (val === '(' || val === ')') {
            display.value += val;
            return;
        }
        // Advanced math functions
        const mathFunctions = ['sqrt(', 'sin(', 'cos(', 'tan(', 'log(', 'exp(', 'pow(', '%'];
        if (mathFunctions.includes(val)) {
            display.value += val;
            return;
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
        // Replace advanced math functions with JS Math equivalents
        let expr = display.value
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log(')
            .replace(/exp\(/g, 'Math.exp(')
            .replace(/pow\(/g, 'Math.pow(')
            .replace(/(\d+)%/g, '($1/100)');
        display.value = eval(expr);
    } catch (e) {
        display.value = 'Error';
    }
}
