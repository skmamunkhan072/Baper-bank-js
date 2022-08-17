document.getElementById("submit-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("emal-input");
  const emailValue = emailInput.value;
  const passwopdInpur = document.getElementById("password-input");
  const passwopdValue = passwopdInpur.value;

  const email = "skmamunkhan072@gmail.com";
  const passwod = "mamunkhan";
  if (emailValue === email && passwopdValue === passwod) {
    window.location.href = "amount-Html/amount.html";
  } else {
    alert("Enter YOur curent Email and password");
  }
  console.log(emailValue, passwopdValue);
});
