let display = document.querySelector("#display");
let result = document.querySelector("#res");

function non(inp) {
  display.value += inp;
  res();
}

function cl() {
  display.value = "";
  result.value = "";
}

function calc() {
  try {
    display.value = eval(display.value);
    result.value = "";
  } catch (error) {
    display.value = "Not value";
    result.value = "";
  }
}

function res() {
  try {
    result.value = eval(display.value);
  } catch {
    result.value = "";
  }
}
