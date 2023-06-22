const numberBtn = document.querySelectorAll('[data-numbers]');
const operationBtn = document.querySelectorAll('[data-operations]');
const equalBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-allClear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousNumberTextDiv = document.querySelector('[data-previousNumberText]');
const currentNumberTextDiv = document.querySelector('[data-currentNumberText]');

let haveDot = false;
let currentNumber = '';
let previousNumber = '';
let result = null;
let lastOperation = '';

numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        currentNumber +=  e.target.innerText;
        currentNumberTextDiv.innerText = currentNumber;
    })
})

operationBtn.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!currentNumber) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(currentNumber && previousNumber && lastOperation) {
            mathOperation();
        } else {
            result = currentNumber;
        }
        lastOperation = operationName;
        clear(lastOperation);
    })
})

const mathOperation = () => {
    if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(currentNumber);
    } else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(currentNumber);
    } else if(lastOperation === '*') {
        result = parseFloat(result) * parseFloat(currentNumber);
    } else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(currentNumber);
    }
}

const clear = (name = '') => {
    previousNumber = `${currentNumber} ${name}`;
    previousNumberTextDiv.innerText = previousNumber;
    currentNumber = '';
    currentNumberTextDiv.innerText = '';
}

equalBtn.addEventListener('click', () => {
    if(!currentNumber || !previousNumber) return;
    haveDot = false;
    mathOperation();
    clear(lastOperation);
    currentNumberTextDiv.innerText = result;
})

allClearBtn.addEventListener('click', () => {
    currentNumber = '';
    currentNumberTextDiv.innerText = '';
    previousNumber = '';
    previousNumberTextDiv.innerText = '';
    lastOperation = '';
});

deleteBtn.addEventListener('click', () => {
    currentNumber = currentNumber.toString().slice(0, -1);
    currentNumberTextDiv.innerText = currentNumber;
})