let counterNumber = document.getElementById('counterNumber');

let count = 1

function increment() {
    counterNumber.innerHTML = ++count;
}

function decrement() {
    counterNumber.innerHTML = --count;
}