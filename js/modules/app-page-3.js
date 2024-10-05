class app3 {
  constructor(inputsAge, buttonsCalculate, labelsResult) {
    this.inputsAge = inputsAge;
    this.buttonsCalculate = buttonsCalculate;
    this.labelsResult = labelsResult;
  }

  yearNow = new Date().getFullYear();

  exec() {
    this.eventsListener(
      this.buttonsCalculate[0],
      "click",
      this.calculateTypedAge.bind(this)
    );
    this.eventsListener(
      this.buttonsCalculate[1],
      "click",
      this.calculateTypedYear.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  isNotEmpty(input) {
    if (input.value.trim() !== "") {
      return true;
    } else {
      return false;
    }
  }

  isValidEntry(elementsIndex) {
    if (
      this.isNotEmpty(this.inputsAge[elementsIndex]) &&
      Number(this.inputsAge[elementsIndex].value) &&
      Number(this.inputsAge[elementsIndex].value) <= this.yearNow
    ) {
      return true;
    } else {
      return false;
    }
  }

  calculateTypedAge() {
    if (this.isValidEntry(0)) {
      this.resetResults();
      const result = this.yearNow - Number(this.inputsAge[0].value);
      this.labelsResult[0].innerText = `Você nasceu no ano ${result} D.C.`;
      this.inputsAge[0].value = "";
    } else {
      window.alert("Para calcular é necessário digitar uma idade válida!");
    }
  }

  calculateTypedYear() {
    if (this.isValidEntry(1)) {
      this.resetResults();
      const result = this.yearNow - Number(this.inputsAge[1].value);
      this.labelsResult[1].innerText = `Você tem ${result} anos de idade`;
      this.inputsAge[1].value = "";
    } else {
      window.alert("Para calcular é necessário digitar um ano válido!");
    }
  }

  resetResults() {
    for (let i = 0; i < this.labelsResult.length; i++) {
      this.labelsResult[i].innerText = "O resultado aparecerá aqui!";
    }
  }
}

const app3Exe = new app3(
  window.document.querySelectorAll("#app-div input"),
  window.document.querySelectorAll("#app-div button"),
  window.document.querySelectorAll("#app-div label")
);
app3Exe.exec();
