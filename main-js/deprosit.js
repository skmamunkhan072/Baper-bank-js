// deprosit button function

document.getElementById("deposit-btn").addEventListener("click", function () {
  const newAmount = getInputValue("diposit-input");
  const prevesTotal = getElementTextValue("deposit-total");
  const mainBalencValue = getElementTextValue("main-balence");
  const depositSumTotal = prevesTotal + newAmount;
  getTaxtSetValue("deposit-total", depositSumTotal);
  const mainBalenceTotal = mainBalencValue + newAmount;
  getTaxtSetValue("main-balence", mainBalenceTotal);

  //   console.log(depositValue, depositElementValue, mainBalencValue);
});
