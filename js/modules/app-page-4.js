class app4 {
  constructor(
    buttonsGame,
    inputGuessNumber,
    buttonAttempt,
    paragraphResult,
    imgsResult
  ) {
    this.buttonsGame = buttonsGame;
    this.inputGuessNumber = inputGuessNumber;
    this.buttonAttempt = buttonAttempt;
    this.paragraphResult = paragraphResult;
    this.imgsResult = imgsResult;
  }

  gameOn = false;
  chosenHandler = -1;
  randomNum = -1;
  maxRandomNumber = 100;
  attempts = 0;

  exec() {
    this.buttonsGame.forEach((element, index) => {
      this.eventsListener(element, "click", () => {
        this.chosenHandler = index;
        this.chosenHandlerCalling();
      });
    });
    this.initialGameState();
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  chosenHandlerCalling() {
    switch (this.chosenHandler) {
      case 0:
        this.startGame();
        break;
      case 1:
        this.finishGame();
        break;
    }
  }

  startGame() {
    this.attempts = 0;
    this.gameOn = true;
    this.inputGuessNumber.disabled = false;
    this.buttonAttempt.disabled = false;
    this.buttonAttempt.style.backgroundColor = "var(--main-color-dark)";
    this.imgsResult[0].style.display = "none";
    this.imgsResult[1].style.display = "none";
    this.paragraphResult.innerText =
      "Digite um número para tentar adivinhar o número escolhido!";
    this.paragraphResult.style.color = "var(--main-color-dark)";

    this.buttonsGame[0].disabled = true;
    this.buttonsGame[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    this.buttonsGame[1].disabled = false;
    this.buttonsGame[1].style.backgroundColor = "var(--main-color-dark)";

    this.newGame();
  }

  finishGame() {
    this.gameOn = false;
    this.initialGameState();

    this.buttonsGame[0].disabled = false;
    this.buttonsGame[0].style.backgroundColor = "var(--main-color-dark)";
    this.inputGuessNumber.value = "";
  }

  initialGameState() {
    this.inputGuessNumber.disabled = true;
    this.buttonAttempt.disabled = true;
    this.buttonAttempt.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    this.imgsResult[0].style.display = "none";
    this.imgsResult[1].style.display = "none";
    this.paragraphResult.innerText = "Inicie um novo jogo!";
    this.paragraphResult.style.color = "gray";
    this.buttonsGame[1].disabled = true;
    this.buttonsGame[1].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }

  newGame() {
    if (this.gameOn) {
      this.randomNum = parseInt(Math.random() * this.maxRandomNumber + 1);
      window.alert(
        `Um número inteiro aleatório entre 1 e ${this.maxRandomNumber} foi escolhido! Tente adivinhar o número!`
      );

      this.eventsListener(
        this.buttonAttempt,
        "click",
        this.newAttempt.bind(this)
      );
    }
  }

  newAttempt() {
    const typedNumber = Number(this.inputGuessNumber.value.trim());
    if (this.isValidNumber(typedNumber)) {
      this.attempts++;
      this.inputGuessNumber.value = "";
      this.paragraphResult.classList.remove("animate-result");
      void this.paragraphResult.offsetWidth;
      this.paragraphResult.classList.add("animate-result");
      if (typedNumber === this.randomNum) {
        this.paragraphResult.innerText = `O número ${typedNumber} está CERTO! PARABÉNS!!! Você acertou na ${this.attempts}ª tentativa!`;
        this.imgsResult[0].style.display = "inherit";
        this.imgsResult[1].style.display = "none";
        this.buttonAttempt.disabled = true;
        this.buttonAttempt.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      } else {
        this.paragraphResult.innerText = `O número ${typedNumber} está errado. A resposta correta é um número ${
          typedNumber > this.randomNum ? "menor" : "maior"
        }`;
        this.imgsResult[0].style.display = "none";
        this.imgsResult[1].style.display = "inherit";
      }
    } else {
      window.alert(
        `Digite um número inteiro válido e dentro do intervalo correto (número entre 1 e ${this.maxRandomNumber})!`
      );
    }
  }

  isValidNumber(typedNumber) {
    if (
      parseInt(typedNumber) &&
      typedNumber >= 1 &&
      typedNumber <= this.maxRandomNumber
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const app4Exe = new app4(
  window.document.querySelectorAll("#app-div > div > div:nth-child(1) button"),
  window.document.querySelector("#app-div > div > div:nth-child(2) input"),
  window.document.querySelector("#app-div > div > div:nth-child(2) button"),
  window.document.querySelector("#app-div > div > div:nth-child(3) p"),
  window.document.querySelectorAll("#app-div > div > div:nth-child(3) img")
);
app4Exe.exec();
