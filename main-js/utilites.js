// get input and rutran value function

function getInputValue(event) {
  const getInput = document.getElementById(event);
  const getInputValueString = getInput.value;
  const getInputValue = parseFloat(getInputValueString);
  getInput.value = "";
  return getInputValue;
}

// get deprosit and withdraw value

function getElementTextValue(event) {
  const getElement = document.getElementById(event);
  const getElementValueString = getElement.innerText;
  const getElementValue = parseFloat(getElementValueString);
  return getElementValue;
}

// gat Element set value

function getTaxtSetValue(elementId, elementValue) {
  const gatElementTExt = document.getElementById(elementId);
  gatElementTExt.innerText = elementValue;
}
