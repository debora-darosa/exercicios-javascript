var currentNumberWrapper = document.querySelector('#currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber==10) {
        return;
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    handleColor(currentNumber);
}

function decrement() {
    if (currentNumber==-10) {
        return;
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    handleColor(currentNumber);
}

function handleColor(currentNumber) {
    currentNumberWrapper.style.color = "black";
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }
}

