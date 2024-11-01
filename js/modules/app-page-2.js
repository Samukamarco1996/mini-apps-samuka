import laptopsDatabase from "../../dbs/app-page-2-database.js";

class App2 {
  constructor(paragraphCatalogInfo, inputCheckboxes, buttonFilter, divResults) {
    this.paragraphCatalogInfo = paragraphCatalogInfo;
    this.inputCheckboxes = inputCheckboxes;
    this.buttonFilter = buttonFilter;
    this.divResults = divResults;
  }

  exec() {
    this.showCatalogInfo();
    this.eventsListener(this.buttonFilter, "click", this.filter.bind(this));
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  showCatalogInfo() {
    this.paragraphCatalogInfo.innerText = `Este catálogo atualmente conta com as informações de ${laptopsDatabase.length} notebooks!`;
  }

  filter() {
    this.resetResults();
    const selectedBrands = Array.from(this.inputCheckboxes)
      .filter((input) => input.checked)
      .map((input) => input.value);
    const results = laptopsDatabase.filter((laptop) => {
      return selectedBrands.includes(laptop.brand);
    });

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        const resultLine = window.document.createElement("p");
        resultLine.style.margin = "var(--average-unit) 0px";
        const resultLink = window.document.createElement("a");
        resultLink.href = `https://www.google.com.br/search?q=Notebook+${results[i].brand}+${results[i].model}`;
        resultLink.target = "_blank";
        resultLink.style.color = "black";
        const resultString = `Marca: ${results[i].brand} - Modelo: ${results[i].model}
        Processador: ${results[i].processor} - Memória RAM: ${results[i].ramSize}GB`;
        resultLink.innerText = resultString;
        resultLine.appendChild(resultLink);
        this.divResults.appendChild(resultLine);
        this.uncheckInputs();
      }
    } else {
      const noResult = window.document.createElement("p");
      const noResultMessage = "Nenhum resultado encontrado!";
      noResult.innerText = noResultMessage.toUpperCase();
      noResult.style.color = "red";
      noResult.style.textAlign = "center";
      this.divResults.appendChild(noResult);
      this.uncheckInputs();
    }
  }

  resetResults() {
    if (this.divResults.children.length > 0) {
      while (this.divResults.firstChild) {
        this.divResults.firstChild.remove();
      }
    }
    const firstInfo = window.document.createElement("p");
    firstInfo.style.fontStyle = "italic";
    firstInfo.style.color = "var(--main-color-dark)";
    firstInfo.style.marginBottom = "5px";
    firstInfo.style.textAlign = "center";
    firstInfo.innerText =
      "Clique em qualquer resultado da pesquisa para realizar uma busca automática do produto clicado no Google!";
    this.divResults.appendChild(firstInfo);
  }

  uncheckInputs() {
    this.inputCheckboxes.forEach((input) => (input.checked = false));
  }
}

const app2Exe = new App2(
  window.document.querySelector(
    "#app-div > div:nth-of-type(1) > p:nth-of-type(2)"
  ),
  window.document.querySelectorAll('.filter-section input[type="checkbox"]'),
  window.document.querySelector(".filter-section button"),
  window.document.querySelector("#app-div > div:nth-of-type(3)")
);
app2Exe.exec();
