let history = [];

function display(value) {
  document.getElementById("result").value += value;
}

function clearscreen() {
  document.getElementById("result").value = "";
}

function updateHistory() {
  let histDisplay = document.getElementById("history");
  histDisplay.value = history.join("\n");
}

function calculate(value) {
  let i = document.getElementById("result").value;
  let r = eval(i);
  document.getElementById("result").value = r;
  let h = i + " = " + r;
  history.push(h);
  updateHistory();
}
