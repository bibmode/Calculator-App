"use strict";

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".calc__screen--input");

//get value
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const val = btn.value;
    checkValue(val);
  });
});

//checking value
function checkValue(val) {
  if (val !== "eql" && val !== "res" && val !== "del") screen.value += val;
  if (val === "eql") calculate(screen.value);
  if (val === "res") screen.value = "";
  if (val === "del") deleteInput();
}

function calculate(str) {
  //store numbers and actions into different arrays
  //make use of regex selectors
  const values = str.split(/[^0-9.]/g);
  const actions = str.replace(/[\d.]+/g, "");
  //replacing all unacceptable chars in actions string and storing it in an array
  const actions2 = [...actions.replace("x", "*")];

  //set initial value to first element in values array
  let result = Number(values[0]);

  //iterate through values and operate on them with the actions
  actions2.forEach((op, i) => {
    if (op === "+") result += Number(values[i + 1]);
    if (op === "-") result -= Number(values[i + 1]);
    if (op === "*") result *= Number(values[i + 1]);
    if (op === "÷") result /= Number(values[i + 1]);
  });

  //show result to the screen
  screen.value = result;
}

function deleteInput() {
  let delValue = screen.value.slice(0, -1);
  screen.value = delValue;
}
