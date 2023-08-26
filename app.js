function getValue(e) {
  document.getElementById("inp").value += e;
}

function calc() {
  let input = document.getElementById("inp");
  input.value = eval(input.value);
}

function clearAll() {
  document.getElementById("inp").value = "";
}

function deleteOne() {
  let currentValue = document.getElementById("inp").value;
  let newValue = currentValue.slice(0, -1);
  console.log(newValue);
  document.getElementById("inp").value = newValue;
}
