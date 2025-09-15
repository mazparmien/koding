const display = document.getElementById("display");
const buttons = document.querySelectorAll(".keys button");

let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      currentInput = "";
      display.textContent = "0";
    } 
      else if (value === "=") {  
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;      
    } 
     else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
