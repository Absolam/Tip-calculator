let billInput = document.getElementById("bill-input");
let custom = document.querySelector(".custom");
let peopleInput = document.getElementById("people-input");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");

function calculateTip(num1) {
  let x = (billInput.value * num1) / peopleInput.value;
  x = x.toFixed(2);
  tipAmount.textContent = x;
  let xx = billInput.value / peopleInput.value;
  xx = xx.toFixed(2);
  totalAmount.textContent = xx;
}

function reset() {
  tipAmount.textContent = 0;
  totalAmount.textContent = 0;
}
