class App9 {
  constructor(inputsNumberValues, buttonsOperations) {
    this.inputsNumberValues = inputsNumberValues;
    this.buttonsOperations = buttonsOperations;
  }

  exec() {
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
    this.eventsListener(
      this.buttonsOperations[2],
      "click",
      this.counter.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  isValidNumber(value) {
    if (value !== "" && !isNaN(value)) {
      return true;
    } else {
      return false;
    }
  }

  sumOperation() {
    const num1 = Number(this.inputsNumberValues[0].value);
    const num2 = Number(this.inputsNumberValues[1].value);
    if (this.isValidNumber(num1) && this.isValidNumber(num2)) {
      window.alert(`${num1} + ${num2} = ${num1 + num2}`);
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
      window.alert(`${num1} - ${num2} = ${num1 - num2}`);
      this.inputsNumberValues[2].value = "";
      this.inputsNumberValues[3].value = "";
      this.inputsNumberValues[2].focus();
    } else {
      window.alert("Preencha os campos com valores numéricos válidos!");
      this.inputsNumberValues[2].focus();
    }
  }

  crescentCounter(firstStep, lastStep, incrementValue) {
    let resultString = "";
    for (let i = firstStep; i <= lastStep; i += incrementValue) {
      resultString += ` ${i} `;
    }
    if (incrementValue >= lastStep) {
      window.alert(
        "O valor do incremento é igual ou maior do que o valor inicial." +
          "Por isso o contador retornou apenas o valor inicial!"
      );
    }
    window.alert(`Resultado: ${resultString.trim()}`);
  }

  decrescentCounter(firstStep, lastStep, decrementValue) {
    let resultString = "";
    for (let i = firstStep; i >= lastStep; i -= decrementValue) {
      resultString += ` ${i} `;
    }
    if (decrementValue >= firstStep) {
      window.alert(
        "O valor do incremento é igual ou maior do que o valor inicial." +
          "Por isso o contador retornou apenas o valor inicial!"
      );
    }
    window.alert(`Resultado: ${resultString.trim()}`);
  }

  counter() {
    const numFirstStep = Number(this.inputsNumberValues[4].value);
    const numLastStep = Number(this.inputsNumberValues[5].value);
    let numIncrementDecrement = Number(this.inputsNumberValues[6].value);

    if (
      this.isValidNumber(numFirstStep) &&
      this.isValidNumber(numLastStep) &&
      this.isValidNumber(numIncrementDecrement)
    ) {
      if (numIncrementDecrement >= 0) {
        if (numIncrementDecrement === 0) {
          window.alert(
            "O valor de incremento/decremento não pode ser 0. Trocando o valor para 1!"
          );
          this.inputsNumberValues[6].value = "1";
          numIncrementDecrement = 1;
        }
        if (numFirstStep !== numLastStep) {
          if (numFirstStep < numLastStep) {
            this.crescentCounter(
              numFirstStep,
              numLastStep,
              numIncrementDecrement
            );
          } else {
            this.decrescentCounter(
              numFirstStep,
              numLastStep,
              numIncrementDecrement
            );
          }
        } else {
          window.alert(
            "O valor inicial e final precisam ser diferentes!" +
              "Preencha todos os campos com valores numéricos corretamente!"
          );
        }
      } else {
        window.alert(
          "O valor de incremento/decremento não pode ser um número negativo!"
        );
      }
    } else {
      window.alert(
        "Preencha todos os campos com valores numéricos corretamente!"
      );
    }
  }
}

const app9Exe = new App9(
  window.document.querySelectorAll('input[type="number"]'),
  window.document.querySelectorAll("button")
);
app9Exe.exec();
