const numberBtn = document.querySelectorAll('[data-numbers]');
const operationBtn = document.querySelectorAll('[data-operation]');
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