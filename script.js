const btnsEle = document.querySelectorAll("button");
const inputEle = document.getElementById("input");
const resultEle = document.getElementById("result");
const historyButton = document.getElementById("history-button");

let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", () => {
        const btnValue = btnsEle[i].textContent;
        if (btnValue === "C") {
            clearResult();
        }
        else if (btnValue === "=") {
            calculateResult();
        }
        else if (btnValue === "←") {
            backspace();
        } else if (btnValue === "History") {
            window.location.href = 'history.html'; // Navigate to history page
        } else {
            appendValue(btnValue);
        }
    });
}

function clearResult() {
    inputEle.value = "";
    resultEle.value = "";
}

function calculateResult() {
    try {
        const result = eval(inputEle.value);
        const fullExpression = `${inputEle.value}=${result}`;
        resultEle.value = result;
        saveToHistory(fullExpression);
    } catch (e) {
        resultEle.value = "Error";
    }
}

function appendValue(btnValue) {
    inputEle.value += btnValue;
}

function backspace() {
    inputEle.value = inputEle.value.slice(0, -1);
}

function saveToHistory(value) {
    if (value) {
        history.push(value);
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
}
