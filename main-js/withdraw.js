// withdeaw function js
document.getElementById("withdraw").addEventListener("click", function () {
  const newWithdeaw = getInputValue("withdraw-input");
  const prevesWithdrawTotal = getElementTextValue("withdraw-element");
  const mainPrevesBlence = getElementTextValue("main-balence");
  if (newWithdeaw > mainPrevesBlence) {
    alert("Your Amount is Low now you can limit Amount");
    return;
  }
  const withdrawTotal = prevesWithdrawTotal + newWithdeaw;
  getTaxtSetValue("withdraw-element", withdrawTotal);
  const mainBalenceTotal = mainPrevesBlence - newWithdeaw;
  getTaxtSetValue("main-balence", mainBalenceTotal);
});
