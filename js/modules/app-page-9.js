class App9 {
  constructor(inputsNumberValues, buttonsOperations) {
    this.inputsNumberValues = inputsNumberValues;
    this.buttonsOperations = buttonsOperations;
  }

  exec() {
    // console.log(this.inputsNumberValues, this.buttonsOperations);
    this.eventsListener(
      this.buttonsOperations[0],
      "click",
      this.sumOperation.bind(this)
    );
    this.eventsListener(
      this.buttonsOperations[1],
      "click",
      this.subtracionOperation.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  isValidNumber(value) {
    if (Number(value)) {
      return true;
    } else {
      return false;
    }
  }

  sumOperation() {
    const num1 = Number(this.inputsNumberValues[0].value);
    const num2 = Number(this.inputsNumberValues[1].value);
    if (this.isValidNumber(num1) && this.isValidNumber(num2)) {
      window.alert(`${num1} + ${num2} = ${(num1 + num2)}`);
      this.inputsNumberValues[0].value = "";
      this.inputsNumberValues[1].value = "";
      this.inputsNumberValues[0].focus();
    } else {
      window.alert("Preencha os campos com valores numéricos válidos!");
      this.inputsNumberValues[0].focus();
    }
  }

  subtracionOperation() {
    const num1 = Number(this.inputsNumberValues[2].value);
    const num2 = Number(this.inputsNumberValues[3].value);
    if (this.isValidNumber(num1) && this.isValidNumber(num2)) {
      window.alert(`${num1} - ${num2} = ${(num1 - num2)}`);
      this.inputsNumberValues[2].value = "";
      this.inputsNumberValues[3].value = "";
      this.inputsNumberValues[2].focus();
    } else {
      window.alert("Preencha os campos com valores numéricos válidos!");
      this.inputsNumberValues[2].focus();
    }
  }
}

const app9Exe = new App9(
  window.document.querySelectorAll('input[type="number"]'),
  window.document.querySelectorAll("button")
);
app9Exe.exec();
