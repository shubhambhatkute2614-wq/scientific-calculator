let isCalcMode = true;   // ⭐ REQUIRED FOR KEYBOARD
let isDegree = true;
let memory = 0;
let history = [];

const display = document.getElementById("display");


// Basic
function appendValue(v) { display.value += v; }
function clearDisplay() { display.value = ""; }
function backspace() { display.value = display.value.slice(0, -1); }

// Calculate
function calculate() {
    try {
        let expr = display.value;
        let res = eval(expr);
        display.value = res;
        addHistory(expr + " = " + res);
    } catch {
        display.value = "Error";
    }
}

// History
function addHistory(text) {
    history.push(text);
    let li = document.createElement("li");
    li.textContent = text;
    document.getElementById("historyList").appendChild(li);
}

function clearHistory() {
    history = [];
    document.getElementById("historyList").innerHTML = "";
}

// DEG/RAD
function toggleDegRad() { isDegree = !isDegree; }

// Trigonometry
function trig(fn) {
    let x = Number(display.value);
    if (isDegree) x *= Math.PI / 180;
    display.value = fn(x);
}
function invTrig(fn) {
    let x = Number(display.value);
    let r = fn(x);
    display.value = isDegree ? r * 180 / Math.PI : r;
}

function sin() { trig(Math.sin); }
function cos() { trig(Math.cos); }
function tan() { trig(Math.tan); }
function asin() { invTrig(Math.asin); }
function acos() { invTrig(Math.acos); }
function atan() { invTrig(Math.atan); }

// Math
function square() { display.value **= 2; }
function cube() { display.value **= 3; }
function reciprocal() { display.value = 1 / display.value; }
function sqrt() { display.value = Math.sqrt(display.value); }

function power() {
    let b = prompt("Base:");
    let p = prompt("Power:");
    display.value = Math.pow(b, p);
}

function log10() { display.value = Math.log10(display.value); }
function ln() { display.value = Math.log(display.value); }
function exp() { display.value = Math.exp(display.value); }

// Factorial
function factorial() {
    let n = parseInt(display.value);
    if (n < 0) { display.value = "Error"; return; }
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    display.value = f;
}

// Memory
function memoryClear() { memory = 0; }
function memoryRecall() { display.value = memory; }
function memoryAdd() { memory += Number(display.value); }
function memorySub() { memory -= Number(display.value); }

// Theme
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Number System Converter
function convertNumber() {
    let num = document.getElementById("numInput").value;
    let fromBase = parseInt(document.getElementById("fromBase").value);
    let toBase = parseInt(document.getElementById("toBase").value);

    try {
        let decimal = parseInt(num, fromBase);
        if (isNaN(decimal)) {
            document.getElementById("convertResult").innerText = "Invalid number!";
            return;
        }
        let result = decimal.toString(toBase).toUpperCase();
        document.getElementById("convertResult").innerText = "Result: " + result;
    } catch {
        document.getElementById("convertResult").innerText = "Error!";
    }
}
