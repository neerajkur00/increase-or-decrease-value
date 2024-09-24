const counter = document.getElementById("Count");
const reset = document.getElementById("btn1");
const Decrease = document.getElementById("btn2");
const Increase = document.getElementById("btn3");

let count = 0;

Increase.onclick = function () {
  count++;
  counter.textContent = count;
};

Decrease.onclick = function () {
  count--;
  counter.textContent = count;
};
reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};
