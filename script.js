let billInput = document.getElementById("bill-input");
let custom = document.querySelector(".custom");
let peopleInput = document.getElementById("people-input");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");

function calculateTip(num1) {
  let x = (billInput.value * num1) / peopleInput.value;
  tipAmount.textContent = x;
  totalAmount.textContent = billInput.value / peopleInput.value;
}

function reset() {
  tipAmount.textContent = 0;
  totalAmount.textContent = 0;
}
