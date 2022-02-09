window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const num1 = parseInt(formData.get("number1"));
    const num2 = parseInt(formData.get("number2"));
    const operation = document.getElementsByName("operation").values;
    let result;
    console.log(operation);

    if (document.getElementById("sum").checked == true) {
      result = num1 + num2;
    } else if (document.getElementById("sub").checked == true) {
      result = num1 - num2;
    } else if (document.getElementById("mul").checked == true) {
      result = num1 * num2;
    } else if (document.getElementById("div").checked == true) {
      result = num1 / num2;
    } else {
      result = "ERROR";
    }
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  });
};
