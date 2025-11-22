'use strict';

document.getElementById("start").addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let result;

  if (op === "add") {
    result = num1 + num2;
  } else if (op === "sub") {
    result = num1 - num2;
  } else if (op === "multi") {
    result = num1 * num2;
  } else if (op === "div") {
    result = num1 / num2;
  }

  document.getElementById("result").textContent = `Result: ${result}`;
});
