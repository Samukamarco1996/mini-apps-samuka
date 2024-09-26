class app1 {
  constructor(domElement) {
    this.domElement = domElement;
  }

  exec() {
    this.domElement.innerText = "Em desenvolvimento...";
  }
}

const app1Exe = new app1(window.document.querySelector("main > section > p"));
app1Exe.exec();
