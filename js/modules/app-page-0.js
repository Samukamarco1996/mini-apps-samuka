class app0 {
  constructor(domElement) {
    this.domElement = domElement;
  }

  exec() {
    this.domElement.innerText = "Em desenvolvimento...";
  }
}

const app0Exe = new app0(window.document.querySelector("main > section > p"));
app0Exe.exec();
