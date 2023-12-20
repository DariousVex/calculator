function display(value) {
  document.getElementById("result").value += value;
}

function clearscreen() {
  document.getElementById("result").value = "";
}

function calculate(value) {
  let i = document.getElementById("result").value;
  let r = eval(i);
  document.getElementById("result").value = r;
}
