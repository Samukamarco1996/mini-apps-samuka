class App5 {
  constructor(inputZipCode, buttonSearch, paragraphsSearchResult) {
    this.inputZipCode = inputZipCode;
    this.buttonSearch = buttonSearch;
    this.paragraphsSearchResult = paragraphsSearchResult;
  }

  searchedZipCode = "N/A";
  region = "N/A";
  state = "N/A";
  city = "N/A";
  neighborhood = "N/A";
  address = "N/A";

  exec() {
    this.showResult();
    this.eventsListener(
      this.buttonSearch,
      "click",
      this.searchAddress.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  showResult() {
    this.inputZipCode.value = "";
    this.paragraphsSearchResult[0].innerText = `CEP buscado: ${this.searchedZipCode}`;
    this.paragraphsSearchResult[1].innerText = `Região: ${this.region}
    Estado: ${this.state}
    Cidade: ${this.city}
    Bairro: ${this.neighborhood}
    Endereço: ${this.address}`;
  }

  isNotEmpty(input) {
    if (input.value.trim() !== "") {
      return true;
    } else {
      return false;
    }
  }

  async searchAddress() {
    if (this.isNotEmpty(this.inputZipCode)) {
      if (this.inputZipCode.value.length === 8) {
        try {
          const apiRequest = await fetch(
            `https://viacep.com.br/ws/${this.inputZipCode.value}/json/`
          );

          if (!apiRequest.ok) {
            throw new Error("Erro! Por favor, tente novamente mais tarde!");
          } else {
            const apiAnswer = await apiRequest.json();
            if (apiAnswer.erro) {
              window.alert("Digite um CEP válido!");
              this.inputZipCode.value = "";
              return;
            } else {
              this.searchedZipCode = apiAnswer.cep;
              this.region = apiAnswer.regiao;
              this.state = apiAnswer.estado;
              this.city = apiAnswer.localidade || "N/A";
              this.neighborhood = apiAnswer.bairro || "N/A";
              this.address = apiAnswer.logradouro || "N/A";
              this.showResult();
              this.inputZipCode.focus();
            }
          }
        } catch (error) {
          window.alert("Erro! Por favor, tente novamente mais tarde!");
          this.inputZipCode.value = "";
        }
      } else {
        window.alert("Digite um CEP válido!");
        this.inputZipCode.value = "";
      }
    } else {
      window.alert("Digite um CEP válido!");
      this.inputZipCode.value = "";
    }
  }
}

const app5Exe = new App5(
  window.document.querySelector("#app-div input"),
  window.document.querySelector("#app-div button"),
  window.document.querySelectorAll("#app-div > div:nth-of-type(2) p")
);
app5Exe.exec();
