class App6 {
  constructor(currencyValue, paragraphResult) {
    this.currencyValue = currencyValue;
    this.paragraphResult = paragraphResult;
  }

  exec() {
    this.eventsListener(
      this.currencyValue,
      "input",
      this.debounceFunct(this.currencyConversion.bind(this), 1000)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  debounceFunct(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  async currencyConversion() {
    try {
      const apiRequest = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
      );
      if (!apiRequest.ok) {
        throw new Error(
          "Erro na conversão! Por favor, tente novamente mais tarde!"
        );
      } else {
        const apiAnswer = await apiRequest.json();
        const dollarConversion =
          Number(this.currencyValue.value) / Number(apiAnswer.USDBRL.bid);
        const euroConversion =
          Number(this.currencyValue.value) / Number(apiAnswer.EURBRL.bid);
        const dollarResultString = dollarConversion
          .toFixed(3)
          .replace(".", ",");
        const euroResultString = euroConversion.toFixed(3).replace(".", ",");
        this.paragraphResult.innerText = `Dólar Americano ($): ${dollarResultString}\n
        Euro (€): ${euroResultString}`;
      }
    } catch (error) {
      window.alert("Erro na conversão! Por favor, tente novamente mais tarde!");
    }
  }
}

const app6Exe = new App6(
  window.document.querySelector("#app-div input"),
  window.document.querySelector("#app-div > div > p:nth-of-type(2)")
);
app6Exe.exec();
