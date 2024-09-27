class app0 {
  constructor(inputAddItem, buttonAddItem, buttonArrayHandlers) {
    this.inputAddItem = inputAddItem;
    this.buttonAddItem = buttonAddItem;
    this.buttonArrayHandlers = buttonArrayHandlers;
  }

  mainArray = [];
  chosenHandler = -1;

  exec() {
    this.eventsListener(this.buttonAddItem, "click", this.addItem.bind(this));
    this.buttonArrayHandlers.forEach((element, index) =>
      this.eventsListener(element, "click", () => {
        this.chosenHandler = index;
        this.chosenHandlerCalling();
      })
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  isNotArrayEmpty(array) {
    return array.length > 0;
  }

  isNumber(typedItem) {
    const checkTypedItem = Number(typedItem);
    if (!isNaN(checkTypedItem)) {
      return true;
    } else {
      return false;
    }
  }

  AreAllItemsString(array) {
    return array.every((element) => typeof element === "string");
  }

  AreAllItemsNumber(array) {
    return array.every((element) => typeof element === "number");
  }

  addItem() {
    if (this.inputAddItem.value !== "") {
      if (this.mainArray.length <= 50) {
        if (this.isNumber(this.inputAddItem.value)) {
          this.mainArray.push(Number(this.inputAddItem.value));
        } else {
          this.mainArray.push(this.inputAddItem.value);
        }
        this.inputAddItem.value = "";
        this.inputAddItem.focus();
        window.alert("Item adicionado!");
      } else {
        window.alert("Limite máximo de itens atingido!");
      }
    } else {
      window.alert("Não é possível adicionar um item vazio na lista!");
    }
  }

  chosenHandlerCalling() {
    switch (this.chosenHandler) {
      case 0:
        this.showMainArray();
        break;
      case 1:
        this.clearMainArray();
        break;
      case 2:
        this.sortCrescent();
        break;
      case 3:
        this.sortDecrescent();
        break;
      case 4:
        this.filterEvenNumbers();
        break;
      case 5:
        this.filterOddNumbers();
        break;
      case 6:
        this.filterPositiveNumbers();
        break;
      case 7:
        this.filterNegativeNumbers();
        break;
    }
  }

  showMainArray() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      const modifiedArray = [...this.mainArray].join(";\n");
      window.alert(`LISTA:\n${modifiedArray};`);
    } else {
      window.alert("Lista vazia!");
    }
  }

  clearMainArray() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      const confirmAction = window.confirm(
        "Deseja realmente zerar a lista atual?"
      );
      if (confirmAction) {
        this.mainArray.splice(0, this.mainArray.length);
        window.alert("Lista zerada com sucesso!");
      }
    } else {
      window.alert("A lista já está vazia!");
    }
  }

  sortCrescent() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsString(this.mainArray)) {
        let modifiedArray = [...this.mainArray].sort();
        modifiedArray = modifiedArray.join(";\n");
        window.alert(`LISTA:\n${modifiedArray};`);
      } else {
        window.alert(
          "Esta função funciona apenas com listas de palavras e nomes!"
        );
      }
    } else {
      window.alert("Lista vazia!");
    }
  }

  sortDecrescent() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsString(this.mainArray)) {
        let modifiedArray = [...this.mainArray].sort();
        modifiedArray.reverse();
        modifiedArray = modifiedArray.join(";\n");
        window.alert(`LISTA:\n${modifiedArray};`);
      } else {
        window.alert(
          "Esta função funciona apenas com listas de palavras e nomes!"
        );
      }
    } else {
      window.alert("Lista vazia!");
    }
  }

  filterEvenNumbers() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsNumber(this.mainArray)) {
        let modifiedArray = [...this.mainArray].filter(
          (item) => item % 2 === 0
        );
        if (this.isNotArrayEmpty(modifiedArray)) {
          modifiedArray = modifiedArray.join(";\n");
          window.alert(`LISTA:\n${modifiedArray};`);
        } else {
          window.alert("O filtro não retornou resultados!");
        }
      } else {
        window.alert("Esta função funciona apenas com listas de números!");
      }
    } else {
      window.alert("Lista vazia!");
    }
  }

  filterOddNumbers() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsNumber(this.mainArray)) {
        let modifiedArray = [...this.mainArray].filter(
          (item) => item % 2 !== 0
        );
        if (this.isNotArrayEmpty(modifiedArray)) {
          modifiedArray = modifiedArray.join(";\n");
          window.alert(`LISTA:\n${modifiedArray};`);
        } else {
          window.alert("O filtro não retornou resultados!");
        }
      } else {
        window.alert("Esta função funciona apenas com listas de números!");
      }
    } else {
      window.alert("Lista vazia!");
    }
  }

  filterPositiveNumbers() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsNumber(this.mainArray)) {
        let modifiedArray = [...this.mainArray].filter((item) => item > 0);
        if (this.isNotArrayEmpty(modifiedArray)) {
          modifiedArray = modifiedArray.join(";\n");
          window.alert(`LISTA:\n${modifiedArray};`);
        } else {
          window.alert("O filtro não retornou resultados!");
        }
      } else {
        window.alert("Esta função funciona apenas com listas de números!");
      }
    } else {
      window.alert("Lista vazia!");
    }
  }

  filterNegativeNumbers() {
    if (this.isNotArrayEmpty(this.mainArray)) {
      if (this.AreAllItemsNumber(this.mainArray)) {
        let modifiedArray = [...this.mainArray].filter((item) => item < 0);
        if (this.isNotArrayEmpty(modifiedArray)) {
          modifiedArray = modifiedArray.join(";\n");
          window.alert(`LISTA:\n${modifiedArray};`);
        } else {
          window.alert("O filtro não retornou resultados!");
        }
      } else {
        window.alert("Esta função funciona apenas com listas de números!");
      }
    } else {
      window.alert("Lista vazia!");
    }
  }
}

const app0Exe = new app0(
  window.document.querySelector("#app-div input"),
  window.document.querySelector("#app-div > div:nth-of-type(1) > button"),
  window.document.querySelectorAll("#app-div > div:nth-of-type(2) button")
);
app0Exe.exec();
