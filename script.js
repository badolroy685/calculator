const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  let current = display.innerText;
  if (current.length > 1 && current !== 'Error') {
    display.innerText = current.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = 'Error';
  }
}
