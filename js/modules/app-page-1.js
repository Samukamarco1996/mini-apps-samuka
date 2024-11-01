class App1 {
  constructor(textareaElement, buttonsRegexActions) {
    this.textareaElement = textareaElement;
    this.buttonsRegexActions = buttonsRegexActions;
  }

  chosenHandler = -1;

  exec() {
    this.buttonsRegexActions.forEach((element, index) => {
      this.eventsListener(element, "click", () => {
        this.chosenHandler = index;
        this.chosenHandlerCalling();
      });
    });
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  verifyMaxCharacters(text) {
    if (text.length <= 10000) {
      return true;
    } else {
      return false;
    }
  }

  isNotTextElementEmpty(textElement) {
    if (textElement.value.trim() !== "") {
      return true;
    } else {
      return false;
    }
  }

  chosenHandlerCalling() {
    switch (this.chosenHandler) {
      case 0:
        this.vowelOrConsonant();
        break;
      case 1:
        this.emailValidation();
        break;
      case 2:
        this.searchText();
        break;
      case 3:
        this.passwordCheck();
        break;
    }
  }

  vowelOrConsonant() {
    // Verify if string is a single letter;
    const regex1 = new RegExp("^[a-zç]$", "i");
    // Verify if letter is a vowel;
    const regex2 = new RegExp("[aeiou]", "i");

    if (this.isNotTextElementEmpty(this.textareaElement)) {
      if (this.verifyMaxCharacters(this.textareaElement.value)) {
        if (this.textareaElement.value.trim().match(regex1)) {
          if (this.textareaElement.value.match(regex2)) {
            window.alert("A letra digitada é uma vogal!");
          } else {
            window.alert("A letra digitada é uma consoante!");
          }
        } else {
          window.alert("Digite uma letra apenas!");
        }
      } else {
        window.alert(
          "O tamanho máximo permitido no texto é de 10 mil caracteres!"
        );
      }
    } else {
      window.alert("Digite algo na área de texto!");
    }
  }

  emailValidation() {
    // Verify if e-mail address has an @ (at)
    // and ends with a valid top-level domain (eg: .com, .net, .org);
    const regex1 = new RegExp("^[^@]+@[^@]+(?<!\\.)\\.[a-z]{2,}$", "i");
    if (this.isNotTextElementEmpty(this.textareaElement)) {
      if (this.verifyMaxCharacters(this.textareaElement.value)) {
        if (this.textareaElement.value.trim().match(regex1)) {
          window.alert("Este endereço de email é válido!");
        } else {
          window.alert("Este endereço de email não é válido!");
        }
      } else {
        window.alert(
          "O tamanho máximo permitido no texto é de 10 mil caracteres!"
        );
      }
    } else {
      window.alert("Digite algo na área de texto!");
    }
  }

  searchText() {
    let searchPrompt;
    let searchConfirm;
    let searchResult = [];
    if (this.isNotTextElementEmpty(this.textareaElement)) {
      if (this.verifyMaxCharacters(this.textareaElement.value)) {
        searchPrompt = window.prompt(
          "Digite uma palavra ou trecho para ser pesquisado no texto:"
        );
        if (searchPrompt !== null) {
          if (searchPrompt.trim() !== "") {
            searchConfirm = window.confirm(
              `Deseja fazer uma pesquisa absoluta ou relativa?
            Clique em "OK" para pesquisa absoluta ou "Cancelar" para pesquisa relativa!`
            );
            if (searchConfirm) {
              // Absolute search;
              const regex1 = new RegExp(`\\b${searchPrompt}\\b`, "gi");
              searchResult = this.textareaElement.value.match(regex1);
              if (searchResult !== null) {
                window.alert("A pesquisa encontrou resultado (s)!");
              } else {
                window.alert("A pesquisa não encontrou resultado (s)!");
              }
            } else {
              // Relative search;
              const regex2 = new RegExp(`${searchPrompt}`, "gi");
              searchResult = this.textareaElement.value.match(regex2);
              if (searchResult !== null) {
                window.alert("A pesquisa encontrou resultado (s)!");
              } else {
                window.alert("A pesquisa não encontrou resultado (s)!");
              }
            }
          } else {
            window.alert("Digite algo no campo de pesquisa!");
          }
        } else {
          return;
        }
      } else {
        window.alert(
          "O tamanho máximo permitido no texto é de 10 mil caracteres!"
        );
      }
    } else {
      window.alert("Digite algo na área de texto!");
    }
  }

  passwordCheck() {
    // Verify if passwords contains at least
    // one uppercase letter, one lowercase letter,
    // one number and one special character
    const regex1 = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\d])(?=.*[^a-zA-Z\\d\\n]).+$"
    );
    if (this.isNotTextElementEmpty(this.textareaElement)) {
      if (this.verifyMaxCharacters(this.textareaElement.value)) {
        if (this.textareaElement.value.match(regex1)) {
          window.alert("Sua senha é forte!");
        } else {
          window.alert("Sua senha não é forte!");
        }
      } else {
        window.alert(
          "O tamanho máximo permitido no texto é de 10 mil caracteres!"
        );
      }
    } else {
      window.alert("Digite algo na área de texto!");
    }
  }
}

const app1Exe = new App1(
  window.document.querySelector("#app-div textarea"),
  window.document.querySelectorAll("#app-div button")
);
app1Exe.exec();
